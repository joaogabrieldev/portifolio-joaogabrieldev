"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useId, useMemo, type ReactNode } from "react";

export interface BurnTransitionProps {
  scale: number;
  noise: number;
  baseSpeed: number;
  edge: number;
  bloom: number;
  bloomWidth: number;
  children: ReactNode;
  className?: string;
}

/**
 * Simula uma "queima" horizontal que revela o conteúdo.
 * - Máscara CSS define o avanço da revelação.
 * - feTurbulence + feDisplacementMap distorcem a borda de transição.
 * - Camada de bloom cria o brilho característico da queima.
 */
export function BurnTransition({
  scale,
  noise,
  baseSpeed,
  edge,
  bloom,
  bloomWidth,
  children,
  className,
}: BurnTransitionProps) {
  const filterId = useId().replace(/:/g, "");
  const progress = useMotionValue(0);

  const safeNoise = Math.max(0, noise);
  const safeScale = Math.max(0, scale);
  const safeSpeed = Math.max(0.01, baseSpeed);
  const safeEdge = Math.max(0, edge);
  const safeBloom = Math.max(0, bloom);
  const safeBloomWidth = Math.max(0, bloomWidth);

  const duration = useMemo(() => {
    // Maior baseSpeed => transição mais rápida.
    return 1.35 / safeSpeed;
  }, [safeSpeed]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration,
      ease: [0.2, 0.85, 0.25, 1],
    });
    return () => controls.stop();
  }, [duration, progress]);

  const burnLine = useTransform(progress, (p) => `${(p * 100).toFixed(3)}%`);
  const edgeWidthPct = `${(1.4 + safeEdge * 6.5).toFixed(3)}%`;
  const bloomWidthPct = `${(2.5 + safeBloomWidth * 16).toFixed(3)}%`;

  const maskImage = useMotionTemplate`linear-gradient(
      90deg,
      #000 0%,
      #000 calc(${burnLine} - ${edgeWidthPct}),
      rgba(0,0,0,.95) ${burnLine},
      transparent calc(${burnLine} + ${edgeWidthPct})
    )`;

  const bloomOpacity = Number((0.2 + safeBloom * 0.9).toFixed(3));
  const bloomBlur = `${6 + safeBloom * 32}px`;
  const displaceScale = Math.round(8 + safeNoise * 48 + safeScale * 14);
  const textureFrequency = useMemo(
    () => (0.004 + safeNoise * 0.03).toFixed(4),
    [safeNoise],
  );

  return (
    <div
      className={`relative isolate overflow-hidden rounded-2xl bg-zinc-950 ${className ?? ""}`}
    >
      <svg
        width="0"
        height="0"
        className="pointer-events-none absolute"
        aria-hidden
      >
        <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={textureFrequency}
            numOctaves={3}
            seed={11}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={displaceScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <motion.div
        className="relative z-10"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          transform: `scale(${1 + safeScale * 0.08})`,
          transformOrigin: "left center",
          willChange: "transform, mask-image",
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 z-20"
        style={{
          left: burnLine,
          width: bloomWidthPct,
          translateX: "-50%",
          filter: `url(#${filterId})`,
          opacity: bloomOpacity,
          willChange: "left, opacity, filter",
        }}
      >
        <motion.div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,232,180,0.35) 35%, rgba(255,168,92,0.8) 52%, rgba(255,120,44,0.95) 65%, rgba(255,255,255,0) 100%)",
            filter: `blur(${bloomBlur})`,
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-y-0 z-30 mix-blend-screen"
        style={{
          left: burnLine,
          width: edgeWidthPct,
          translateX: "-50%",
          filter: `url(#${filterId})`,
          opacity: 0.5 + safeEdge * 0.55,
        }}
      >
        <div className="h-full w-full bg-linear-to-b from-orange-200/20 via-orange-400/70 to-orange-500/30" />
      </motion.div>
    </div>
  );
}

export default BurnTransition;
