import { cn } from "@/lib/utils";
import React from "react";

export type HeroButtonVariant = "primary" | "secondary" | "outline";

interface IHeroButton {
  button_href: string;
  button_label: string;
  button_icon?: React.ReactNode;
  button_variant?: HeroButtonVariant;
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

const HeroButton = ({
  button_href,
  button_label,
  button_icon,
  button_variant = "primary",
}: IHeroButton) => {
  return (
    <a
      href={button_href}
      className={cn(
        "group mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-[14px]",
        button_variants[button_variant],
      )}
    >
      <span className="text-[16px] font-medium">{button_label}</span>
      {button_icon && (
        <span
          aria-hidden="true"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition sm:h-10 sm:w-10",
            icon_circle_variants[button_variant],
          )}
        >
          {button_icon}
        </span>
      )}
    </a>
  );
};

export default HeroButton;
