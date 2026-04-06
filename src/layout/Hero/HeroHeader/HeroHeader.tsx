import { HERO_CONTENT } from "@/components/21st/minimalist-hero";
import NavLink from "@/pieces/NavLink/NavLink";
import { motion } from "framer-motion";

const HeroHeader = () => (
  <header className="z-30 flex w-full max-w-7xl items-center justify-between">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl font-bold tracking-wider text-white"
    >
      {HERO_CONTENT.logoText}
    </motion.div>
    <ul className="hidden items-center space-x-8 md:flex">
      {HERO_CONTENT.navLinks.map((link) => (
        <NavLink key={link.slug} title={link.title} slug={link.slug} />
      ))}
    </ul>
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-1.5 md:hidden"
      aria-label="Open menu"
    >
      <span className="bg-foreground block h-0.5 w-6"></span>
      <span className="bg-foreground block h-0.5 w-6"></span>
      <span className="bg-foreground block h-0.5 w-5"></span>
    </motion.button>
  </header>
);

export default HeroHeader;
