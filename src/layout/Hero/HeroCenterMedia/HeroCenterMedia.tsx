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
      className={`relative z-0 -top-6 flex h-[34vh] min-h-[200px] w-full min-w-0 items-center justify-center sm:-top-8 sm:h-[40vh] sm:min-h-[240px] md:top-0 md:h-[42vh] md:min-h-[260px] ${orderClass[order]} ml-0 sm:ml-1.5 lg:ml-0`}
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
            className="h-full w-full object-cover md:object-contain mt-4 md:mt-0"
            style={{ backgroundColor: "transparent" }}
            src="/assets/animations/sunrise-2.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>
      </motion.div>
      <motion.div className="relative z-[10]" style={{ y: imageParallaxY }}>
        <motion.div
          initial={{ opacity: 0, y: 36, rotate: -0.8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, ease: easeMedia }}
        >
          <motion.img
            src={hero2Alpha.src}
            width={hero2Alpha.width}
            height={hero2Alpha.height}
            alt={HERO_IMAGE_ALT}
            className="profile-image relative top-1 mx-auto h-auto w-[min(100%,17.5rem)] max-w-[92vw] scale-[1.25] cursor-pointer object-cover sm:top-2 sm:w-[min(100%,20rem)] sm:scale-[1.2] md:top-3 md:w-[min(100%,28rem)] md:max-w-none md:scale-[1.75] lg:w-[min(100%,30rem)] lg:scale-[2.05] xl:w-[28.75rem] xl:scale-[2.1]"
            initial={{
              filter: "blur(6px) grayscale(1)",
            }}
            animate={{
              filter: "blur(0px) grayscale(1)",
            }}
            whileHover={{
              filter: "blur(0px) grayscale(0)",
              transition: { duration: 0.35, ease: easeMedia },
            }}
            transition={{
              ease: easeMedia,
              filter: { duration: 0.6, ease: easeMedia },
            }}
            onError={(event) => {
              const target = event.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://placehold.co/400x600/383178/ffffff?text=Image+Not+Found";
            }}
          />
        </motion.div>
      </motion.div>
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,transparent_0%,transparent_62%,rgb(0,0,0)_100%)] md:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(180deg,transparent_0%,transparent_62%,rgb(0,0,0)_100%)] md:hidden"
        aria-hidden
      />
    </div>
  );
};

export default HeroCenterMedia;
