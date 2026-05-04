"use client";

import { useGSAP } from "@gsap/react";
import type { LucideIcon } from "lucide-react";
import { motion, type Transition } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { useLenis } from "lenis/react";

import { processSteps } from "@/assets/data/processSteps";
import { gsap, ScrollTrigger } from "@/lib/gsap-client";
import { cn } from "@/lib/utils";
import { dmSans, outfit } from "@/utils/fonts";

const cardLiftTransition: Transition = {
  type: "tween",
  duration: 0.72,
  ease: [0.16, 1, 0.32, 1],
};

/** Card compacto (`subtext`) ou expandido (`intro` + `topics`). */
export type ProcessStepInfoCard = {
  /** Ícone visual na caixa roxa (emoji ou Lucide SVG). */
  icon?: string | LucideIcon;
  title: string;
  subtext?: string;
  intro?: string;
  topics?: string[];
};

function resolveCardIconTitle(card: ProcessStepInfoCard): {
  icon: string | LucideIcon;
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

function renderCardIcon(icon: string | LucideIcon, className: string) {
  if (typeof icon === "string") {
    return <span className={className}>{icon}</span>;
  }
  const Icon = icon;
  return <Icon className={className} strokeWidth={1.9} aria-hidden />;
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
        scaleX: 0,
        transformOrigin: "left center",
        force3D: true,
      });
      gsap.set(texts, { opacity: 0, force3D: true });
      gsap.set(texts[0], { opacity: 1 });

      const stepCount = texts.length;
      /**
       * Distância total do pin:
       * - baseada na quantidade de transições (n-1), não na quantidade de passos.
       * - evita "travar" tempo demais e mantém a saída da seção no timing certo.
       */
      const scrollDistance = (): number => {
        const transitions = Math.max(stepCount - 1, 1);
        const perTransition = window.innerHeight * 0.78;
        const initialHold = window.innerHeight * 0.42;
        return initialHold + transitions * perTransition;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: window,
          trigger: pin,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: true,
          scrub: 0.68,
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
        { scaleX: 0 },
        { scaleX: 1, ease: "none", duration: 1 },
        0,
      );

      const n = stepCount;
      const seg = 1 / n;
      /** Fração do segmento usada para o crossfade — menor = troca mais seca. */
      const crossfade = seg * 0.35;

      for (let i = 0; i < n; i += 1) {
        const t = i * seg;
        if (i === 0) {
          tl.set(texts[0], { opacity: 1 }, 0);
          continue;
        }
        tl.to(
          texts[i - 1],
          { opacity: 0, duration: crossfade, ease: "power2.out" },
          t,
        );
        tl.fromTo(
          texts[i],
          { opacity: 0 },
          { opacity: 1, duration: crossfade, ease: "power2.in" },
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
      className="relative mt-8 scroll-mt-6 bg-white text-black"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:hidden">
        {/* <p
          className={`mb-4 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
        >
          Processos
        </p> */}
        <div className="space-y-8">
          {processSteps.map((step) => {
            const infoCards = stepInfoCards?.[step.id];
            const showInfoCards =
              Array.isArray(infoCards) && infoCards.length > 0;
            return (
              <div key={`mobile-${step.id}`}>
                <div
                  className={`mb-4 flex items-center gap-2 bg-white text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
                >
                  <span>Processos</span>
                  <span>&bull;</span>
                  <span className="text-black">{step.phase}</span>
                </div>
                <article className="rounded-2xl border border-black/12 bg-[#f7f7f7] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <h3
                    className={`text-xl font-semibold tracking-tight text-black ${outfit.className}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-medium text-black/55 ${dmSans.className}`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed text-black/75 ${dmSans.className}`}
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
                            className="relative overflow-hidden rounded-2xl border border-black/20 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.2)_2px,transparent_2px),#f6f6f6] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_24px_rgba(0,0,0,0.08),0_6px_24px_rgba(0,0,0,0.06)]"
                          >
                            <div className="flex items-start gap-3 pt-1">
                              <div
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-black/25 bg-black/90 text-base leading-none shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_14px_rgba(0,0,0,0.25)]"
                                aria-hidden
                              >
                                {renderCardIcon(icon, "size-[68%] text-white")}
                              </div>
                              <div className="min-w-0">
                                <p
                                  className={`text-sm font-semibold text-black ${dmSans.className}`}
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
                                                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-black/45"
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
        className="relative hidden min-h-screen w-full flex-col px-4 py-12 sm:px-8 md:flex md:h-[100svh] md:max-h-[100svh] md:min-h-0 md:overflow-hidden md:px-12 md:py-8 lg:py-14 lg:pt-10"
      >
        {/* Conteúdo rolável: fases 2–4 têm mais cards — sem isso a timeline horizontal some abaixo da dobra */}
        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col">
          <div className="relative isolate grid min-h-0 w-full flex-1">
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
                  className="pointer-events-none col-start-1 row-start-1 flex min-w-0 flex-col justify-start justify-self-stretch"
                >
                  <div
                    className={`mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
                  >
                    <span>Processos</span>
                    <span aria-hidden>&bull;</span>
                    <span className="text-black">{step.phase}</span>
                  </div>
                  <h3
                    className={`text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl ${outfit.className}`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 text-base font-medium text-black/55 sm:text-lg ${dmSans.className}`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`mt-4 max-w-3xl text-base leading-relaxed text-black/75 sm:text-lg ${dmSans.className}`}
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

                        if (isRich) {
                          return (
                            <motion.div
                              key={`${step.id}-info-${cardIndex}`}
                              initial={false}
                              whileHover={{ y: -4 }}
                              transition={cardLiftTransition}
                              className={cn(
                                "group relative flex flex-col overflow-hidden rounded-2xl border border-black/20 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.2)_2px,transparent_2px),#f6f6f6] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_0_24px_rgba(0,0,0,0.08),0_6px_24px_rgba(0,0,0,0.06)] transition-[box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:p-5 lg:p-6",
                                "hover:border-black/35 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_0_30px_rgba(0,0,0,0.12),0_14px_44px_rgba(0,0,0,0.14)]",
                                "max-w-sm min-w-[min(100%,240px)] flex-[1_1_240px] gap-3 sm:min-w-[min(100%,260px)] sm:flex-[1_1_260px] lg:gap-4",
                              )}
                            >
                              <span className="absolute top-4 right-4 font-mono text-[11px] tracking-[0.15em] text-black/35">
                                Nº {(cardIndex + 1).toString().padStart(2, "0")}
                              </span>
                              <div
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/25 bg-black/90 text-base leading-none shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_18px_rgba(0,0,0,0.25)] sm:h-10 sm:w-10 sm:text-lg"
                                aria-hidden
                              >
                                {renderCardIcon(icon, "size-[68%] text-white")}
                              </div>
                              <div className="flex min-w-0 flex-col gap-1.5 sm:gap-2">
                                <p
                                  className={`text-base font-semibold tracking-tight text-black sm:text-lg ${dmSans.className}`}
                                >
                                  {heading}
                                </p>
                                {card.intro ? (
                                  <p
                                    className={`text-xs leading-relaxed text-gray-400 sm:text-sm ${dmSans.className}`}
                                  >
                                    {card.intro}
                                  </p>
                                ) : null}
                                {card.topics && card.topics.length > 0 ? (
                                  <ul
                                    className={`mt-1 space-y-1.5 border-t border-black/10 pt-2.5 sm:space-y-2 sm:pt-3 ${dmSans.className}`}
                                  >
                                    {card.topics.map((topic, topicIndex) => (
                                      <li
                                        key={topicIndex}
                                        className="flex gap-2.5 text-xs leading-snug text-gray-400 sm:text-sm"
                                      >
                                        <span
                                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-black/45 sm:mt-2"
                                          aria-hidden
                                        />
                                        <span>{topic}</span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : null}
                              </div>
                            </motion.div>
                          );
                        }

                        return (
                          <motion.div
                            key={`${step.id}-info-${cardIndex}`}
                            initial={false}
                            whileHover={{ y: -2 }}
                            transition={cardLiftTransition}
                            className="group flex min-w-[140px] flex-col gap-1 rounded-xl border border-black/15 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_2px,transparent_2px),rgba(0,0,0,0.02)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-[box-shadow,border-color,background] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:border-black/25 hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.2)_2px,transparent_2px),rgba(0,0,0,0.05)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_36px_rgba(0,0,0,0.12)]"
                          >
                            <p
                              className={`text-sm font-medium text-black/75 ${dmSans.className}`}
                            >
                              <span className="inline-flex items-center gap-1.5">
                                {renderCardIcon(icon, "size-3.5 text-black/75")}
                                <span>{heading}</span>
                              </span>
                            </p>
                            {card.subtext ? (
                              <p
                                className={`text-xs text-gray-500 ${dmSans.className}`}
                              >
                                {card.subtext}
                              </p>
                            ) : null}
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        {/* Timeline horizontal: shrink-0 para ficar sempre visível; grid evita bolinhas cortadas nas pontas */}
        <div className="relative top-12 mx-auto w-full max-w-6xl shrink-0 pt-4 md:pt-6">
          <div
            ref={trackRef}
            className="relative w-full pb-1 md:min-h-[6rem] md:pb-2"
          >
            {/* Linha ao centro da fileira de ícones (não do bloco inteiro + rótulos) */}
            <div
              className="absolute top-[1.375rem] right-3 left-3 z-1 h-px -translate-y-1/2 rounded-full bg-linear-to-r from-white/18 via-white/12 to-white/8 sm:right-5 sm:left-5 md:top-6 md:right-6 md:left-6 md:h-0.5"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute top-[1.375rem] right-3 left-3 z-2 h-px -translate-y-1/2 sm:right-5 sm:left-5 md:top-6 md:right-6 md:left-6 md:h-0.5"
              aria-hidden
            >
              <div
                ref={fillRef}
                className="h-full w-full origin-left rounded-full bg-linear-to-r from-black/35 via-black/55 to-black/75"
              />
            </div>
            <div
              className="relative z-20 grid w-full"
              style={{
                gridTemplateColumns: `repeat(${Math.max(processSteps.length, 1)}, minmax(0, 1fr))`,
              }}
            >
              {processSteps.map((step, index) => {
                const n = processSteps.length;
                /** Passo atual ou já “visitado” no progresso. */
                const isReached = n <= 1 ? true : index <= activeStepIndex;
                const isCurrent = n <= 1 ? true : index === activeStepIndex;
                const StepIcon = stepIcons?.[step.id];
                const withIcons = Boolean(StepIcon);
                return (
                  <div
                    key={`checkpoint-wrap-${step.id}`}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-11 items-center justify-center md:h-12">
                      <button
                        type="button"
                        onClick={() => goToStep(index)}
                        className={cn(
                          "flex items-center justify-center rounded-full border-0 bg-transparent p-2 transition-[transform] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-black/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                          withIcons
                            ? "min-h-11 min-w-11 md:min-h-12 md:min-w-12"
                            : "min-h-10 min-w-10",
                        )}
                        aria-label={`Ir para o passo: ${step.title}`}
                        aria-current={isCurrent ? "step" : undefined}
                      >
                        <span
                          className={cn(
                            "flex shrink-0 scale-100 items-center justify-center rounded-full border-2 border-black/35 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18),0_4px_14px_rgba(0,0,0,0.15),0_0_0_0_rgba(0,0,0,0)] will-change-[transform,box-shadow] [transition:border-color_520ms_cubic-bezier(0.22,1,0.36,1),background-color_520ms_cubic-bezier(0.22,1,0.36,1),box-shadow_520ms_cubic-bezier(0.22,1,0.36,1),transform_700ms_cubic-bezier(0.33,1,0.68,1)]",
                            withIcons
                              ? "size-9 md:size-10"
                              : "size-4 md:size-4.5",
                            isReached &&
                              "border-black/55 bg-linear-to-br from-black/70 to-black/45 shadow-[0_0_0_2px_rgba(0,0,0,0.16),0_4px_14px_rgba(0,0,0,0.28),0_0_18px_rgba(0,0,0,0.2)]",
                            isCurrent && "scale-110",
                          )}
                          aria-hidden
                        >
                          {StepIcon ? (
                            <div className="flex size-full items-center justify-center">
                              <StepIcon
                                className={cn(
                                  "size-[42%]",
                                  isReached
                                    ? "text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.35)]"
                                    : "text-black/85 drop-shadow-[0_0_10px_rgba(0,0,0,0.18)]",
                                  isReached ? "opacity-100" : "opacity-35",
                                )}
                                strokeWidth={1.85}
                                aria-hidden
                              />
                            </div>
                          ) : null}
                        </span>
                      </button>
                    </div>
                    <span
                      className={cn(
                        outfit.className,
                        "max-w-[min(100%,6.5rem)] text-center text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 sm:max-w-none sm:whitespace-nowrap",
                        isCurrent
                          ? "text-black/85"
                          : isReached
                            ? "text-black/65"
                            : "text-black/40",
                      )}
                    >
                      {step.phase}
                    </span>
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
