"use client";

import Image from "next/image";
import logo from "@/assets/images/new-logo.png";
import { cn } from "@/lib/utils";

type NewLogoProps = {
  /**
   * `hero`: ~54px mobile / 64px desktop — mesmo recorte do header da hero.
   * `compact`: ~44px / 48px — header após scroll (menor, sem depender de JS de viewport).
   */
  variant?: "hero" | "compact";
  className?: string;
};

const variantClassName: Record<NonNullable<NewLogoProps["variant"]>, string> = {
  hero: "h-[54px] w-[54px] md:h-16 md:w-16",
  compact: "h-11 w-11 md:h-12 md:w-12",
};

const NewLogo = ({ variant = "hero", className }: NewLogoProps = {}) => (
  <Image
    src={logo}
    alt="logo"
    width={64}
    height={64}
    className={cn(
      "cursor-pointer object-contain transition-opacity duration-200 hover:opacity-90",
      variantClassName[variant],
      className,
    )}
    priority
  />
);

export default NewLogo;
