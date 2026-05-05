"use client";

import { useEffect } from "react";

import { useHeaderPaletteTracking } from "@/hooks/useHeaderPaletteTracking";
import { useHeaderPalette } from "@/stores/useHeaderPalette";

const PALETTE_LIGHT_CLASS = "palette-light";

/**
 * Mesma lógica de altura do header (`useHeaderPaletteTracking`): espelha no
 * `documentElement` para estilizar scrollbar global em globals.css.
 */
export function PaletteRootSync() {
  useHeaderPaletteTracking();
  const isLightPaletteZone = useHeaderPalette((s) => s.isLightPaletteZone);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle(PALETTE_LIGHT_CLASS, isLightPaletteZone);
    return () => {
      root.classList.remove(PALETTE_LIGHT_CLASS);
    };
  }, [isLightPaletteZone]);

  return null;
}
