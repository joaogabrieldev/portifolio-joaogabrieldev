"use client";

import { orderClass } from "..";
import { useHeroParallaxY } from "@/layout/Hero/useHeroParallaxY";
import hero2Alpha from "@/assets/images/hero-2-alpha.png";
import { motion } from "motion/react";
import "./HeroCenterMedia.css";

const HERO_IMAGE_ALT = "João Gabriel";

const easeMedia = [0.4, 0, 0.2, 1] as const;

interface HeroCenterMediaProps {
  order: "right" | "center" | "left";
}

const HeroCenterMedia = ({ order }: HeroCenterMediaProps) => {
  const videoParallaxY = useHeroParallaxY(11, 5);
  const imageParallaxY = useHeroParallaxY(-14, -6);

  return (
    <div
      className={`relative -top-8 flex h-[38vh] min-h-[220px] min-w-0 w-full items-center justify-center sm:h-[42vh] sm:min-h-[260px] md:top-0 ${orderClass[order]} ml-1.5 lg:ml-0`}
    >
      <motion.div
        className="absolute z-0 h-[92vw] max-h-[360px] min-h-[220px] w-[94vw] max-w-[360px] min-w-[220px] sm:h-[100vw] sm:max-h-[420px] sm:min-h-[260px] sm:w-[96vw] sm:max-w-[420px] sm:min-w-[260px] md:h-[56vw] md:max-h-[700px] md:w-[84vw] md:max-w-[1180px] lg:h-[50vw] lg:max-h-[820px] lg:w-screen lg:max-w-[1920px]"
        style={{ y: videoParallaxY }}
      >
        <motion.div
          className="h-full w-full"
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 20,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.15, ease: easeMedia }}
        >
          <video
            className="h-full w-full object-cover md:object-contain"
            style={{ backgroundColor: "transparent" }}
            src="/assets/animations/sunrise-2.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </motion.div>
      <motion.div className="relative z-10" style={{ y: imageParallaxY }}>
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -0.8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: easeMedia }}
        >
          <motion.img
            src={hero2Alpha.src}
            width={hero2Alpha.width}
            height={hero2Alpha.height}
            alt={HERO_IMAGE_ALT}
            className="profile-image relative top-2 h-auto w-[480px] scale-[1.2] cursor-pointer object-cover grayscale transition-[filter] duration-500 ease-out hover:filter-[grayscale(0%)] sm:w-[320px] sm:scale-[1.3] md:top-3 md:w-[620px] md:scale-[2.1] lg:w-[760px]"
            initial={{
              filter:
                "blur(6px) brightness(0.7) contrast(1.15) grayscale(100%)",
            }}
            animate={{
              filter: "blur(0px) brightness(1) contrast(1) grayscale(100%)",
            }}
            transition={{ duration: 1.05, delay: 0.35, ease: easeMedia }}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/400x600/383178/ffffff?text=Image+Not+Found";
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCenterMedia;
