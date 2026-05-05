"use client";

import { create } from "zustand";

interface HeaderTransparencyState {
  isTransparent: boolean;
  setIsTransparent: (value: boolean) => void;
}

export const useHeaderTransparency = create<HeaderTransparencyState>((set) => ({
  isTransparent: false,
  setIsTransparent: (value) => set({ isTransparent: value }),
}));

