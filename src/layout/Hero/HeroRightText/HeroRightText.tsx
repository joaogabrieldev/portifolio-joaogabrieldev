import { HERO_CONTENT } from "@/components/21st/minimalist-hero";
import { motion } from "framer-motion";

const HeroRightText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.2 }}
    className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
  >
    <h1 className="text-foreground text-7xl font-extrabold md:text-8xl lg:text-9xl">
      {HERO_CONTENT.overlayText.part1}
      <br />
      {HERO_CONTENT.overlayText.part2}
    </h1>
  </motion.div>
);

export default HeroRightText;
