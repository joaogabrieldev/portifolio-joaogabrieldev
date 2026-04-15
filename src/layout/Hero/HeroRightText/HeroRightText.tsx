"use client";

import { motion } from "motion/react";
import { orderClass } from "..";
import { epilogue, fraunces } from "@/utils/fonts";
import { urlGithub, urlLinkedin } from "@/utils/linksToGo";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface HeroRightTextProps {
  order: "right" | "center" | "left";
}

const HeroRightText = ({ order }: HeroRightTextProps) => {
  return (
    <motion.div
      initial={{ x: -580, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.35,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`z-20 flex w-full max-w-full min-w-0 flex-col items-center justify-center justify-self-center px-1 text-center sm:max-w-[min(100%,42rem)] sm:px-0 ${orderClass[order]} select-none`}
    >
      <div
        data-hero="right"
        data-parallax="right"
        className="relative -top-2 flex w-full max-w-[min(100vw-1.5rem,1200px)] flex-col items-center sm:-top-2 md:left-4 lg:-left-8 lg:mb-8 xl:-left-12 xl:mb-12"
      >
        <div
          className={`${epilogue.className} w-full max-w-full text-center text-[clamp(2.75rem,11vw+0.5rem,7.25rem)] leading-[0.82] font-extrabold tracking-[-0.05em] text-white uppercase sm:text-[clamp(3.35rem,10vw+0.35rem,9.5rem)] md:text-[clamp(4.25rem,12vw+0.25rem,12.5rem)] lg:text-[clamp(5rem,13vw+0.25rem,15rem)]`}
        >
          <span className="relative -left-1 block sm:-left-2 md:-left-4 lg:-left-6 xl:-left-40">
            PORT
          </span>
          <span className="relative left-0 block italic sm:-left-3 md:-left-5 lg:-left-8 xl:-left-47">
            FOLIO.
          </span>
        </div>
        <div>
          <p
            className={`${fraunces.className} relative max-w-full text-center text-[clamp(1.15rem,2.6vw,1.75rem)] leading-none font-light text-zinc-100 italic sm:-top-6 sm:left-14 sm:mt-2.5 md:text-[clamp(2rem,2.6vw,1.75rem)]`}
          >
            João Gabriel
          </p>
        </div>
        <div className="relative -top-6 -left-47 mt-3 flex w-full items-center justify-start gap-3 pl-1.5 text-white sm:-mt-9">
          <Link
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/45 hover:bg-white/12"
          >
            <SiGithub size={18} />
          </Link>
          <Link
            href={urlLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 transition hover:border-white/45 hover:bg-white/12"
          >
            <SiLinkedin size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroRightText;
