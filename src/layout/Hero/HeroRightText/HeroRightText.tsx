"use client";

import Image from "next/image";
import nameLogo from "@/assets/images/name-2.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroRightText = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    mass: 0.7,
  });

  const y = useTransform(smoothProgress, [0, 1], [28, -30]);
  const x = useTransform(smoothProgress, [0, 1], [8, -6]);
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.8, 1], [0.65, 1, 1, 0.8]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ y, x, opacity }}
      data-hero="right"
      data-parallax="right"
      className="z-20 order-2 flex w-full max-w-full min-w-0 items-center justify-center px-2 text-center sm:px-0 md:order-3 md:justify-start"
    >
      <Image
        src={nameLogo}
        alt="João Gabriel"
        className="relative h-auto w-full max-w-[300px] object-contain sm:max-w-[600px] md:max-w-[760px] lg:left-35 lg:mb-12 lg:max-w-[1000px] lg:scale-150"
        priority
      />
    </motion.div>
  );
};

export default HeroRightText;
