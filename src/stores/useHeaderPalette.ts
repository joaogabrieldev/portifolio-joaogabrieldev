"use client";

import { create } from "zustand";

interface HeaderPaletteState {
  isLightPaletteZone: boolean;
  setIsLightPaletteZone: (value: boolean) => void;
}

export const useHeaderPalette = create<HeaderPaletteState>((set) => ({
  isLightPaletteZone: false,
  setIsLightPaletteZone: (value) => set({ isLightPaletteZone: value }),
}));

