"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import negativeLogo from "@/assets/images/new-logo-negative.png";
import NewLogo from "@/pieces/NewLogo/NewLogo";
import {
  HEADER_LOGO_LAYOUT_TRANSITION,
  HEADER_SHELL_OPACITY_TRANSITION,
} from "@/constants/headerLogoMotion";
import { navLinks } from "@/assets/data/navLinks";
import { useHeaderPaletteTracking } from "@/hooks/useHeaderPaletteTracking";
import { useHeaderTransparencyTracking } from "@/hooks/useHeaderTransparencyTracking";
import { useSectionScrollSpy } from "@/hooks/useSectionScrollSpy";
import { cn } from "@/lib/utils";
import { useHeaderPalette } from "@/stores/useHeaderPalette";
import { dmSans, outfit } from "@/utils/fonts";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";

const SECTIONS_NAV_LINKS = navLinks.filter((l) => l.title !== "Contato");

const TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };
export default function SectionsHeader() {
  const activeId = useSectionScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);
  useHeaderPaletteTracking();
  const isLightPaletteZone = useHeaderPalette((s) => s.isLightPaletteZone);
  const headerProcessosStyle = useHeaderTransparencyTracking();

  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <motion.header
      id="site-primary-nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={HEADER_SHELL_OPACITY_TRANSITION}
      className={cn(
        "fixed top-0 left-0 z-[100] w-screen max-w-[100vw] transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out",
        headerProcessosStyle
          ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-none"
          : isLightPaletteZone
            ? "border-b border-[#1a1c2e]/12 bg-white/92 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-white/10 bg-[#050505]/92 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_-20%,rgba(88,28,135,0.18),transparent_55%)] transition-opacity duration-300",
          (headerProcessosStyle || isLightPaletteZone) && "opacity-0",
        )}
      />

      <div className="relative mx-auto flex h-[4.25rem] w-full max-w-[100rem] items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-8 md:px-12">
        <motion.div
          layoutId="global-header-logo"
          transition={HEADER_LOGO_LAYOUT_TRANSITION}
          className="flex shrink-0 items-center"
        >
          <Link
            href="/#inicio"
            className="inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            {isLightPaletteZone ? (
              <Image
                src={negativeLogo}
                alt="negative logo"
                width={isMobile ? 44 : 48}
                height={isMobile ? 44 : 48}
              />
            ) : (
              <NewLogo variant="compact" className={""} />
            )}
          </Link>
        </motion.div>

        <nav
          className={`hidden min-w-0 flex-1 items-center justify-end gap-2 md:flex md:gap-1 lg:gap-2 ${outfit.className}`}
          aria-label="Secções"
        >
          <ul className="flex max-w-full flex-wrap items-center justify-end gap-1 lg:gap-2">
            {SECTIONS_NAV_LINKS.map((item) => (
              <li key={item.slug} className="list-none">
                <ScrollLink
                  to={item.slug}
                  smooth
                  duration={800}
                  spy={false}
                  offset={-72}
                  className={cn(
                    "inline-flex cursor-pointer items-center rounded-full px-3 py-2 text-sm font-semibold transition lg:px-4",
                    isLightPaletteZone
                      ? "text-[#1e2240]/85 hover:bg-[#1e2240]/6 hover:text-[#1e2240]"
                      : "text-white/90 hover:bg-white/8 hover:text-white",
                    activeId === item.slug &&
                      (isLightPaletteZone
                        ? "bg-[#1e2240]/8 text-[#1e2240]"
                        : "bg-white/12 text-white"),
                  )}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <motion.div layoutId="global-header-cta" transition={TRANSITION}>
            <ScrollLink
              to="contato"
              smooth
              duration={800}
              offset={-72}
              className={cn(
                `ml-2 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition ${dmSans.className}`,
                isLightPaletteZone
                  ? "border border-black/15 bg-black text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:bg-black/85"
                  : "border border-violet-400/30 bg-[#5b4f9e] text-white shadow-[0_6px_20px_rgba(91,79,158,0.45)] hover:border-violet-300/45 hover:bg-[#6d5fb5] hover:shadow-[0_8px_24px_rgba(91,79,158,0.5)]",
              )}
            >
              Contato
            </ScrollLink>
          </motion.div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ScrollLink
            to="contato"
            smooth
            duration={800}
            offset={-72}
            className={cn(
              `inline-flex h-10 shrink-0 items-center justify-center rounded-full border px-4 text-xs font-bold tracking-wide uppercase ${dmSans.className}`,
              isLightPaletteZone
                ? "border-black/15 bg-black text-white"
                : "border-violet-400/30 bg-[#5b4f9e] text-white",
            )}
          >
            Contato
          </ScrollLink>
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md",
              isLightPaletteZone
                ? "border-black/15 bg-black/6 text-black"
                : "border-white/15 bg-white/8 text-white",
            )}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="flex flex-col gap-1">
              <span
                className={cn(
                  "block h-0.5 w-5",
                  isLightPaletteZone ? "bg-black" : "bg-white",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5",
                  isLightPaletteZone ? "bg-black" : "bg-white",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-4",
                  isLightPaletteZone ? "bg-black" : "bg-white",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className={cn(
            "border-t px-4 py-4 backdrop-blur-xl md:hidden",
            isLightPaletteZone
              ? "border-black/10 bg-white/98"
              : "border-white/10 bg-[#0a0a0a]/98",
          )}
        >
          <ul className={`flex flex-col gap-1 ${outfit.className}`}>
            {SECTIONS_NAV_LINKS.map((item) => (
              <li key={item.slug}>
                <ScrollLink
                  to={item.slug}
                  smooth
                  duration={800}
                  offset={-72}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm font-semibold transition",
                    isLightPaletteZone
                      ? "text-black/85 hover:bg-black/6"
                      : "text-white/95 hover:bg-white/8",
                  )}
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
