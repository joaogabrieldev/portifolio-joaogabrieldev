"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

import { processSteps } from "@/assets/data/processSteps";
import { gsap, ScrollTrigger } from "@/lib/gsap-client";
import { cn } from "@/lib/utils";
import { dmSans, outfit } from "@/utils/fonts";

/**
 * Timeline vertical fixada: pin + linha de progresso + troca de texto in-place (fade).
 * Integração Lenis ↔ ScrollTrigger via ticker global no SmoothScrollProvider.
 */
export default function ProcessPinnedTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  /** 0–1: progresso do ScrollTrigger na zona pinada (alinha ao preenchimento da linha). */
  const [pinnedProgress, setPinnedProgress] = useState(0);

  const setTextRef = (index: number) => (el: HTMLDivElement | null) => {
    textRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const fill = fillRef.current;
      const texts = textRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );

      if (!section || !pin || !fill || texts.length === 0) {
        return;
      }

      gsap.set(fill, {
        scaleY: 0,
        transformOrigin: "top center",
        force3D: true,
      });
      gsap.set(texts, { opacity: 0, force3D: true });
      gsap.set(texts[0], { opacity: 1 });

      const stepCount = texts.length;
      const scrollDistance = (): number =>
        window.innerHeight * Math.max(stepCount, 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: window,
          trigger: pin,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            // Mesmo valor que move a timeline (barra); com scrub suavizado, bate com o fill.
            setPinnedProgress(self.progress);
          },
        },
      });

      tl.fromTo(
        fill,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", duration: 1 },
        0,
      );

      const n = stepCount;
      const seg = 1 / n;

      for (let i = 0; i < n; i += 1) {
        const t = i * seg;
        if (i === 0) {
          tl.set(texts[0], { opacity: 1 }, 0);
          continue;
        }
        tl.to(
          texts[i - 1],
          { opacity: 0, duration: 0.07, ease: "power1.out" },
          t,
        );
        tl.fromTo(
          texts[i],
          { opacity: 0 },
          { opacity: 1, duration: 0.07, ease: "power1.in" },
          t,
        );
      }

      requestAnimationFrame(() => setPinnedProgress(0));
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      id="processos"
      className="relative scroll-mt-6 bg-[#0a0a0a] text-white"
    >
      <div
        ref={pinRef}
        className="relative flex min-h-screen w-full items-center px-4 py-20 sm:px-8 md:px-12"
      >
        <div className="mx-auto flex w-full max-w-6xl gap-10 md:gap-16 lg:gap-24">
          <div className="flex shrink-0 flex-col items-center pt-2">
            <div
              ref={trackRef}
              className="relative h-[min(28rem,55vh)] w-7 shrink-0 md:h-[min(32rem,60vh)]"
            >
              {/* Trilho completo sempre visível (evita “linha quebrada”) */}
              <div
                className="absolute top-0 bottom-0 left-1/2 z-1 w-px -translate-x-1/2 rounded-full bg-linear-to-b from-white/18 via-white/12 to-white/8 md:w-0.5"
                aria-hidden
              />
              {/* Progresso animado — mesma altura, scaleY; trilho base fica sempre visível atrás */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-2 w-px -translate-x-1/2 md:w-0.5"
                aria-hidden
              >
                <div
                  ref={fillRef}
                  className="h-full w-full origin-top rounded-full bg-linear-to-b from-violet-300 via-violet-400/95 to-[#4c3d8a]"
                />
              </div>
              {processSteps.map((step, index) => {
                const n = processSteps.length;
                const topPct = n <= 1 ? 50 : (index / (n - 1)) * 100;
                const threshold = n <= 1 ? 0 : index / (n - 1);
                const isActive =
                  n <= 1 ? true : pinnedProgress + 1e-4 >= threshold;
                return (
                  <div
                    key={`checkpoint-${step.id}`}
                    className={cn(
                      "pointer-events-none absolute left-1/2 z-20 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-300/85 bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_4px_14px_rgba(0,0,0,0.35)] transition-[border-color,background-color,box-shadow,transform] duration-300 md:size-4.5",
                      isActive &&
                        "scale-110 border-violet-100 bg-linear-to-br from-violet-400 to-[#5b4ba3] shadow-[0_0_0_2px_rgba(167,139,250,0.4),0_0_22px_rgba(139,92,246,0.5)]",
                    )}
                    style={{ top: `${topPct}%` }}
                    aria-hidden
                  />
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[min(24rem,50vh)] min-w-0 flex-1">
            <p
              className={`mb-4 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
            >
              Processos
            </p>
            <div className="relative min-h-[12.5rem] sm:min-h-[11rem] md:min-h-[10rem]">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={setTextRef(index)}
                  className="pointer-events-none absolute inset-0 flex flex-col justify-start"
                >
                  <h3
                    className={`text-2xl font-semibold tracking-tight text-white sm:text-3xl ${outfit.className}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm font-medium text-violet-200/85 sm:text-base ${dmSans.className}`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`mt-4 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg ${dmSans.className}`}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
