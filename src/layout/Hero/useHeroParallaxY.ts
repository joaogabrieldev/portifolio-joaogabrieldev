"use client";

import { motionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useHeroScrollProgress } from "./HeroScrollContext";

const zeroProgress = motionValue(0);

export function useHeroParallaxY(desktopPct: number, mobilePct: number) {
  const progress = useHeroScrollProgress();
  const reduced = useReducedMotion();
  const [md, setMd] = useState(false);
  const stableZero = useRef(zeroProgress).current;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setMd(mq.matches);
    const onChange = () => setMd(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const source = progress ?? stableZero;
  const pct = reduced ? 0 : md ? desktopPct : mobilePct;

  return useTransform(source, (v: number) => `${v * pct}%`);
}
