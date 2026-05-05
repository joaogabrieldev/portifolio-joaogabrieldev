"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export type HeroButtonVariant = "primary" | "secondary" | "outline";

interface IHeroButton {
  button_href: string;
  button_label: string;
  button_icon?: React.ReactNode;
  button_variant?: HeroButtonVariant;
  /** Usa `react-scroll` com `to={button_href}` (slug do `id` da secção). */
  scrollToSection?: boolean;
  /** Abre noutro separador (ex.: PDF). */
  openInNewTab?: boolean;
}

const button_variants: Record<HeroButtonVariant, string> = {
  primary:
    "border-violet-300/35 bg-violet-500/75 text-white shadow-[0_8px_24px_rgba(109,40,217,0.45)] hover:bg-violet-400/85",
  secondary:
    "border-white/20 bg-white text-zinc-900 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-white/92",
  outline:
    "border-white/50 bg-transparent text-white shadow-none hover:border-white/70 hover:bg-white/10",
};

const icon_circle_variants: Record<HeroButtonVariant, string> = {
  primary: "bg-white text-black group-hover:bg-white/85",
  secondary: "bg-zinc-900 text-white group-hover:bg-zinc-800",
  outline: "bg-white text-black group-hover:bg-white/85",
};

const heroButtonClassName = (
  button_variant: HeroButtonVariant,
) =>
  cn(
    "group mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-[14px]",
    button_variants[button_variant],
  );

const HeroButton = ({
  button_href,
  button_label,
  button_icon,
  button_variant = "primary",
  scrollToSection = false,
  openInNewTab = false,
}: IHeroButton) => {
  const inner = (
    <>
      <span className="text-[16px] font-medium">{button_label}</span>
      {button_icon ? (
        <span
          aria-hidden="true"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition sm:h-10 sm:w-10",
            icon_circle_variants[button_variant],
          )}
        >
          {button_icon}
        </span>
      ) : null}
    </>
  );

  if (scrollToSection) {
    return (
      <ScrollLink
        to={button_href}
        smooth
        duration={1500}
        offset={-70}
        href={`#${button_href}`}
        className={heroButtonClassName(button_variant)}
      >
        {inner}
      </ScrollLink>
    );
  }

  return (
    <a
      href={button_href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={heroButtonClassName(button_variant)}
    >
      {inner}
    </a>
  );
};

export default HeroButton;
