"use client";

import React, { useRef } from "react";
import { useScroll } from "motion/react";
import { cn } from "@/lib/utils";

import HeroCenterMedia from "@/layout/Hero/HeroCenterMedia/HeroCenterMedia";
import HeroHeader from "@/layout/Hero/HeroHeader/HeroHeader";
import HeroLeftText from "@/layout/Hero/HeroLeftText/HeroLeftText";
import HeroRightText from "@/layout/Hero/HeroRightText/HeroRightText";
import HeroFooter from "@/layout/Hero/HeroFooter/HeroFooter";
import { HeroScrollContext } from "@/contexts/HeroScrollContext";
import { navLinks } from "@/assets/data/navLinks";
import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";

type HeroNavLinkTitle = Exclude<(typeof navLinks)[number]["title"], "Contato">;
type HeroNavLink = { title: HeroNavLinkTitle; slug: string };

export const HERO_CONTENT = {
  logoText: "Minimalist Hero",
  navLinks: navLinks.filter(
    (link) => link.title !== "Contato",
  ) as HeroNavLink[],
  mainText: "Minimalist Hero",
  readMoreLink: "https://www.google.com",
  videoSrc: "/assets/animations/sunrise-webm-3.webm",
  imageSrc: "/assets/images/erasebg-transformed%20(5).png",
  imageAlt:
    "Retrato em perfil de João Gabriel, iluminado por luz direcional em fundo escuro",
  overlayText: {
    part1: "João",
    part2: "Gabriel",
  },
  locationText: "Sao Paulo, Brazil",
  className: "bg-black",
};

/** Ajustes de posição horizontal (grid / flex); ordem visual vem da ordem no DOM. */
export const orderClass = {
  left: "right-0 sm:right-2 md:right-8 lg:right-44 xl:right-40",
  center: "",
  right: "left-0 sm:left-2 md:left-8 lg:left-32 xl:left-40",
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <HeroScrollContext.Provider value={scrollYProgress}>
        <div
          ref={heroRef}
          id="inicio"
          className="relative flex min-h-screen w-full scroll-mt-0 flex-col items-center justify-between overflow-hidden bg-black px-4 py-5 font-sans sm:px-6 sm:py-6 md:px-10 md:py-8 lg:top-0 lg:px-12"
        >
          <HeroHeader />

          <div className="relative mt-10 grid w-full max-w-[min(100%,90rem)] min-w-0 grow grid-cols-1 justify-items-center gap-y-5 py-2 *:min-w-0 sm:mt-6 sm:gap-y-7 md:mt-8 md:py-0 lg:mt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.72fr)_minmax(0,1.35fr)] lg:items-center lg:justify-items-stretch lg:gap-x-2 lg:gap-y-0 xl:gap-x-4 2xl:gap-x-7">
            <HeroRightText order={"left"} />
            <HeroCenterMedia order={"center"} />
            <HeroLeftText />
          </div>

          <HeroFooter />
        </div>
      </HeroScrollContext.Provider>
      {/* <GradualBlur
        position="bottom"
        strength={3}
        target="page"
        zIndex={30}
        opacity={0.9}
        height="120px"
        width="100vw"
        className="block md:hidden"
      />
      <GradualBlur
        position="bottom"
        strength={5}
        target="page"
        zIndex={30}
        opacity={0.9}
        height="180px"
        width="100vw"
        className="hidden md:block"
      /> */}
    </>
  );
};

export default Hero;
