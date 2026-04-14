"use client";

import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

export const HeroScrollContext = createContext<MotionValue<number> | null>(null);

export function useHeroScrollProgress() {
  return useContext(HeroScrollContext);
}
