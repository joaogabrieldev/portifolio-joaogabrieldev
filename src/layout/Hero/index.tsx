"use client";

import React, { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroCenterMedia from "@/layout/Hero/HeroCenterMedia/HeroCenterMedia";
import HeroHeader from "@/layout/Hero/HeroHeader/HeroHeader";
import HeroLeftText from "@/layout/Hero/HeroLeftText/HeroLeftText";
import HeroRightText from "@/layout/Hero/HeroRightText/HeroRightText";
import HeroFooter from "@/layout/Hero/HeroFooter/HeroFooter";
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
  imageSrc: "/assets/images/hero-2-alpha_b&w.png",
  imageAlt: "Minimalist Hero",
  overlayText: {
    part1: "João",
    part2: "Gabriel",
  },
  locationText: "Sao Paulo, Brazil",
  className: "bg-black",
};

export const orderClass = {
  left: "order-1 right-0 sm:right-2 md:right-8 lg:right-60 xl:right-40",
  center: "order-2",
  right: "order-3 left-0 sm:left-2 md:left-8 lg:left-40 xl:left-40",
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const heroRoot = heroRef.current;
    if (!heroRoot) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reducedMotion) {
        const entranceTl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        entranceTl
          .from("[data-hero='header']", {
            autoAlpha: 0,
            y: -28,
            duration: 0.55,
          })
          .from(
            "[data-hero='left']",
            { autoAlpha: 0, x: -28, duration: 0.7 },
            "-=0.22",
          )
          .from(
            "[data-hero='media-video']",
            { autoAlpha: 0, scale: 0.88, duration: 1.1 },
            "-=0.34",
          )
          .from(
            "[data-hero='media-image']",
            { autoAlpha: 0, y: 52, duration: 1.1 },
            "-=0.72",
          )
          .from(
            "[data-hero='right']",
            { autoAlpha: 0, x: 24, duration: 0.72 },
            "-=0.6",
          )
          .from(
            "[data-hero='footer']",
            { autoAlpha: 0, y: 22, duration: 0.6 },
            "-=0.48",
          );
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to("[data-parallax='header']", {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        gsap.to("[data-parallax='left']", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.to("[data-parallax='right']", {
          yPercent: -26,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to("[data-parallax='video']", {
          yPercent: 11,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-parallax='image']", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });

        gsap.to("[data-parallax='footer']", {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to("[data-parallax='video']", {
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        gsap.to("[data-parallax='image']", {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: heroRoot,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className={cn(
          "relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-black px-4 py-5 font-sans sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-12",
          HERO_CONTENT.className,
        )}
      >
        <HeroHeader />

        <div className="relative mt-4 grid w-full max-w-7xl min-w-0 grow grid-cols-1 items-center gap-y-4 py-2 *:min-w-0 sm:mt-6 sm:gap-y-6 md:mt-10 md:grid-cols-3 md:gap-x-6 md:gap-y-0 md:py-0">
          <HeroLeftText order={"right"} />
          <HeroCenterMedia order={"center"} />
          <HeroRightText order={"left"} />
        </div>

        <HeroFooter />
      </div>
      <GradualBlur
        position="bottom"
        strength={3}
        target="page"
        zIndex={30}
        opacity={0.9}
        height="140px"
        width="100vw"
        className="block md:hidden"
      />
      <GradualBlur
        position="bottom"
        strength={3}
        target="page"
        zIndex={30}
        opacity={0.9}
        height="250px"
        width="100vw"
        className="hidden md:block"
      />
    </>
  );
};

export default Hero;
