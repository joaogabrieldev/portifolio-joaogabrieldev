"use client";

import Image from "next/image";
import nameLogo from "@/assets/images/name-2.png";
import { motion } from "motion/react";
import { orderClass } from "..";

interface HeroRightTextProps {
  order: "right" | "center" | "left";
}

const HeroRightText = ({ order }: HeroRightTextProps) => {
  return (
    <motion.div
      initial={{ x: -700, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.5,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`z-20 flex w-full max-w-full min-w-0 items-center justify-center px-1 text-center sm:px-0 ${orderClass[order]}`}
    >
      <Image
        src={nameLogo}
        alt="João Gabriel"
        className={`relative h-auto w-full max-w-[250px] object-contain sm:max-w-[440px] md:max-w-[640px] lg:-left-6 lg:mb-8 lg:max-w-[860px] lg:scale-125 xl:-left-14 xl:mb-12 xl:max-w-[1000px] xl:scale-150 ${orderClass[order]}`}
        priority
      />
    </motion.div>
  );
};

export default HeroRightText;
