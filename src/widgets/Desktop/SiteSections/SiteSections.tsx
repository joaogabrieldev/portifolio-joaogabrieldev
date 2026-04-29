"use client";

import BurnTransition from "@/components/BurnTransition/BurnTransition";
import {
  AboutSection,
  ContactSection,
  FAQSection,
  HireSection,
  KnowledgeSection,
  PlansSection,
  ProcessSection,
  ProjectsSection,
} from "@/sections";

export default function SiteSections() {
  return (
    <div className="relative z-20 bg-black">
      <AboutSection />
      <KnowledgeSection />
      <ProjectsSection />
      <HireSection />
      {/*
       * Seção vazia dedicada para a transição entre Projects e Process.
       * Altura pensada para dar tempo da Burn completar no scroll.
       */}
      <section
        id="processos-transition"
        className="relative isolate h-[90vh] bg-black"
        aria-hidden
      >
        <div className="pointer-events-none sticky top-0 h-screen pt-30">
          <BurnTransition
            color="rgb(255, 255, 255)"
            transitionColor="rgb(0, 0, 0)"
            noiseScale={0.2}
            noiseIntensity={1}
            scrollSensitivity={0.1}
            baseAnimationSpeed={2}
            edgeSoftness={0.6}
            bloomIntensity={0.7}
            bloomRadius={1}
            parallaxEnabled
          />
        </div>
      </section>
      <div className="bg-white">
        <ProcessSection />
        <PlansSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
