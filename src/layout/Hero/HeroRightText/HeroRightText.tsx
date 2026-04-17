"use client";

import { motion } from "motion/react";
import { orderClass } from "..";
import { epilogue, fraunces, herrVonMuellerhoff } from "@/utils/fonts";
import { urlGithub, urlLinkedin } from "@/utils/linksToGo";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import "./HeroRightText.css";

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
      className={`relative z-30 flex w-full max-w-full min-w-0 flex-col items-center justify-center justify-self-center px-1 text-center sm:max-w-[min(100%,42rem)] sm:px-0 ${orderClass[order]} select-none`}
    >
      <div
        data-hero="right"
        data-parallax="right"
        className="relative -top-2 z-30 flex w-full max-w-[min(100vw-1.5rem,1200px)] flex-col items-center sm:-top-2 md:left-4 lg:-left-5 lg:mb-8 xl:mb-12"
      >
        <div
          className={`${epilogue.className} hero-right-title w-full max-w-full text-center leading-[0.82] font-extrabold tracking-[-0.05em] text-white uppercase`}
        >
          <span className="hero-right-port relative block">PORT</span>
          <span className="hero-right-folio relative block italic">FOLIO.</span>
        </div>
        <div className="">
          <div className="">
            <p className={`${herrVonMuellerhoff.className} hero-right-name`}>
              João Gabriel
            </p>
          </div>
          <div className="hero-right-social">
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
      </div>
    </motion.div>
  );
};

export default HeroRightText;
