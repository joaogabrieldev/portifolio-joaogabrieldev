"use client";

import { HERO_CONTENT } from "@/layout/Hero";
import NewLogo from "@/pieces/NewLogo/NewLogo";
import { useScrolledPastHero } from "@/hooks/useScrolledPastHero";
import {
  HEADER_LOGO_LAYOUT_TRANSITION,
  HEADER_SHELL_OPACITY_TRANSITION,
} from "@/constants/headerLogoMotion";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HeroDesktopNav, { HeroDesktopNavActions } from "./HeroDesktopNav";
import HeroMobileNav from "./HeroMobileNav";

const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrolledPastHero();

  return (
    <AnimatePresence initial={false}>
      {!scrolled ? (
        <motion.header
          id="site-hero-nav"
          key="hero-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={HEADER_SHELL_OPACITY_TRANSITION}
          className="fixed top-0 right-0 left-0 z-50 w-full select-none"
        >
          <div className="mx-auto flex w-full max-w-7xl min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-3 md:gap-y-2 md:px-10 md:py-3 lg:px-12 ">
            <motion.div
              layoutId="global-header-logo"
              transition={HEADER_LOGO_LAYOUT_TRANSITION}
              className="flex min-w-0 shrink-0 items-center justify-self-start"
            >
              <Link
                href="/"
                className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <NewLogo variant="hero" />
              </Link>
            </motion.div>
            <HeroDesktopNav navLinks={HERO_CONTENT.navLinks} />
            <div className="flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-3 md:justify-self-end">
              <HeroDesktopNavActions />
              <HeroMobileNav
                navLinks={HERO_CONTENT.navLinks}
                isMenuOpen={isMenuOpen}
                onToggle={() => setIsMenuOpen((prev) => !prev)}
                onClose={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </motion.header>
      ) : null}
    </AnimatePresence>
  );
};

export default HeroHeader;
