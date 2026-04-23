"use client";

import SectionsHeader from "@/components/SectionsHeader/SectionsHeader";
import { useScrolledPastHero } from "@/hooks/useScrolledPastHero";
import Hero from "@/layout/Hero";
import SiteSections from "@/widgets/Desktop/SiteSections/SiteSections";
import { AnimatePresence, LayoutGroup } from "motion/react";

const PageContent = () => {
  const scrolled = useScrolledPastHero();

  return (
    <div className="relative z-10 min-h-dvh w-full">
      <main className="min-h-dvh">
        <LayoutGroup id="global-header">
          <Hero />
          <AnimatePresence initial={false}>
            {scrolled ? <SectionsHeader key="sections-header" /> : null}
          </AnimatePresence>
        </LayoutGroup>
        <SiteSections />
      </main>
    </div>
  );
};

export default PageContent;
