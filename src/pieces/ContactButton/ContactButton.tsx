import { cn } from "@/lib/utils";
import { dmSans } from "@/utils/fonts";
import Link from "next/link";
import React, { JSX } from "react";

interface ContactButtonProps {
  href: string;
  label: string;
  icon?: JSX.Element;
  className?: string;
  variant?: "primary" | "secondary";
}

const ContactButton = ({
  href,
  label,
  icon,
  className,
  variant = "secondary",
}: ContactButtonProps) => {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-black/20 bg-black px-8 text-sm font-bold tracking-wide text-white uppercase shadow-black/20 transition hover:bg-black/80",
          dmSans.className,
          className,
        )}
      >
        <span>{label}</span>
        {icon && <span>{icon}</span>}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center gap-1.5 rounded-full border border-black/30 bg-black/6 px-8 text-sm font-semibold text-black transition hover:bg-black/10",
        dmSans.className,
        className,
      )}
    >
      <span>{label}</span>
      {icon && <span>{icon}</span>}
    </Link>
  );
};

export default ContactButton;
