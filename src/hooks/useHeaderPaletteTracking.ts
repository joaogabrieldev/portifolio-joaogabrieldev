"use client";

import { useEffect } from "react";

import { useHeaderPalette } from "@/stores/useHeaderPalette";

const LIGHT_PALETTE_VH_THRESHOLD = 1.35;

/**
 * Atualiza a paleta do header com base em scroll absoluto relativo ao topo da
 * seção `#processos-transition`, usando threshold em viewport height.
 */
export function useHeaderPaletteTracking() {
  const setIsLightPaletteZone = useHeaderPalette(
    (s) => s.setIsLightPaletteZone,
  );

  useEffect(() => {
    const updatePaletteByVh = (): void => {
      const transitionEl = document.getElementById("processos-transition");
      if (!transitionEl) {
        setIsLightPaletteZone(false);
        return;
      }

      const triggerY =
        transitionEl.offsetTop +
        window.innerHeight * LIGHT_PALETTE_VH_THRESHOLD;
      setIsLightPaletteZone(window.scrollY >= triggerY);
    };

    updatePaletteByVh();
    window.addEventListener("scroll", updatePaletteByVh, { passive: true });
    window.addEventListener("resize", updatePaletteByVh, { passive: true });

    return () => {
      window.removeEventListener("scroll", updatePaletteByVh);
      window.removeEventListener("resize", updatePaletteByVh);
    };
  }, [setIsLightPaletteZone]);
}

