"use client";

import { useGSAP } from "@gsap/react";
import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap-client";
import { PaletteRootSync } from "@/providers/PaletteRootSync";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * Scroll suave global (Lenis via `lenis/react`, sucessor do `@studio-freight/react-lenis`)
 * + sincronização com GSAP ScrollTrigger no ticker.
 */
function LenisScrollTriggerBridge() {
  const lenis = useLenis();

  useGSAP(
    () => {
      if (!lenis) {
        return;
      }

      const onScroll = (): void => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", onScroll);

      const tickerFn = (time: number): void => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      /**
       * Com `ReactLenis root`, o Lenis usa `window` como wrapper e aplica scroll
       * via `window.scrollTo`. Proxy em `documentElement` desincroniza o pin do
       * ScrollTrigger e pode sobrepor seções anteriores (ex.: Sobre + Processos).
       */
      const scroller: typeof window = window;

      ScrollTrigger.scrollerProxy(scroller, {
        scrollTop(value?: number) {
          if (arguments.length) {
            lenis.scrollTo(value ?? 0, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            bottom: window.innerHeight,
            right: window.innerWidth,
          };
        },
        scrollHeight: () =>
          Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
          ),
        pinType: document.documentElement.style.transform
          ? "transform"
          : "fixed",
      });

      ScrollTrigger.defaults({ scroller });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        gsap.ticker.remove(tickerFn);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.off("scroll", onScroll);
      };
    },
    { dependencies: [lenis] },
  );

  return null;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const isProjectsPage = pathname?.startsWith("/projetos");

  return (
    <ReactLenis
      root
      options={{
        // Em /projetos, scroll mais leve e responsivo.
        lerp: isProjectsPage ? 0.08 : 0.03,
        duration: isProjectsPage ? 1.2 : 2.6,
        wheelMultiplier: isProjectsPage ? 1 : 0.8,
        touchMultiplier: isProjectsPage ? 1 : 0.9,
        smoothWheel: true,
        autoRaf: false,
      }}
    >
      <LenisScrollTriggerBridge />
      <PaletteRootSync />
      {children}
    </ReactLenis>
  );
}
