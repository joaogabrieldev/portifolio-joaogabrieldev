"use client";
import { HERO_CONTENT } from "@/layout/Hero";
import { useHeroParallaxY } from "@/layout/Hero/useHeroParallaxY";
import HeroButton from "@/pieces/HeroButton/HeroButton";
import { dmSans, syne } from "@/utils/fonts";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.33, 1, 0.68, 1] as const;

const HeroLeftText = () => {
  const reduced = useReducedMotion();
  const leftParallaxY = useHeroParallaxY(-10, 0);

  return (
    <motion.div className="min-w-0 w-full" style={{ y: leftParallaxY }}>
      <motion.div
        initial={reduced ? false : { opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.33, ease: easeOut }}
        className="relative -top-16 z-20 flex w-full max-w-[780px] min-w-0 flex-col items-center px-1 sm:px-2 md:px-0 lg:top-0"
      >
        <h2
          className={`mb-5 w-full max-w-full px-1 text-center text-4xl leading-[1.08] font-bold tracking-[-0.02em] text-balance text-white sm:mb-6 sm:px-2 sm:text-5xl md:hidden ${syne.className}`}
        >
          DESIGN QUE PENSAM. <br />
          INTERFACES QUE FUNCIONAM.
        </h2>
        <div className="w-full max-w-[440px] rounded-2xl border border-white/15 bg-white/6 p-3 text-left shadow-[0_10px_36px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:max-w-[860px] sm:p-4 md:p-10">
          <h2
            className={`mb-5 hidden w-full max-w-full border-2 border-red-500 px-1 text-center text-[32px] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance text-white sm:mb-6 sm:px-2 sm:text-5xl md:block md:text-6xl lg:text-[2.35rem] ${syne.className}`}
          >
            DESIGN QUE PENSAM. <br />
            INTERFACES QUE FUNCIONAM.
          </h2>
          <p
            className={`text-center text-[0.98rem] leading-[1.55] text-zinc-100/88 sm:text-lg ${dmSans.className}`}
          >
            A maioria dos sites parecem bonitos até alguém tentar usá-los.
          </p>
          <p
            className={`mt-4 text-center text-[0.98rem] leading-[1.55] text-zinc-100/88 sm:text-lg ${dmSans.className}`}
          >
            Aqui, estética e performance não competem — elas colaboram.
          </p>
          <div className="mt-4 h-px w-full bg-linear-to-r from-white/25 via-white/5 to-transparent" />
          <div className="flex justify-center gap-4">
            <HeroButton
              button_href={HERO_CONTENT.readMoreLink}
              button_label="Ver Projetos"
              button_icon={<ArrowUpRight size={18} />}
              button_variant="primary"
            />{" "}
            <HeroButton
              button_href={HERO_CONTENT.readMoreLink}
              button_label="Ver CV"
              button_variant="secondary"
              button_icon={<ArrowUpRight size={18} />}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroLeftText;
