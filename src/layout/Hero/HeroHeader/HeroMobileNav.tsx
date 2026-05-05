"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { HeroDesktopNavActions } from "./HeroDesktopNav";
import LangSelect from "@/pieces/LangSelect/LangSelect";
import { dmSans } from "@/utils/fonts";

interface HeroNavLink {
  title: string;
  slug: string;
}

interface HeroMobileNavProps {
  navLinks: HeroNavLink[];
  isMenuOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const HeroMobileNav = ({
  navLinks,
  isMenuOpen,
  onToggle,
  onClose,
}: HeroMobileNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative md:hidden"
    >
      <button
        onClick={onToggle}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-xl"
        aria-label="Open menu"
      >
        <div className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-4 bg-white" />
        </div>
      </button>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-full right-0 mt-4 w-64 rounded-3xl border border-white/15 bg-[#16070bf2] p-4 text-white shadow-[0_20px_48px_rgba(0,0,0,0.42)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <ScrollLink
                key={item.slug}
                to={item.slug}
                smooth={true}
                duration={800}
                onClick={onClose}
                className="cursor-pointer rounded-full border border-white/8 bg-white/4 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                {item.title}
              </ScrollLink>
            ))}
            <LangSelect />
            <ScrollLink
              to="contato"
              smooth={true}
              duration={800}
              className={`flex h-11 cursor-pointer items-center justify-center rounded-full border border-violet-400/25 bg-[#413b72] px-6 text-sm font-bold tracking-wide text-white uppercase shadow-[0_8px_24px_rgba(65,59,114,0.45)] transition hover:border-violet-300/35 hover:bg-[#4f4790] hover:shadow-[0_10px_28px_rgba(65,59,114,0.5)] ${dmSans.className}`}
            >
              Contato
            </ScrollLink>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroMobileNav;
