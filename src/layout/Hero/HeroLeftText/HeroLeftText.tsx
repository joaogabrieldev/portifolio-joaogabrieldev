import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/components/21st/minimalist-hero";

const HeroLeftText = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
    className="z-20 order-2 text-center md:order-1 md:text-left"
  >
    <p className="text-foreground/80 mx-auto max-w-xs text-sm leading-relaxed md:mx-0">
      {HERO_CONTENT.mainText}
    </p>
    <a
      href={HERO_CONTENT.readMoreLink}
      className="text-foreground mt-4 inline-block text-sm font-medium underline decoration-from-font"
    >
      Read More
    </a>
  </motion.div>
);

export default HeroLeftText;
