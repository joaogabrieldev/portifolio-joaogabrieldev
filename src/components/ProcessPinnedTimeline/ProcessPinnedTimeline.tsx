"use client";

import { useGSAP } from "@gsap/react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import { processSteps } from "@/assets/data/processSteps";
import { gsap, ScrollTrigger } from "@/lib/gsap-client";
import { cn } from "@/lib/utils";
import { dmSans, outfit } from "@/utils/fonts";

/** Card compacto (`subtext`) ou expandido (`intro` + `topics`). */
export type ProcessStepInfoCard = {
  /** Emoji/ícone na caixa roxa; se omitido, tenta-se extrair do início do `title`. */
  icon?: string;
  title: string;
  subtext?: string;
  intro?: string;
  topics?: string[];
};

function resolveCardIconTitle(card: ProcessStepInfoCard): {
  icon: string;
  heading: string;
} {
  if (card.icon) {
    return { icon: card.icon, heading: card.title };
  }
  const m = card.title.match(
    /^(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)\s+/u,
  );
  if (m) {
    return { icon: m[1], heading: card.title.slice(m[0].length).trim() };
  }
  return { icon: "◆", heading: card.title };
}

export interface ProcessPinnedTimelineProps {
  /** Ícone Lucide por `step.id` — exibido nos nós da timeline à esquerda. */
  stepIcons?: Partial<Record<string, LucideIcon>>;
  /** Mini cards por `step.id`; só o painel do step ativo renderiza o seu conjunto. */
  stepInfoCards?: Partial<Record<string, ProcessStepInfoCard[]>>;
}

/**
 * Timeline vertical fixada: pin + linha de progresso + troca de texto in-place (fade).
 * Integração Lenis ↔ ScrollTrigger via ticker global no SmoothScrollProvider.
 */
export default function ProcessPinnedTimeline({
  stepIcons,
  stepInfoCards,
}: ProcessPinnedTimelineProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  /** Instância do ScrollTrigger do pin (para scroll programático ao clicar nos nós). */
  const pinScrollTriggerRef = useRef<ScrollTrigger | null>(null);
  /** 0–1: progresso do ScrollTrigger na zona pinada (alinha ao preenchimento da linha). */
  const [pinnedProgress, setPinnedProgress] = useState(0);

  const lenis = useLenis();

  const setTextRef = (index: number) => (el: HTMLDivElement | null) => {
    textRefs.current[index] = el;
  };

  const nSteps = processSteps.length;
  const activeStepIndex = Math.min(
    nSteps - 1,
    Math.max(0, Math.floor((pinnedProgress + 1e-6) * nSteps)),
  );

  const goToStep = useCallback(
    (index: number) => {
      const st = pinScrollTriggerRef.current;
      if (!st || nSteps < 1) {
        return;
      }

      const progress = nSteps <= 1 ? 0 : (index + 0.5) / nSteps;
      const start = st.start;
      const end = st.end;
      const targetScroll = start + (end - start) * progress;

      if (lenis) {
        lenis.scrollTo(targetScroll, {
          duration: 0.85,
          easing: (t) => 1 - Math.pow(2, -10 * t),
        });
      } else {
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    },
    [lenis, nSteps],
  );

  useGSAP(
    () => {
      if (window.innerWidth < 768) {
        setPinnedProgress(0);
        return;
      }

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
          { opacity: 0, duration: 0.32, ease: "power2.out" },
          t,
        );
        tl.fromTo(
          texts[i],
          { opacity: 0 },
          { opacity: 1, duration: 0.28, ease: "power2.in" },
          t,
        );
      }

      pinScrollTriggerRef.current = tl.scrollTrigger ?? null;

      requestAnimationFrame(() => setPinnedProgress(0));
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        pinScrollTriggerRef.current = null;
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [] },
  );

  return (
    <section
      ref={sectionRef}
      id="processos"
      className="relative scroll-mt-6 bg-black text-white"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:hidden">
        <p
          className={`mb-4 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
        >
          Processos
        </p>
        <div className="space-y-8">
          {processSteps.map((step) => {
            const infoCards = stepInfoCards?.[step.id];
            const showInfoCards = Array.isArray(infoCards) && infoCards.length > 0;
            return (
              <div key={`mobile-${step.id}`}>
                <p
                  className={`mb-4 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
                >
                  Processos
                </p>
                <article className="rounded-2xl border border-white/8 bg-[#0f0f0f] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h3
                    className={`text-xl font-semibold tracking-tight text-white ${outfit.className}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-medium text-violet-200/85 ${dmSans.className}`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed text-white/78 ${dmSans.className}`}
                  >
                    {step.body}
                  </p>
                  {showInfoCards ? (
                    <div className="mt-4 space-y-3">
                      {infoCards.map((card, cardIndex) => {
                        const isRich = Boolean(
                          card.intro || card.topics?.length,
                        );
                        const { icon, heading } = resolveCardIconTitle(card);
                        return (
                          <div
                            key={`mobile-${step.id}-info-${cardIndex}`}
                            className="rounded-xl border border-white/8 bg-[#151515] p-4"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-violet-500/45 bg-violet-950/90 text-base leading-none"
                                aria-hidden
                              >
                                {icon}
                              </div>
                              <div className="min-w-0">
                                <p
                                  className={`text-sm font-semibold text-white ${dmSans.className}`}
                                >
                                  {heading}
                                </p>
                                {isRich ? (
                                  <>
                                    {card.intro ? (
                                      <p
                                        className={`mt-1 text-xs leading-relaxed text-gray-400 ${dmSans.className}`}
                                      >
                                        {card.intro}
                                      </p>
                                    ) : null}
                                    {card.topics && card.topics.length > 0 ? (
                                      <ul
                                        className={`mt-2 space-y-1.5 ${dmSans.className}`}
                                      >
                                        {card.topics.map(
                                          (topic, topicIndex) => (
                                            <li
                                              key={topicIndex}
                                              className="flex gap-2 text-xs leading-snug text-gray-400"
                                            >
                                              <span
                                                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500/75"
                                                aria-hidden
                                              />
                                              <span>{topic}</span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    ) : null}
                                  </>
                                ) : card.subtext ? (
                                  <p
                                    className={`mt-1 text-xs leading-relaxed text-gray-400 ${dmSans.className}`}
                                  >
                                    {card.subtext}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={pinRef}
        className="relative hidden min-h-screen w-full items-center px-4 py-20 sm:px-8 md:flex md:px-12"
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
                /** Passo atual ou já “visitado” no progresso: etapas anteriores ao foco também ficam no estilo ativo. */
                const isReached =
                  n <= 1 ? true : index <= activeStepIndex;
                const isCurrent =
                  n <= 1 ? true : index === activeStepIndex;
                const StepIcon = stepIcons?.[step.id];
                const withIcons = Boolean(StepIcon);
                return (
                  <button
                    key={`checkpoint-${step.id}`}
                    type="button"
                    onClick={() => goToStep(index)}
                    className={cn(
                      "absolute left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-2 transition-[transform] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                      withIcons ? "min-h-11 min-w-11 md:min-h-12 md:min-w-12" : "min-h-10 min-w-10",
                    )}
                    style={{ top: `${topPct}%` }}
                    aria-label={`Ir para o passo: ${step.title}`}
                    aria-current={isCurrent ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "flex shrink-0 items-center justify-center rounded-full border-2 border-violet-300/85 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.14),0_4px_14px_rgba(0,0,0,0.35)] transition-[border-color,background-color,box-shadow,transform] duration-300",
                        withIcons ? "size-9 md:size-10" : "size-4 md:size-4.5",
                        isReached &&
                          "border-violet-100 bg-linear-to-br from-violet-400 to-[#5b4ba3] shadow-[0_0_0_2px_rgba(167,139,250,0.4),0_0_22px_rgba(139,92,246,0.5)]",
                        isCurrent && "scale-110",
                      )}
                      aria-hidden
                    >
                      {StepIcon ? (
                        <div className="flex size-full items-center justify-center">
                          <StepIcon
                            className={cn(
                              "size-[42%] text-violet-50 drop-shadow-[0_0_10px_rgba(167,139,250,0.35)]",
                              isReached ? "opacity-100" : "opacity-35",
                            )}
                            strokeWidth={1.85}
                            aria-hidden
                          />
                        </div>
                      ) : null}
                    </span>
                  </button>
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
              {processSteps.map((step, index) => {
                const infoCards = stepInfoCards?.[step.id];
                const showInfoCards =
                  activeStepIndex === index &&
                  Array.isArray(infoCards) &&
                  infoCards.length > 0;

                return (
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
                    {showInfoCards && infoCards ? (
                      <div className="pointer-events-auto mt-6 flex flex-wrap gap-3">
                        {infoCards.map((card, cardIndex) => {
                          const isRich = Boolean(
                            card.intro || card.topics?.length,
                          );
                          const { icon, heading } = resolveCardIconTitle(card);
                          return (
                            <div
                              key={`${step.id}-info-${cardIndex}`}
                              className={cn(
                                "group flex flex-col rounded-2xl border border-white/8 bg-[#121212] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200",
                                "hover:-translate-y-0.5 hover:border-violet-500/35 hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)]",
                                isRich
                                  ? "min-w-[min(100%,280px)] max-w-sm flex-1 gap-4"
                                  : "min-w-[min(100%,200px)] max-w-xs flex-1 gap-4",
                              )}
                            >
                              <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-500/45 bg-violet-950/90 text-lg leading-none shadow-[0_0_0_1px_rgba(139,92,246,0.22),0_0_22px_rgba(124,58,237,0.38)]"
                                aria-hidden
                              >
                                {icon}
                              </div>
                              <div className="flex min-w-0 flex-col gap-2">
                                <p
                                  className={`text-lg font-semibold tracking-tight text-white ${dmSans.className}`}
                                >
                                  {heading}
                                </p>
                                {isRich ? (
                                  <>
                                    {card.intro ? (
                                      <p
                                        className={`text-sm leading-relaxed text-gray-400 ${dmSans.className}`}
                                      >
                                        {card.intro}
                                      </p>
                                    ) : null}
                                    {card.topics && card.topics.length > 0 ? (
                                      <ul
                                        className={`mt-1 space-y-2 border-t border-white/6 pt-3 ${dmSans.className}`}
                                      >
                                        {card.topics.map((topic, topicIndex) => (
                                          <li
                                            key={topicIndex}
                                            className="flex gap-2.5 text-sm leading-snug text-gray-400"
                                          >
                                            <span
                                              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500/75"
                                              aria-hidden
                                            />
                                            <span>{topic}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    ) : null}
                                  </>
                                ) : card.subtext ? (
                                  <p
                                    className={`text-sm leading-relaxed text-gray-400 ${dmSans.className}`}
                                  >
                                    {card.subtext}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
