"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { orderClass } from "..";
import hero2Alpha from "@/assets/images/hero-2-alpha.png";

const HERO_IMAGE_ALT = "João Gabriel";

interface HeroCenterMediaProps {
  order: "right" | "center" | "left";
}

const HeroCenterMedia = ({ order }: HeroCenterMediaProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (
      !videoWrapperRef.current ||
      !imageWrapperRef.current ||
      !imageRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .fromTo(
          videoWrapperRef.current,
          { autoAlpha: 0, scale: 0.9, y: 20, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.15,
          },
        )
        .fromTo(
          imageWrapperRef.current,
          { autoAlpha: 0, y: 24, rotate: -0.8 },
          { autoAlpha: 1, y: 0, rotate: 0, duration: 1.8 },
          "-=0.85",
        )
        .fromTo(
          imageRef.current,
          {
            filter:
              "blur(6px) brightness(0.7) contrast(1.15) grayscale(100%)",
          },
          {
            filter: "blur(0px) brightness(1) contrast(1) grayscale(100%)",
            duration: 1.05,
            onComplete: () => {
              if (imageRef.current) {
                gsap.set(imageRef.current, { clearProps: "filter" });
              }
            },
          },
          "-=0.95",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      data-hero="media"
      className={`relative -top-8 flex h-[38vh] min-h-[220px] w-full items-center justify-center sm:h-[42vh] sm:min-h-[260px] md:top-0 ${orderClass[order]} ml-1.5 lg:ml-0`}
    >
      <div
        ref={videoWrapperRef}
        data-parallax="video"
        className="absolute z-0 h-[92vw] max-h-[360px] min-h-[220px] w-[94vw] max-w-[360px] min-w-[220px] sm:h-[100vw] sm:max-h-[420px] sm:min-h-[260px] sm:w-[96vw] sm:max-w-[420px] sm:min-w-[260px] md:h-[56vw] md:max-h-[700px] md:w-[84vw] md:max-w-[1180px] lg:h-[50vw] lg:max-h-[820px] lg:w-screen lg:max-w-[1920px]"
      >
        <video
          data-hero="media-video"
          className="h-full w-full object-cover md:object-contain"
          style={{ backgroundColor: "transparent" }}
          src="/assets/animations/sunrise-2.webm"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div ref={imageWrapperRef} className="relative z-10">
        <img
          ref={imageRef}
          data-hero="media-image"
          data-parallax="image"
          src={hero2Alpha.src}
          width={hero2Alpha.width}
          height={hero2Alpha.height}
          alt={HERO_IMAGE_ALT}
          className="relative top-2 h-auto w-[480px] scale-[1.2] cursor-pointer object-cover grayscale transition-[filter] duration-500 ease-out hover:filter-[grayscale(10%)] sm:w-[320px] sm:scale-[1.3] md:top-3 md:w-[620px] md:scale-[2.1] lg:w-[760px]"
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src =
              "https://placehold.co/400x600/383178/ffffff?text=Image+Not+Found";
          }}
        />
      </div>
    </div>
  );
};

export default HeroCenterMedia;
