"use client";

import { useEffect } from "react";

import { useHeaderTransparency } from "@/stores/useHeaderTransparency";

const DESKTOP_MIN_WIDTH = 768;
const PROCESSOS_SECTION_ID = "processos";
const PROCESSOS_TRIGGER_VH = 0.28;

/**
 * Atualiza a transparência do header via Zustand.
 * A regra usa linha de gatilho em viewport-height (vh): quando essa linha
 * entra na secção `#processos` no desktop, o header fica transparente.
 */
export function useHeaderTransparencyTracking(): boolean {
  const isTransparent = useHeaderTransparency((s) => s.isTransparent);
  const setIsTransparent = useHeaderTransparency((s) => s.setIsTransparent);

  useEffect(() => {
    const updateTransparency = (): void => {
      const isDesktop = window.innerWidth >= DESKTOP_MIN_WIDTH;
      if (!isDesktop) {
        setIsTransparent(false);
        return;
      }

      const processosEl = document.getElementById(PROCESSOS_SECTION_ID);
      if (!processosEl) {
        setIsTransparent(false);
        return;
      }

      const triggerLineY = window.innerHeight * PROCESSOS_TRIGGER_VH;
      const rect = processosEl.getBoundingClientRect();
      const isWithinProcessos =
        rect.top <= triggerLineY && rect.bottom >= triggerLineY;

      setIsTransparent(isWithinProcessos);
    };

    updateTransparency();
    window.addEventListener("scroll", updateTransparency, { passive: true });
    window.addEventListener("resize", updateTransparency, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateTransparency);
      window.removeEventListener("resize", updateTransparency);
    };
  }, [setIsTransparent]);

  return isTransparent;
}

