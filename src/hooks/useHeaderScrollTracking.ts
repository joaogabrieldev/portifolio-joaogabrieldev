"use client";

import { useEffect } from "react";

import { useHeaderScroll } from "@/stores/useHeaderScroll";

/**
 * Atualiza `useHeaderScroll` conforme o scroll: após ~75% da altura da viewport (menos 80px),
 * considera que o utilizador saiu da zona “hero” e as secções abaixo podem mostrar o header fixo.
 */
export function useHeaderScrollTracking() {
  const setIsScrolled = useHeaderScroll((s) => s.setIsScrolled);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const backdropBottomEdge = screenHeight * 0.75 - 80;
      setIsScrolled(window.scrollY > backdropBottomEdge);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [setIsScrolled]);
}
