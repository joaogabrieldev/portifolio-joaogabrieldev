import React from "react";
import { cn } from "@/lib/utils";

import HeroCenterMedia from "@/layout/HeroCenterMedia/HeroCenterMedia";
import HeroHeader from "@/layout/Hero/HeroHeader/HeroHeader";
import HeroLeftText from "@/layout/Hero/HeroLeftText/HeroLeftText";
import HeroRightText from "@/layout/Hero/HeroRightText/HeroRightText";
import HeroFooter from "@/layout/Hero/HeroFooter/HeroFooter";

export const HERO_CONTENT = {
  logoText: "Minimalist Hero",
  navLinks: [] as { title: string; slug: string }[],
  mainText: "Minimalist Hero",
  readMoreLink: "https://www.google.com",
  videoSrc: "/assets/animations/sunrise-webm-3.webm",
  imageSrc: "/assets/images/hero-2-alpha_b&w.png",
  imageAlt: "Minimalist Hero",
  overlayText: {
    part1: "Minimalist",
    part2: "Hero",
  },
  locationText: "Sao Paulo, Brazil",
  className: "bg-black",
};

export const MinimalistHero = () => {
  return (
    <div
      className={cn(
        "relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black p-8 font-sans md:p-12",
        HERO_CONTENT.className,
      )}
    >
      <HeroHeader />

      <div className="relative grid w-full min-w-0 max-w-7xl grow grid-cols-1 items-center gap-y-8 md:grid-cols-3 md:gap-y-0 *:min-w-0">
        <HeroLeftText />
        <HeroCenterMedia />
        <HeroRightText />
      </div>

      <HeroFooter />
    </div>
  );
};
