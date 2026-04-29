"use client";

import { useLenis } from "lenis/react";
import { useCallback, useSyncExternalStore } from "react";

/** Ordem de leitura (fluxo no DOM): a última secção cujo topo já passou da linha do nav fica ativa. */
export const SECTION_SCROLL_SPY_ORDER = [
  "inicio",
  "sobre",
  "habilidades",
  "projetos",
  "processos-transition",
  "processos",
  "planos",
  "faq",
  "contato",
] as const;

export type SectionScrollSpyId = (typeof SECTION_SCROLL_SPY_ORDER)[number];

const HERO_NAV_ID = "site-hero-nav";
const PRIMARY_NAV_ID = "site-primary-nav";

function readAnchorPx(): number {
  let bottom = 0;
  for (const id of [HERO_NAV_ID, PRIMARY_NAV_ID]) {
    const el = document.getElementById(id);
    if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.height > 8 && r.bottom > bottom) {
      bottom = r.bottom;
    }
  }
  return Math.round((bottom || 96) + 8);
}

function computeActiveSectionId(): SectionScrollSpyId {
  const anchor = readAnchorPx();
  let active: SectionScrollSpyId = "inicio";
  for (const id of SECTION_SCROLL_SPY_ORDER) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= anchor) {
      active = id;
    }
  }
  return active;
}

/**
 * Scroll-spy alinhado ao que o utilizador vê: usa `getBoundingClientRect` e a base do header
 * fixo visível (hero ou header pós-hero), em vez do algoritmo interno do `react-scroll`
 * (que falha com Lenis + secções muito altas / pin GSAP).
 */
export function useSectionScrollSpy(): SectionScrollSpyId {
  const lenis = useLenis();

  const subscribe = useCallback(
    (onChange: () => void) => {
      const run = (): void => {
        onChange();
      };
      window.addEventListener("scroll", run, { passive: true });
      window.addEventListener("resize", run, { passive: true });
      const unsubLenis = lenis?.on("scroll", run);
      return () => {
        window.removeEventListener("scroll", run);
        window.removeEventListener("resize", run);
        unsubLenis?.();
      };
    },
    [lenis],
  );

  const getSnapshot = useCallback(() => computeActiveSectionId(), []);

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    (): SectionScrollSpyId => "inicio",
  );
}
