"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { processSteps } from "@/assets/data/processSteps";
import { gsap } from "@/lib/gsap-client";
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
          trigger: pin,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
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
              className="relative h-[min(28rem,55vh)] w-1 overflow-hidden rounded-full bg-white/10 md:h-[min(32rem,60vh)]"
            >
              <div
                ref={fillRef}
                className="absolute inset-0 rounded-full bg-gradient-to-b from-violet-400/90 to-[#413b72]"
                aria-hidden
              />
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
