"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { dmSans, fraunces, geistMono, syne } from "@/utils/fonts";

/* ────────────────────────────────────────────────────────────
   Glass primitives — Camadas 1+2+3 do protocolo `glassmorphism`
   ──────────────────────────────────────────────────────────── */

type GlassVariant = "subtle" | "medium" | "strong";

const glassVariants = {
  subtle:
    "backdrop-blur-md backdrop-saturate-150 [-webkit-backdrop-filter:blur(12px)_saturate(150%)]",
  medium:
    "backdrop-blur-xl backdrop-saturate-150 [-webkit-backdrop-filter:blur(20px)_saturate(150%)]",
  strong:
    "backdrop-blur-2xl backdrop-saturate-180 [-webkit-backdrop-filter:blur(28px)_saturate(180%)]",
} satisfies Record<GlassVariant, string>;

interface GlassPanelProps extends ComponentPropsWithoutRef<"div"> {
  variant?: GlassVariant;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ variant = "strong", className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn(
        glassVariants[variant],
        // Camada 1: gradiente translúcido (dark mode) + borda iluminada + drop shadow
        "relative rounded-[16px] border border-white/18",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.035)_100%)]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_4px_30px_rgba(0,0,0,0.35),0_1px_3px_rgba(0,0,0,0.18)]",
        "[transition:background_0.35s_ease,box-shadow_0.35s_ease,transform_0.35s_cubic-bezier(0.4,0,0.2,1),border-color_0.35s_ease]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  ),
);
GlassPanel.displayName = "GlassPanel";

/* ────────────────────────────────────────────────────────────
   Neumorphic CTA — Regra do Camaleão (botão = cor do tray)
   Tray e botão ambos em Warm Cream #e9e5dd; sombras opostas
   (luz top-left clara, ausência de luz bottom-right escura).
   Hover inverte para inset (efeito pressionado).
   ──────────────────────────────────────────────────────────── */

interface CreamCTAProps {
  to: string;
  children: React.ReactNode;
}

function CreamCTA({ to, children }: CreamCTAProps) {
  return (
    <ScrollLink
      to={to}
      smooth
      duration={800}
      offset={-80}
      className={cn(
        "group/btn inline-flex cursor-pointer items-center justify-between gap-6",
        "rounded-[8px] bg-[#e9e5dd] px-6 py-4 text-[#292827]",
        "[box-shadow:7px_7px_18px_rgba(101,87,55,0.28),-6px_-6px_16px_rgba(255,255,255,0.78)]",
        "[transition:box-shadow_350ms_cubic-bezier(0.22,1,0.36,1),transform_500ms_cubic-bezier(0.33,1,0.68,1)]",
        "hover:[box-shadow:inset_4px_4px_10px_rgba(101,87,55,0.22),inset_-3px_-3px_9px_rgba(255,255,255,0.7)]",
        "active:[box-shadow:inset_6px_6px_14px_rgba(101,87,55,0.28),inset_-4px_-4px_10px_rgba(255,255,255,0.65)]",
        "outline-none focus-visible:ring-2 focus-visible:ring-[#cbb7fb]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1938]",
      )}
    >
      <span
        className={cn(
          "text-[15px] tracking-[-0.01em] uppercase",
          syne.className,
        )}
        style={{ fontWeight: 600 }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className={cn(
          "flex size-9 items-center justify-center rounded-full bg-[#1b1938] text-[#cbb7fb]",
          "[transition:transform_500ms_cubic-bezier(0.33,1,0.68,1)] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1",
        )}
      >
        <ArrowUpRight className="size-4" strokeWidth={2.2} />
      </span>
    </ScrollLink>
  );
}

/* ────────────────────────────────────────────────────────────
   Conteúdo
   ──────────────────────────────────────────────────────────── */

const PROCESS_STEPS: ReadonlyArray<{
  index: string;
  label: string;
  caption: string;
}> = [
  {
    index: "01",
    label: "Briefing & escopo em 48h",
    caption: "Diagnóstico curto, sem fluff — entendo o que precisa entregar.",
  },
  {
    index: "02",
    label: "Protótipo de alta fidelidade",
    caption: "Em 14 dias úteis você navega seu produto antes de codar.",
  },
  {
    index: "03",
    label: "Frontend em produção",
    caption: "Deploy contínuo, code review e handoff documentado.",
  },
];

/* ────────────────────────────────────────────────────────────
   Section
   ──────────────────────────────────────────────────────────── */

export default function HireSection() {
  return (
    <section
      id="contratar"
      aria-labelledby="contratar-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-black px-4 py-28 text-white sm:px-8 md:px-12 md:py-36"
    >
      {/* Atmosfera Mysteria — gradientes radiais que dissolvem em preto puro nas bordas
          (preserva o contexto bg-black do parent para a BurnTransition logo abaixo). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: [
            "radial-gradient(ellipse 70% 55% at 22% 28%, rgba(27,25,56,0.95) 0%, rgba(27,25,56,0.6) 35%, transparent 70%)",
            "radial-gradient(ellipse 55% 45% at 82% 78%, rgba(203,183,251,0.18) 0%, rgba(113,76,182,0.14) 35%, transparent 70%)",
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(27,25,56,0.55) 0%, transparent 65%)",
          ].join(","),
        }}
      />
      {/* Grão sutil (data-uri SVG) — atmosfera sem inflar bundle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-24">
        {/* COLUNA EDITORIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col"
        >
          {/* Eyebrow — micro label monoespaçado + dot pulsante lavender */}
          <div className="mb-10 flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cbb7fb] opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-[#cbb7fb]" />
            </span>
            <span
              className={cn(
                "text-[11px] tracking-[0.32em] text-white/70 uppercase",
                geistMono.className,
              )}
              style={{ fontWeight: 500 }}
            >
              Disponível · Q3 — Q4 / 2026
            </span>
          </div>

          {/* Display gigante — Superhuman: line-height 0.96, peso 600, tracking negativo */}
          <h2
            id="contratar-heading"
            className={cn(
              "relative text-[clamp(3.25rem,8.4vw,7rem)] text-white",
              syne.className,
            )}
            style={{
              fontWeight: 600,
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
            }}
          >
            <span className="block">Quer me</span>
            <span className="block">
              <span className="text-white/95">contratar</span>
              <span className="text-[#cbb7fb]">?</span>
            </span>
          </h2>

          {/* Subtítulo serif itálico — toque editorial Superhuman */}
          <p
            className={cn(
              "mt-8 max-w-[44ch] text-[1.25rem] text-white/82 italic sm:text-[1.4rem]",
              fraunces.className,
            )}
            style={{ fontWeight: 300, lineHeight: 1.35 }}
          >
            Trabalho com{" "}
            <span className="not-italic text-white/95">
              um cliente por vez
            </span>{" "}
            — para que sua interface não acabe parecendo as outras 9.000.
          </p>

          {/* Linha decorativa lavender */}
          <div
            aria-hidden
            className="my-12 h-px w-24 bg-linear-to-r from-[#cbb7fb] via-[#cbb7fb]/40 to-transparent"
          />

          {/* Lista de processo — labels mono, descrições body */}
          <ol className="flex flex-col gap-7">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-[auto_1fr] items-baseline gap-x-6"
              >
                <span
                  className={cn(
                    "text-[12px] tracking-[0.2em] text-[#cbb7fb] tabular-nums",
                    geistMono.className,
                  )}
                  style={{ fontWeight: 600 }}
                >
                  {step.index}
                </span>
                <div>
                  <p
                    className={cn(
                      "text-[1.05rem] text-white sm:text-[1.15rem]",
                      syne.className,
                    )}
                    style={{
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-[0.95rem] text-white/65",
                      dmSans.className,
                    )}
                    style={{ lineHeight: 1.55 }}
                  >
                    {step.caption}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* COLUNA DE AÇÃO — card glass com tray neumórfico cream */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative self-start lg:sticky lg:top-28"
        >
          {/* Decoração: numeral outline gigante atrás do card */}
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute -top-12 -right-4 -z-10 select-none text-[12rem] leading-none",
              syne.className,
            )}
            style={{
              fontWeight: 800,
              WebkitTextStroke: "1px rgba(203,183,251,0.18)",
              color: "transparent",
            }}
          >
            04
          </span>

          <GlassPanel
            variant="strong"
            className="flex flex-col gap-7 p-8 sm:p-10"
          >
            {/* Badge superior */}
            <div className="flex items-center justify-between gap-4">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-[8px] border border-white/15 bg-white/6 px-3 py-1.5 text-[11px] tracking-[0.22em] text-white/85 uppercase",
                  geistMono.className,
                )}
                style={{ fontWeight: 500 }}
              >
                Slot · 02 / 03
              </span>
              <span
                className={cn(
                  "text-[11px] tracking-[0.22em] text-white/55 uppercase",
                  geistMono.className,
                )}
                style={{ fontWeight: 500 }}
              >
                R$ · USD
              </span>
            </div>

            {/* Headline interno do card */}
            <div>
              <p
                className={cn(
                  "text-[1.7rem] text-white sm:text-[1.9rem]",
                  syne.className,
                )}
                style={{
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                }}
              >
                Reserve uma conversa de 30 min.
              </p>
              <p
                className={cn(
                  "mt-3 text-[0.95rem] text-white/70",
                  dmSans.className,
                )}
                style={{ lineHeight: 1.55 }}
              >
                Sem proposta genérica. Você sai da call com um diagnóstico
                rápido, escopo possível e um número honesto.
              </p>
            </div>

            {/* Lista de inclusos — mono captions */}
            <ul className="flex flex-col gap-2 border-t border-white/10 pt-6">
              {[
                "Diagnóstico do projeto",
                "Sugestão de escopo & cronograma",
                "Faixa de investimento",
              ].map((item) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-center gap-3 text-[0.92rem] text-white/82",
                    dmSans.className,
                  )}
                >
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-full bg-[#cbb7fb]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* TRAY NEUMÓRFICO em Warm Cream — cor idêntica ao botão (Regra do Camaleão) */}
            <div
              className={cn(
                "rounded-[16px] bg-[#e9e5dd] p-5",
                "[box-shadow:inset_2px_2px_6px_rgba(101,87,55,0.10),inset_-2px_-2px_6px_rgba(255,255,255,0.6)]",
              )}
            >
              <p
                className={cn(
                  "mb-4 text-[11px] tracking-[0.28em] text-[#5a4a2c] uppercase",
                  geistMono.className,
                )}
                style={{ fontWeight: 600 }}
              >
                Próximo passo
              </p>
              <CreamCTA to="contato">Reservar conversa</CreamCTA>
              <a
                href="mailto:contato@joaogabrieldev.com"
                className={cn(
                  "mt-5 inline-flex items-center gap-2 text-[0.85rem] text-[#292827] underline decoration-[#714cb6]/60 decoration-from-font underline-offset-[5px]",
                  "transition-colors duration-200 hover:decoration-[#714cb6]",
                  dmSans.className,
                )}
                style={{ fontWeight: 500 }}
              >
                <Mail className="size-3.5" strokeWidth={2.2} />
                ou contato@joaogabrieldev.com
              </a>
            </div>

            {/* Rodapé do card */}
            <p
              className={cn(
                "text-[11px] tracking-[0.18em] text-white/45 uppercase",
                geistMono.className,
              )}
              style={{ fontWeight: 500 }}
            >
              Resposta em até 24h · São Paulo / GMT-3
            </p>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
