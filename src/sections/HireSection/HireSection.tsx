"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowRight, ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

import { dmSans, epilogue, geistMono, syne } from "@/utils/fonts";

import "./HireSection.css";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

const PROCESS_TRANSITION_ID = "processos-transition";

export default function HireSection() {
  return (
    <section
      id="contratar"
      aria-labelledby="contratar-heading"
      className={cn(
        "hire-section relative isolate mt-12 scroll-mt-6 overflow-hidden bg-black px-4 py-16 text-white sm:px-8 md:px-12 md:py-24 lg:py-28",
      )}
    >
      {/* Spline ORB — decorativo, pointer-events-none */}
      <div
        aria-hidden
        className="hire-spline-decor pointer-events-none absolute inset-0 z-0 select-none"
      >
        <Spline
          scene="https://prod.spline.design/jstsD2CjeIaYP55z/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            backgroundColor: "black",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="relative z-1 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          {/* Label secundário — não compete com o título (Refactoring UI) */}
          <p
            className={cn(
              "mb-8 flex items-center justify-center gap-2.5 text-[11px] tracking-[0.22em] text-white/45 uppercase",
              geistMono.className,
            )}
            style={{ fontWeight: 500 }}
          >
            <span
              aria-hidden
              className="hire-v6-dot size-1.5 shrink-0 rounded-full bg-[var(--hire-violet-mid)]"
            />
            Contratar
          </p>

          <h2
            id="contratar-heading"
            className={cn(
              "max-w-[min(100%,18ch)] text-[clamp(2.75rem,11vw,6.25rem)]",
              epilogue.className,
            )}
            style={{
              fontWeight: 600,
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
              color: "var(--hire-text)",
            }}
          >
            <span className="block">Deseja me</span>
            <span className="block flex flex-row gap-2 italic">
              <span className="text-white">contratar</span>
              <span className="text-white">?</span>
            </span>
          </h2>

          {/* Corpo: uma medida confortável, contraste ≥ leitura (WCAG em texto grande) */}
          <p
            className={cn(
              "mx-auto mt-8 max-w-120 text-base leading-relaxed text-white/65 md:mt-2 md:text-lg",
              dmSans.className,
            )}
            style={{ fontWeight: 400 }}
          >
            Aqui você conhece a{" "}
            <span className="font-medium text-white/85">
              metodologia completa
            </span>{" "}
            antes de qualquer conversa sobre valores.
          </p>

          {/* Ação principal única — alvo ≥ 44px (UI/UX Pro Max) */}
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:max-w-md sm:items-center">
            {/* <ScrollLink
              to={PROCESS_TRANSITION_ID}
              smooth
              duration={800}
              offset={-80}
              className={cn(
                "hire-cta-root group/cta relative inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 overflow-visible rounded-full px-8 py-4 text-base text-white no-underline sm:w-auto",
                "shadow-[rgba(167,139,250,0.22)_0_0_0_1px,rgba(255,255,255,0.12)_0_0.5px_0_0.5px_inset,rgba(124,58,237,0.30)_0_6px_22px]",
                "transition-[transform,box-shadow] duration-200 ease-out",
                "active:translate-y-px active:scale-[0.985]",
                "outline-none focus-visible:ring-2 focus-visible:ring-[var(--hire-lavender)]/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black",
                "hover:shadow-[rgba(167,139,250,0.55)_0_0_0_1px,rgba(255,255,255,0.18)_0_0.5px_0_0.5px_inset,rgba(124,58,237,0.55)_0_12px_40px,rgba(124,58,237,0.35)_0_0_72px]",
                epilogue.className,
              )}
              style={{
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                background:
                  "linear-gradient(180deg, #8b48f5 0%, #7c3aed 55%, #6d28d9 100%)",
              }}
            >
              <span
                aria-hidden
                className="hire-cta-halo pointer-events-none absolute -inset-1.5 rounded-full"
                style={{
                  zIndex: 0,
                  boxShadow:
                    "0 0 0 1px rgba(167,139,250,0.35), 0 0 40px 8px rgba(124,58,237,0.45), 0 0 88px 12px rgba(124,58,237,0.22)",
                }}
              />
              <span
                aria-hidden
                className="hire-cta-sheen pointer-events-none absolute inset-0 rounded-full"
                style={{
                  zIndex: 1,
                  background:
                    "radial-gradient(120% 140% at 50% -20%, rgba(255,255,255,0.28), rgba(255,255,255,0) 55%)",
                }}
              />
              <span className="relative z-2">Ver o processo</span>
              <ArrowRight
                className="relative z-2 size-[18px] shrink-0 transition-transform duration-300 ease-out group-hover/cta:translate-x-1"
                strokeWidth={2.2}
                aria-hidden
              />
            </ScrollLink> */}

            {/* Secundário: linguagem clara, não compete com o primário (Krug) */}
            <ScrollLink
              to="processos"
              smooth
              duration={2700}
              offset={0}
              spy={false}
              className={cn(
                "shiny-cta inline-flex min-h-11 w-full items-center justify-center gap-1.5 no-underline sm:w-auto",
                "focus-visible:ring-2 focus-visible:ring-[var(--hire-lavender)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none",
              )}
            >
              {/* <span>
                <ArrowDown />
              </span> */}
              <span>Conhecer a metodologia</span>
              <span>
                <ChevronDown />
              </span>
            </ScrollLink>
          </div>

          {/* <p
            className={cn(
              "mt-8 text-[11px] tracking-[0.16em] text-white/40 uppercase",
              geistMono.className,
            )}
            style={{ fontWeight: 500 }}
          >
            Disponível · Q3 — Q4 / 2026
          </p> */}

          {/* Ritmo visual de scroll — decorativo; ação explícita já está no botão (evita dois CTAs iguais) */}
          <div
            className="mt-10 flex flex-col items-center gap-4 md:mt-12"
            aria-hidden
          >
            <span
              className={cn(
                "text-[11px] tracking-widest text-white/35 uppercase",
                geistMono.className,
              )}
              style={{ fontWeight: 400 }}
            >
              Rolar continua a jornada
            </span>
            <div className="relative mx-auto h-[60px] w-px bg-[var(--hire-hairline)]">
              <span
                className="hire-v6-scroll-dot absolute top-0 left-1/2 size-1 rounded-full bg-[var(--hire-violet-mid)]"
                style={{
                  boxShadow:
                    "0 0 8px rgba(167,139,250,0.75), 0 0 16px rgba(124,58,237,0.5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
