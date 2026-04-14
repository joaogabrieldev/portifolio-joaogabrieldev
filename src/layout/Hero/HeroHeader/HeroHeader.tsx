"use client";

import { HERO_CONTENT } from "@/layout/Hero";
import NewLogo from "@/pieces/NewLogo/NewLogo";
import Link from "next/link";
import { useState } from "react";
import HeroDesktopNav, { HeroDesktopNavActions } from "./HeroDesktopNav";
import HeroMobileNav from "./HeroMobileNav";

const HeroHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative top-4 z-30 -mt-2 grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 gap-y-2 sm:gap-x-3 md:top-0">
      <div className="min-w-0 justify-self-start text-base font-bold tracking-wider text-white sm:text-lg md:text-xl">
        <Link href="/">
          <NewLogo />
        </Link>
      </div>
      <HeroDesktopNav navLinks={HERO_CONTENT.navLinks} />
      <div className="flex min-w-0 shrink-0 items-center justify-end justify-self-end gap-2 sm:gap-3">
        <HeroDesktopNavActions />
        <HeroMobileNav
          navLinks={HERO_CONTENT.navLinks}
          isMenuOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((prev) => !prev)}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default HeroHeader;
