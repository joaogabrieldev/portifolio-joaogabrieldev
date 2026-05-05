"use client";
import { useHeroParallaxY } from "@/hooks/useHeroParallaxY";
import HeroButton from "@/pieces/HeroButton/HeroButton";
import { dmSans, epilogue } from "@/utils/fonts";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const easeOut = [0.33, 1, 0.68, 1] as const;

const HeroLeftText = () => {
  const reduced = useReducedMotion();
  const leftParallaxY = useHeroParallaxY(-10, 0);

  return (
    <motion.div
      className="relative z-30 w-full min-w-0"
      style={{ y: leftParallaxY }}
    >
      <motion.div
        initial={reduced ? false : { opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.33, ease: easeOut }}
        className="relative -top-10 left-0 flex w-full max-w-[420px] min-w-0 flex-col items-center px-1 select-none sm:-top-12 sm:px-2 md:-top-8 md:left-26 md:px-0 lg:top-0"
      >
        <div className="-mt-6 w-full max-w-full rounded-2xl border border-white/15 bg-white/6 p-3 text-left shadow-[0_10px_36px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:max-w-[min(100%,56rem)] sm:p-4 md:mt-0 md:px-6 md:py-8 lg:p-10">
          <h2
            className={`mb-4 w-full px-0.5 pt-2 text-center text-[1.5rem] leading-[1.08] font-extrabold tracking-[-0.02em] text-balance text-white sm:mb-5 sm:px-1 sm:text-4xl md:mt-0 md:mb-6 md:text-[2.2rem] lg:text-[2.65rem] ${epilogue.className} italic select-none`}
          >
            DESIGN QUE PENSA, <br />
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
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <HeroButton
              button_href="projetos"
              scrollToSection
              button_label="Ver Projetos"
              button_icon={<ArrowDown size={18} />}
              button_variant="primary"
            />{" "}
            <HeroButton
              button_href="/curriculo-joao-gabriel.pdf"
              openInNewTab
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
