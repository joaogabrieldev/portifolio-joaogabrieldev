"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";

import NewLogo from "@/pieces/NewLogo/NewLogo";
import {
  HEADER_LOGO_LAYOUT_TRANSITION,
  HEADER_SHELL_OPACITY_TRANSITION,
} from "@/constants/headerLogoMotion";
import { navLinks } from "@/assets/data/navLinks";
import { useProcessosSectionForHeader } from "@/hooks/useProcessosSectionForHeader";
import { useSectionScrollSpy } from "@/hooks/useSectionScrollSpy";
import { useWindowSize } from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";
import { dmSans, outfit } from "@/utils/fonts";

const SECTIONS_NAV_LINKS = navLinks.filter((l) => l.title !== "Contato");

const TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

export default function SectionsHeader() {
  const isProcessosSection = useProcessosSectionForHeader();
  const activeId = useSectionScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { width } = useWindowSize();
  /** Desktop (md+): header transparente só na secção Process; mobile mantém barra sólida. */
  const isDesktop = width >= 768;
  const headerProcessosStyle = isProcessosSection && isDesktop;

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
          : "border-b border-white/10 bg-[#050505]/92 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_-20%,rgba(88,28,135,0.18),transparent_55%)] transition-opacity duration-300",
          headerProcessosStyle && "opacity-0",
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
            <NewLogo variant="compact" />
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
                    "inline-flex cursor-pointer items-center rounded-full px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/8 hover:text-white lg:px-4",
                    activeId === item.slug && "bg-white/12 text-white",
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
              className={`ml-2 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-violet-400/30 bg-[#5b4f9e] px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase shadow-[0_6px_20px_rgba(91,79,158,0.45)] transition hover:border-violet-300/45 hover:bg-[#6d5fb5] hover:shadow-[0_8px_24px_rgba(91,79,158,0.5)] ${dmSans.className}`}
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
            className={`inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-[#5b4f9e] px-4 text-xs font-bold tracking-wide text-white uppercase ${dmSans.className}`}
          >
            Contato
          </ScrollLink>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white backdrop-blur-md"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="flex flex-col gap-1">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-4 bg-white" />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#0a0a0a]/98 px-4 py-4 backdrop-blur-xl md:hidden">
          <ul className={`flex flex-col gap-1 ${outfit.className}`}>
            {SECTIONS_NAV_LINKS.map((item) => (
              <li key={item.slug}>
                <ScrollLink
                  to={item.slug}
                  smooth
                  duration={800}
                  offset={-72}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm font-semibold text-white/95 transition hover:bg-white/8"
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
