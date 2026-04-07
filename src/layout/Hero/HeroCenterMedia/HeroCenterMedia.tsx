"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const HERO_IMAGE_SRC = "/assets/images/hero-2-alpha_b&w.png";
const HERO_IMAGE_ALT = "Minimalist Hero";

const HeroCenterMedia = () => {
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

  const videoY = useTransform(smoothProgress, [0, 1], [36, -42]);
  const imageY = useTransform(smoothProgress, [0, 1], [20, -24]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.02, 1.08]);

  return (
    <div
      ref={sectionRef}
      data-hero="media"
      className="relative order-1 flex h-[42vh] min-h-[260px] w-full items-center justify-center md:order-2 md:h-full md:min-h-0"
    >
      <motion.div
        style={{ y: videoY }}
        data-parallax="video"
        className="absolute z-0 h-[100vw] max-h-[420px] min-h-[260px] w-[96vw] max-w-[420px] min-w-[260px] md:h-[56vw] md:max-h-[700px] md:w-[84vw] md:max-w-[1180px] lg:h-[50vw] lg:max-h-[820px] lg:w-screen lg:max-w-[1900px]"
      >
        <video
          data-hero="media-video"
          className="h-full w-full object-cover md:object-contain"
          style={{ backgroundColor: "transparent" }}
          src="/assets/animations/sunrise-2.webm"
          autoPlay
          muted
          loop
          playsInline
        />
      </motion.div>
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        data-hero="media-image"
        data-parallax="image"
        src={HERO_IMAGE_SRC}
        alt={HERO_IMAGE_ALT}
        className="relative top-2 z-10 h-auto w-[280px] scale-125 object-cover sm:w-[340px] sm:scale-140 md:top-3 md:w-[560px] md:scale-210 lg:w-[700px]"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://placehold.co/400x600/383178/ffffff?text=Image+Not+Found";
        }}
      />
    </div>
  );
};

export default HeroCenterMedia;
