import { HERO_CONTENT } from "@/components/21st/minimalist-hero";
import { motion } from "framer-motion";

const HeroRightText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.2 }}
    className="z-20 order-3 flex w-full min-w-0 max-w-full items-center justify-center px-1 text-center sm:px-0 md:justify-start"
  >
    <h1 className="text-foreground max-w-full text-[clamp(2rem,5.5vw+1rem,8rem)] leading-[0.92] font-extrabold tracking-tight text-balance md:leading-[0.9]">
      {HERO_CONTENT.overlayText.part1}
      {HERO_CONTENT.overlayText.part2 ? (
        <>
          <br />
          {HERO_CONTENT.overlayText.part2}
        </>
      ) : null}
    </h1>
  </motion.div>
);

export default HeroRightText;
