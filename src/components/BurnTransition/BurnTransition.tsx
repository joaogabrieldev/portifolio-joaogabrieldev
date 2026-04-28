"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";

/* =============================================================================
 * Port fiel do componente "Burn Transition" do Framer (Framer University):
 *
 *  - Render WebGL com 4 fragment shaders (main + extração de máscara para bloom
 *    + gaussian blur separável + composite).
 *  - Animação combinada por tempo (baseAnimationSpeed) e por scroll
 *    (scrollSensitivity, com delta acumulado).
 *  - Parallax opcional desloca a "linha de queima" conforme o elemento
 *    atravessa a viewport.
 *
 *  Fonte original: https://burn-trans.learnframer.site (bundle Framer).
 *  Os shaders abaixo estão preservados literalmente em GLSL.
 * ============================================================================= */

export type BurnHorizontalMovement = "left" | "center" | "right";

export interface BurnTransitionMovement {
  horizontal?: BurnHorizontalMovement;
  /** 0–1, padrão 0.5 — quanto a linha "evolui" verticalmente com o scroll. */
  vertical?: number;
}

export interface BurnTransitionProps {
  /** Pausa o ticker (alinha com a flag "Preview" no Framer). */
  preview?: boolean;
  /** Cor sólida abaixo da linha de queima (a "cortina"). */
  color?: string;
  /** Cor do "fogo" no zona de transição. Default: igual a `color`. */
  transitionColor?: string;
  /** 0–1 — granularidade do ruído (mapeado para u_noise_scale ∈ [1, 20]). */
  noiseScale?: number;
  /** 0–1 — intensidade da deformação da linha (u_noise_intensity ∈ [0, .5]). */
  noiseIntensity?: number;
  /** 0–1 — sensibilidade ao delta de scroll (interno ∈ [0, .01]). */
  scrollSensitivity?: number;
  /** 0–1 — velocidade base por tempo (interno ∈ [0, .1]). */
  baseAnimationSpeed?: number;
  /** 0–1 — espessura máxima da zona de transição (u_edge_softness ∈ [.01, .2]). */
  edgeSoftness?: number;
  /** 0–1 — intensidade do bloom (passado direto para u_bloom_intensity). */
  bloomIntensity?: number;
  /** 0–1 — raio do blur do bloom (interno ∈ [0, .3]). */
  bloomRadius?: number;
  /** Liga deslocamento parallax baseado na posição na viewport. */
  parallaxEnabled?: boolean;
  /** Direção/quantidade de movimento horizontal/vertical do offset de animação. */
  movement?: BurnTransitionMovement;
  className?: string;
  style?: CSSProperties;
}

/* -----------------------------------------------------------------------------
 * Helpers de cor (parseia rgb()/rgba()/hex em [0–1]).
 * -------------------------------------------------------------------------- */

interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

const VAR_REGEX =
  /var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*))?\s*\)/;

function resolveCssVar(input: string): string {
  if (!input || !input.startsWith("var(")) {
    return input;
  }
  const match = VAR_REGEX.exec(input);
  if (!match) return input;
  const fallback = (match[2] || "").trim();
  return fallback.startsWith("var(")
    ? resolveCssVar(fallback)
    : fallback || input;
}

function parseColor(input: string): RGBA {
  if (!input || !input.trim()) {
    return { r: 0, g: 0, b: 0, a: 1 };
  }
  const trimmed = input.trim();
  const rgbMatch = trimmed.match(
    /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)/i,
  );
  if (rgbMatch) {
    return {
      r: clamp(parseFloat(rgbMatch[1]), 0, 255) / 255,
      g: clamp(parseFloat(rgbMatch[2]), 0, 255) / 255,
      b: clamp(parseFloat(rgbMatch[3]), 0, 255) / 255,
      a: rgbMatch[4] === undefined ? 1 : clamp(parseFloat(rgbMatch[4]), 0, 1),
    };
  }
  const hex = trimmed.replace(/^#/, "");
  if (hex.length === 8) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: parseInt(hex.slice(6, 8), 16) / 255,
    };
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255,
      a: 1,
    };
  }
  if (hex.length === 4) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
      a: parseInt(hex[3] + hex[3], 16) / 255,
    };
  }
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
      a: 1,
    };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function lerp(t: number, a: number, b: number): number {
  return a + clamp(t, 0, 1) * (b - a);
}

/* Mappings copiados do bundle do Framer (ranges enviados aos uniforms). */
const mapNoiseScale = (v: number) => lerp(v, 1, 20);
const mapNoiseIntensity = (v: number) => lerp(v, 0, 0.5);
const mapScrollSensitivity = (v: number) => lerp(v, 0, 0.01);
const mapBaseSpeed = (v: number) => lerp(v, 0, 0.1);
const mapEdgeSoftness = (v: number) => lerp(v, 0.01, 0.2);
const mapGrainScale = (v: number) => lerp(v, 50, 500);
const mapBloomRadius = (v: number) => lerp(v, 0, 0.3);

/* -----------------------------------------------------------------------------
 * Shaders
 * -------------------------------------------------------------------------- */

const VERTEX_SHADER = /* glsl */ `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = 0.5 * (a_position + 1.0);
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

/** Render principal: cor base + zona de transição com grain + alpha discard. */
const FRAGMENT_MAIN = /* glsl */ `
  precision mediump float;
  varying vec2 v_uv;
  uniform vec3 u_color;
  uniform vec3 u_transition_color;
  uniform float u_noise_scale;
  uniform float u_noise_intensity;
  uniform float u_scroll_offset;
  uniform float u_edge_softness;
  uniform float u_grain_scale;
  uniform float u_movement_horizontal;
  uniform float u_movement_vertical;
  uniform float u_parallax_offset;
  uniform float u_aspect_ratio;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  float detailedNoise(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 6; i++) {
      value += amplitude * noise(st);
      st *= 2.2;
      amplitude *= 0.45;
    }
    return value;
  }

  void main() {
    float baseLine = 0.5 + u_parallax_offset;
    float horizontalOffset = u_scroll_offset * u_movement_horizontal;
    float verticalOffset = u_scroll_offset * u_movement_vertical;

    vec2 noiseCoord = vec2(
      v_uv.x * u_aspect_ratio * u_noise_scale + horizontalOffset,
      v_uv.y * 3.0 + verticalOffset * 0.6
    );
    float edgeNoise = fbm(noiseCoord);
    float mainEdge = baseLine + (edgeNoise - 0.5) * u_noise_intensity;

    vec2 thicknessNoiseCoord = vec2(
      v_uv.x * u_aspect_ratio * u_noise_scale * 2.3 + horizontalOffset * 0.7,
      v_uv.y * 2.0 + verticalOffset * 0.4 + 100.0
    );
    float thicknessNoise = fbm(thicknessNoiseCoord);
    float minThickness = u_edge_softness * 0.1;
    float maxThickness = u_edge_softness;
    float localThickness = mix(minThickness, maxThickness, thicknessNoise);

    float lowerBound = mainEdge - localThickness * 0.4;
    float upperBound = mainEdge + localThickness * 0.6;

    vec2 grainCoord = vec2(
      v_uv.x * u_aspect_ratio * u_grain_scale * 3.0 + horizontalOffset * 0.5,
      v_uv.y * u_grain_scale * 3.0 + verticalOffset * 0.3
    );
    float grain = detailedNoise(grainCoord);

    vec2 fiberCoord = vec2(
      v_uv.x * u_aspect_ratio * u_grain_scale * 8.0 + horizontalOffset * 0.3,
      v_uv.y * u_grain_scale * 2.0 + verticalOffset * 0.2
    );
    float fiberNoise = noise(fiberCoord);

    float combinedGrain = grain * 0.6 + fiberNoise * 0.4;

    if (v_uv.y < lowerBound) {
      gl_FragColor = vec4(u_color, 1.0);
    } else if (v_uv.y < mainEdge) {
      float t = (v_uv.y - lowerBound) / max(mainEdge - lowerBound, 0.001);
      float grainThreshold = 1.0 - pow(t, 1.5);
      grainThreshold -= thicknessNoise * 0.2;
      if (combinedGrain > grainThreshold) {
        gl_FragColor = vec4(u_transition_color, 1.0);
      } else {
        gl_FragColor = vec4(u_color, 1.0);
      }
    } else if (v_uv.y < upperBound) {
      float t = (v_uv.y - mainEdge) / max(upperBound - mainEdge, 0.001);
      float grainThreshold = pow(t, 1.2);
      grainThreshold += thicknessNoise * 0.15;
      if (combinedGrain > grainThreshold) {
        gl_FragColor = vec4(u_transition_color, 1.0);
      } else {
        discard;
      }
    } else {
      discard;
    }
  }
`;

/** Extrai pixels próximos da `transitionColor` para servir de base do bloom. */
const FRAGMENT_BLOOM_MASK = /* glsl */ `
  precision mediump float;
  varying vec2 v_uv;
  uniform sampler2D u_texture;
  uniform vec3 u_transition_color;
  uniform vec3 u_base_color;

  void main() {
    vec4 pixel = texture2D(u_texture, v_uv);
    float distToTransition = length(pixel.rgb - u_transition_color);
    float distToBase = length(pixel.rgb - u_base_color);
    float isTransition = 1.0 - smoothstep(0.0, 0.5, distToTransition);
    float notBase = smoothstep(0.0, 0.3, distToBase);
    float mask = isTransition * notBase * pixel.a;
    mask = pow(mask, 0.8);
    gl_FragColor = vec4(1.0, 1.0, 1.0, mask);
  }
`;

/** Gaussian blur 1D (executado uma vez horizontal e outra vertical). */
const FRAGMENT_BLUR = /* glsl */ `
  precision mediump float;
  varying vec2 v_uv;
  uniform sampler2D u_texture;
  uniform vec2 u_direction;
  uniform vec2 u_resolution;
  uniform float u_radius;

  void main() {
    float blur_size = u_radius * 12.0;
    float alpha = 0.0;
    float totalWeight = 0.0;
    for (int i = -6; i <= 6; i++) {
      float offset = float(i);
      float weight = exp(-0.5 * (offset * offset) / 4.0);
      vec2 sampleOffset = u_direction * (offset * blur_size) / u_resolution;
      float sampleAlpha = texture2D(u_texture, v_uv + sampleOffset).a;
      alpha += sampleAlpha * weight;
      totalWeight += weight;
    }
    alpha = totalWeight > 0.0 ? alpha / totalWeight : 0.0;
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
  }
`;

/** Composite cena + bloom blureado. */
const FRAGMENT_COMPOSITE = /* glsl */ `
  precision mediump float;
  varying vec2 v_uv;
  uniform sampler2D u_scene;
  uniform sampler2D u_bloom;
  uniform float u_bloom_intensity;
  uniform vec3 u_transition_color;

  void main() {
    vec4 scene = texture2D(u_scene, v_uv);
    vec4 bloom = texture2D(u_bloom, v_uv);
    float bloomStrength = bloom.a * u_bloom_intensity;
    vec3 bloomColor = u_transition_color * bloomStrength * 2.0;
    if (scene.a < 0.001) {
      float glowAlpha = bloomStrength * 1.5;
      gl_FragColor = vec4(u_transition_color, glowAlpha);
    } else {
      vec3 result = scene.rgb + bloomColor;
      result = min(result, vec3(1.0));
      gl_FragColor = vec4(result, scene.a);
    }
  }
`;

/* -----------------------------------------------------------------------------
 * Helpers WebGL
 * -------------------------------------------------------------------------- */

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(
      "BurnTransition shader compile error:",
      gl.getShaderInfoLog(shader),
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function linkProgram(
  gl: WebGLRenderingContext,
  vs: WebGLShader,
  fs: WebGLShader,
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(
      "BurnTransition program link error:",
      gl.getProgramInfoLog(program),
    );
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

interface FBO {
  framebuffer: WebGLFramebuffer | null;
  texture: WebGLTexture | null;
}

function createFramebuffer(
  gl: WebGLRenderingContext,
  width: number,
  height: number,
): FBO {
  const texture = gl.createTexture();
  if (!texture) return { framebuffer: null, texture: null };

  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    width,
    height,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    null,
  );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

  const framebuffer = gl.createFramebuffer();
  if (!framebuffer) return { framebuffer: null, texture };

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    texture,
    0,
  );
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  return { framebuffer, texture };
}

/* -----------------------------------------------------------------------------
 * Componente
 * -------------------------------------------------------------------------- */

const DOWNSAMPLE = 2;

export function BurnTransition({
  preview = false,
  color = "#D9D6CA",
  transitionColor,
  noiseScale = 0.37,
  noiseIntensity = 0.3,
  scrollSensitivity = 0.4,
  baseAnimationSpeed = 0.1,
  edgeSoftness = 0.4,
  bloomIntensity = 0.5,
  bloomRadius = 0.1,
  parallaxEnabled = false,
  movement = { horizontal: "center", vertical: 0.5 },
  className,
  style,
}: BurnTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [supported, setSupported] = useState(true);

  /* Refs reativos para os uniforms — evitam reinicializar WebGL a cada prop. */
  const colorRef = useRef<[number, number, number]>([0, 0, 0]);
  const transitionColorRef = useRef<[number, number, number]>([0, 0, 0]);
  const noiseScaleRef = useRef(mapNoiseScale(noiseScale));
  const noiseIntensityRef = useRef(mapNoiseIntensity(noiseIntensity));
  const scrollSensitivityRef = useRef(mapScrollSensitivity(scrollSensitivity));
  const baseSpeedRef = useRef(mapBaseSpeed(baseAnimationSpeed));
  const edgeSoftnessRef = useRef(mapEdgeSoftness(edgeSoftness));
  const grainScaleRef = useRef(mapGrainScale(0));
  const bloomIntensityRef = useRef(bloomIntensity);
  const bloomRadiusRef = useRef(mapBloomRadius(bloomRadius));
  const parallaxEnabledRef = useRef(parallaxEnabled);
  const previewRef = useRef(preview);
  const horizontalRef = useRef(
    movement.horizontal === "left"
      ? 1
      : movement.horizontal === "right"
        ? -1
        : 0,
  );
  const verticalRef = useRef(movement.vertical ?? 0.5);

  /* Estado dinâmico de animação. */
  const lastScrollYRef = useRef(0);
  const lastScrollTsRef = useRef(0);
  const scrollOffsetRef = useRef(0);
  const animTimeRef = useRef(0);
  const animStartRef = useRef(0);
  const parallaxOffsetRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const rafRef = useRef<number | null>(null);

  /* Atualiza ref-cores quando os props mudam. */
  useEffect(() => {
    const resolved = parseColor(resolveCssVar(color));
    colorRef.current = [resolved.r, resolved.g, resolved.b];
  }, [color]);

  useEffect(() => {
    const source = transitionColor ? transitionColor : color;
    const resolved = parseColor(resolveCssVar(source));
    transitionColorRef.current = [resolved.r, resolved.g, resolved.b];
  }, [transitionColor, color]);

  useEffect(() => {
    noiseScaleRef.current = mapNoiseScale(noiseScale);
  }, [noiseScale]);
  useEffect(() => {
    noiseIntensityRef.current = mapNoiseIntensity(noiseIntensity);
  }, [noiseIntensity]);
  useEffect(() => {
    scrollSensitivityRef.current = mapScrollSensitivity(scrollSensitivity);
  }, [scrollSensitivity]);
  useEffect(() => {
    baseSpeedRef.current = mapBaseSpeed(baseAnimationSpeed);
  }, [baseAnimationSpeed]);
  useEffect(() => {
    edgeSoftnessRef.current = mapEdgeSoftness(edgeSoftness);
  }, [edgeSoftness]);
  useEffect(() => {
    bloomIntensityRef.current = bloomIntensity;
  }, [bloomIntensity]);
  useEffect(() => {
    bloomRadiusRef.current = mapBloomRadius(bloomRadius);
  }, [bloomRadius]);
  useEffect(() => {
    parallaxEnabledRef.current = parallaxEnabled;
  }, [parallaxEnabled]);
  useEffect(() => {
    previewRef.current = preview;
    if (preview && animStartRef.current > 0) {
      animStartRef.current = performance.now();
    }
  }, [preview]);
  useEffect(() => {
    horizontalRef.current =
      movement.horizontal === "left"
        ? 1
        : movement.horizontal === "right"
          ? -1
          : 0;
    verticalRef.current = movement.vertical ?? 0.5;
  }, [movement.horizontal, movement.vertical]);

  /* Init WebGL — uma única vez por mount. */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) {
      console.error("BurnTransition: WebGL not supported.");
      setSupported(false);
      return;
    }

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fsMain = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_MAIN);
    const fsMask = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_BLOOM_MASK);
    const fsBlur = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_BLUR);
    const fsComposite = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      FRAGMENT_COMPOSITE,
    );

    if (!vs || !fsMain || !fsMask || !fsBlur || !fsComposite) {
      setSupported(false);
      return;
    }

    const programMain = linkProgram(gl, vs, fsMain);
    const programMask = linkProgram(gl, vs, fsMask);
    const programBlur = linkProgram(gl, vs, fsBlur);
    const programComposite = linkProgram(gl, vs, fsComposite);

    if (!programMain || !programMask || !programBlur || !programComposite) {
      setSupported(false);
      return;
    }

    /* Quad fullscreen. */
    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    if (!buffer) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    /* Framebuffers off-screen para o pipeline de bloom. */
    const sceneFBO = createFramebuffer(gl, 256, 256);
    const maskFBO = createFramebuffer(gl, 256, 256);
    const blurHFBO = createFramebuffer(gl, 256, 256);
    const blurVFBO = createFramebuffer(gl, 256, 256);

    animStartRef.current = performance.now();

    /* Resize e parallax helpers. */
    const updateSize = () => {
      const { width, height } = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(width * dpr));
      const h = Math.max(1, Math.floor(height * dpr));
      if (canvas.width === w && canvas.height === h) return;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { width: w, height: h };
      gl.viewport(0, 0, w, h);
      const dw = Math.max(1, Math.floor(w / DOWNSAMPLE));
      const dh = Math.max(1, Math.floor(h / DOWNSAMPLE));
      const resizeTexture = (
        tex: WebGLTexture | null,
        tw: number,
        th: number,
      ) => {
        if (!tex) return;
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          tw,
          th,
          0,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          null,
        );
      };
      resizeTexture(sceneFBO.texture, w, h);
      resizeTexture(maskFBO.texture, dw, dh);
      resizeTexture(blurHFBO.texture, dw, dh);
      resizeTexture(blurVFBO.texture, dw, dh);
      gl.bindTexture(gl.TEXTURE_2D, null);
    };

    const updateParallax = () => {
      if (!parallaxEnabledRef.current) {
        parallaxOffsetRef.current = 0;
        return;
      }
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const top = rect.top;
      const bottom = rect.bottom;
      const h = rect.height;
      let s: number;
      if (top >= vh) {
        s = 1;
      } else if (bottom <= 0) {
        s = 0;
      } else {
        s = clamp(1 - (vh - top) / (vh + h), 0, 1);
      }
      parallaxOffsetRef.current = 1 - s - 0.5;
    };

    /* Passes de render. */
    const drawMain = (target: WebGLFramebuffer | null) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target);
      gl.viewport(0, 0, sizeRef.current.width, sizeRef.current.height);
      gl.useProgram(programMain);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      const aPos = gl.getAttribLocation(programMain, "a_position");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      const [cr, cg, cb] = colorRef.current;
      gl.uniform3f(gl.getUniformLocation(programMain, "u_color"), cr, cg, cb);
      const [tr, tg, tb] = transitionColorRef.current;
      gl.uniform3f(
        gl.getUniformLocation(programMain, "u_transition_color"),
        tr,
        tg,
        tb,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_noise_scale"),
        noiseScaleRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_noise_intensity"),
        noiseIntensityRef.current,
      );

      const now = performance.now();
      if (animStartRef.current === 0) animStartRef.current = now;
      animTimeRef.current =
        ((now - animStartRef.current) / 1000) * baseSpeedRef.current;

      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_scroll_offset"),
        animTimeRef.current + scrollOffsetRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_edge_softness"),
        edgeSoftnessRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_grain_scale"),
        grainScaleRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_movement_horizontal"),
        horizontalRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_movement_vertical"),
        verticalRef.current,
      );
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_parallax_offset"),
        parallaxOffsetRef.current,
      );
      const aspect =
        sizeRef.current.height > 0
          ? sizeRef.current.width / sizeRef.current.height
          : 1;
      gl.uniform1f(
        gl.getUniformLocation(programMain, "u_aspect_ratio"),
        aspect,
      );

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const drawMask = (
      sourceTex: WebGLTexture | null,
      target: WebGLFramebuffer | null,
    ) => {
      if (!sourceTex) return;
      gl.bindFramebuffer(gl.FRAMEBUFFER, target);
      const dw = Math.max(1, Math.floor(sizeRef.current.width / DOWNSAMPLE));
      const dh = Math.max(1, Math.floor(sizeRef.current.height / DOWNSAMPLE));
      gl.viewport(0, 0, dw, dh);
      gl.useProgram(programMask);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      const aPos = gl.getAttribLocation(programMask, "a_position");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, sourceTex);
      gl.uniform1i(gl.getUniformLocation(programMask, "u_texture"), 0);
      const [tr, tg, tb] = transitionColorRef.current;
      gl.uniform3f(
        gl.getUniformLocation(programMask, "u_transition_color"),
        tr,
        tg,
        tb,
      );
      const [br, bgc, bb] = colorRef.current;
      gl.uniform3f(
        gl.getUniformLocation(programMask, "u_base_color"),
        br,
        bgc,
        bb,
      );
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.BLEND);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const drawBlur = (
      sourceTex: WebGLTexture | null,
      target: WebGLFramebuffer | null,
      direction: [number, number],
    ) => {
      if (!sourceTex) return;
      gl.bindFramebuffer(gl.FRAMEBUFFER, target);
      const dw = Math.max(1, Math.floor(sizeRef.current.width / DOWNSAMPLE));
      const dh = Math.max(1, Math.floor(sizeRef.current.height / DOWNSAMPLE));
      gl.viewport(0, 0, dw, dh);
      gl.useProgram(programBlur);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      const aPos = gl.getAttribLocation(programBlur, "a_position");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, sourceTex);
      gl.uniform1i(gl.getUniformLocation(programBlur, "u_texture"), 0);
      gl.uniform2f(
        gl.getUniformLocation(programBlur, "u_direction"),
        direction[0],
        direction[1],
      );
      gl.uniform2f(gl.getUniformLocation(programBlur, "u_resolution"), dw, dh);
      gl.uniform1f(
        gl.getUniformLocation(programBlur, "u_radius"),
        bloomRadiusRef.current,
      );
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.BLEND);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const drawComposite = (
      sceneTex: WebGLTexture | null,
      bloomTex: WebGLTexture | null,
    ) => {
      if (!sceneTex || !bloomTex) return;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, sizeRef.current.width, sizeRef.current.height);
      gl.useProgram(programComposite);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      const aPos = gl.getAttribLocation(programComposite, "a_position");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, sceneTex);
      gl.uniform1i(gl.getUniformLocation(programComposite, "u_scene"), 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, bloomTex);
      gl.uniform1i(gl.getUniformLocation(programComposite, "u_bloom"), 1);
      gl.uniform1f(
        gl.getUniformLocation(programComposite, "u_bloom_intensity"),
        bloomIntensityRef.current,
      );
      const [tr, tg, tb] = transitionColorRef.current;
      gl.uniform3f(
        gl.getUniformLocation(programComposite, "u_transition_color"),
        tr,
        tg,
        tb,
      );
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.disable(gl.BLEND);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    };

    const renderFrame = () => {
      const useBloom =
        bloomIntensityRef.current > 0 &&
        sceneFBO.framebuffer &&
        sceneFBO.texture &&
        maskFBO.framebuffer &&
        maskFBO.texture &&
        blurHFBO.framebuffer &&
        blurHFBO.texture &&
        blurVFBO.framebuffer &&
        blurVFBO.texture;

      if (useBloom) {
        drawMain(sceneFBO.framebuffer);
        drawMask(sceneFBO.texture, maskFBO.framebuffer);
        drawBlur(maskFBO.texture, blurHFBO.framebuffer, [1, 0]);
        drawBlur(blurHFBO.texture, blurVFBO.framebuffer, [0, 1]);
        drawComposite(sceneFBO.texture, blurVFBO.texture);
      } else {
        drawMain(null);
      }
    };

    const ro = new ResizeObserver(() => updateSize());
    ro.observe(container);
    updateSize();
    updateParallax();
    renderFrame();

    const tick = () => {
      if (parallaxEnabledRef.current) updateParallax();
      renderFrame();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => {
      const sy = window.scrollY || window.pageYOffset;
      const now = performance.now();
      if (lastScrollTsRef.current > 0) {
        const dy = sy - lastScrollYRef.current;
        scrollOffsetRef.current += dy * scrollSensitivityRef.current;
      }
      lastScrollYRef.current = sy;
      lastScrollTsRef.current = now;
      if (parallaxEnabledRef.current) updateParallax();
    };
    lastScrollYRef.current = window.scrollY || window.pageYOffset;
    lastScrollTsRef.current = performance.now();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(programMain);
      gl.deleteProgram(programMask);
      gl.deleteProgram(programBlur);
      gl.deleteProgram(programComposite);
      gl.deleteShader(vs);
      gl.deleteShader(fsMain);
      gl.deleteShader(fsMask);
      gl.deleteShader(fsBlur);
      gl.deleteShader(fsComposite);
      const releaseFbo = (fbo: FBO) => {
        if (fbo.framebuffer) gl.deleteFramebuffer(fbo.framebuffer);
        if (fbo.texture) gl.deleteTexture(fbo.texture);
      };
      releaseFbo(sceneFBO);
      releaseFbo(maskFBO);
      releaseFbo(blurHFBO);
      releaseFbo(blurVFBO);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style,
      }}
    >
      {supported ? (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
      ) : null}
    </div>
  );
}

export default BurnTransition;
