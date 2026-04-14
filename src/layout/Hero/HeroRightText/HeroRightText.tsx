"use client";

import { motion } from "motion/react";
import { orderClass } from "..";
import { dmSans, epilogue } from "@/utils/fonts";

interface HeroRightTextProps {
  order: "right" | "center" | "left";
}

const HeroRightText = ({ order }: HeroRightTextProps) => {
  return (
    <motion.div
      initial={{ x: -580, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.5,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`z-20 flex w-full max-w-full min-w-0 items-center justify-center px-1 text-center sm:px-0 ${orderClass[order]} `}
    >
      <div
        data-hero="right"
        data-parallax="right"
        className="relative -top-2 flex w-full max-w-[250px] flex-col items-center sm:max-w-[440px] md:left-4 md:max-w-[640px] lg:-left-8 lg:mb-8 lg:max-w-[860px] xl:-left-10 xl:mb-12 xl:max-w-[1000px]"
      >
        <div
          className={` ${epilogue.className} text-[clamp(2rem,7vw,14.2rem)] leading-[0.82] font-extrabold tracking-[-0.05em] text-white uppercase md:text-[clamp(14.5rem,7vw,14.2rem)]`}
        >
          <span className="relative -left-46 block">PORTI</span>
          <span className="relative -left-42 block italic">FOLIO.</span>
        </div>
        <p
          className={`${dmSans.className} mt-1 text-[clamp(0.95rem,2.1vw,1.45rem)] leading-none font-medium tracking-wider text-zinc-200/90`}
        >
          João Gabriel
        </p>
      </div>
    </motion.div>
  );
};

export default HeroRightText;
