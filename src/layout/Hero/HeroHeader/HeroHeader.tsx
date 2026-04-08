"use client";

import { HERO_CONTENT } from "@/layout/Hero";
import Link from "next/link";
import { useState } from "react";
import HeroDesktopNav from "./HeroDesktopNav";
import HeroMobileNav from "./HeroMobileNav";
import NewLogo from "@/pieces/NewLogo/NewLogo";

const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      data-hero="header"
      data-parallax="header"
      className="z-30 flex w-full max-w-7xl items-center justify-between gap-2 sm:gap-3"
    >
      <div className="text-base font-bold tracking-wider text-white sm:text-lg md:text-xl">
        <Link href="/">
          <NewLogo />
        </Link>
      </div>
      <HeroDesktopNav navLinks={HERO_CONTENT.navLinks} />
      <HeroMobileNav
        navLinks={HERO_CONTENT.navLinks}
        isMenuOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((prev) => !prev)}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default HeroHeader;
