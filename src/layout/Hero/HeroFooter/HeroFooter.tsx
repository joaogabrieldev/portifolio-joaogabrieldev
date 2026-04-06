import { HERO_CONTENT } from "@/components/21st/minimalist-hero";
import { motion } from "framer-motion";

const HeroFooter = () => (
  <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="flex items-center space-x-4"
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      className="text-foreground/80 text-sm font-medium"
    >
      {HERO_CONTENT.locationText}
    </motion.div>
  </footer>
);

export default HeroFooter;
