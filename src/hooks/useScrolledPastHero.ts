"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` quando o scroll vertical ultrapassou um percentual da altura
 * da viewport — usado para orquestrar o morph entre `HeroHeader` e
 * `SectionsHeader` conforme o usuário sai da Hero e entra nas seções.
 */
export function useScrolledPastHero(threshold = 0.55) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY >= window.innerHeight * threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [threshold]);

  return scrolled;
}
