"use client";

import { HERO_CONTENT } from "@/layout/Hero";
import { useHeroParallaxY } from "@/hooks/useHeroParallaxY";
import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.33, 1, 0.68, 1] as const;

const HeroFooter = () => {
  const reduced = useReducedMotion();
  const footerParallaxY = useHeroParallaxY(-20, 0);

  return (
    <motion.div className="w-full" style={{ y: footerParallaxY }}>
      <motion.footer
        initial={reduced ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85, ease: easeOut }}
        className="z-30 flex w-full max-w-7xl min-w-0 flex-wrap items-center justify-center gap-2 px-0 sm:justify-between sm:px-0"
      >
        <div className="hidden items-center space-x-4 sm:flex" />
        <div className="text-foreground/80 text-xs font-medium sm:text-sm">
          {HERO_CONTENT.locationText}
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default HeroFooter;
