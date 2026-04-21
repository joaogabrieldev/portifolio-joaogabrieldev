"use client";

import { useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/assets/data/navLinks";
import { useHeaderScroll } from "@/stores/useHeaderScroll";
import { useHeaderScrollTracking } from "@/hooks/useHeaderScrollTracking";
import { useProcessosSectionForHeader } from "@/hooks/useProcessosSectionForHeader";
import { cn } from "@/lib/utils";
import { dmSans, outfit } from "@/utils/fonts";

const SECTIONS_NAV_LINKS = navLinks.filter((l) => l.title !== "Contato");

export default function SectionsHeader() {
  useHeaderScrollTracking();
  const isScrolled = useHeaderScroll((s) => s.isScrolled);
  const isProcessosSection = useProcessosSectionForHeader();
  const [mobileOpen, setMobileOpen] = useState(false);

  const headerProcessosStyle = isScrolled && isProcessosSection;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-[100] w-screen max-w-[100vw] transition-[transform,opacity,background-color,border-color,backdrop-filter,box-shadow] duration-300 ease-out",
        isScrolled
          ? headerProcessosStyle
            ? "translate-y-0 border-b border-transparent bg-transparent opacity-100 shadow-none backdrop-blur-none"
            : "translate-y-0 border-b border-white/10 bg-[#050505]/92 opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
      aria-hidden={!isScrolled}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_-20%,rgba(88,28,135,0.18),transparent_55%)] transition-opacity duration-300",
          headerProcessosStyle && "opacity-0",
        )}
      />

      <div className="relative mx-auto flex h-[4.25rem] w-full max-w-[100rem] items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-8 md:px-12">
        <Link
          href="/#inicio"
          className="group flex shrink-0 items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          <span
            className="flex size-9 items-center justify-center rounded-md bg-white text-sm font-extrabold tracking-tight text-black shadow-sm sm:size-10 sm:text-base"
            aria-hidden
          >
            JG
          </span>
        </Link>

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
                  spy
                  offset={-72}
                  activeClass="bg-white/12 text-white"
                  className="inline-flex cursor-pointer items-center rounded-full px-3 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/8 hover:text-white lg:px-4"
                >
                  {item.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ScrollLink
            to="contato"
            smooth
            duration={800}
            offset={-72}
            className={`ml-2 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-violet-400/30 bg-[#5b4f9e] px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase shadow-[0_6px_20px_rgba(91,79,158,0.45)] transition hover:border-violet-300/45 hover:bg-[#6d5fb5] hover:shadow-[0_8px_24px_rgba(91,79,158,0.5)] ${dmSans.className}`}
          >
            Contato
          </ScrollLink>
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

      {mobileOpen && isScrolled ? (
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
    </header>
  );
}
