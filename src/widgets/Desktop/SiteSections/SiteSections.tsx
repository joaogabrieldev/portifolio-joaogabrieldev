"use client";

import BurnTransition from "@/components/BurnTransition/BurnTransition";
import {
  AboutSection,
  ContactSection,
  FAQSection,
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
      {/*
       * Mesma montagem do Framer original: o BurnTransition é um overlay
       * absoluto colado no topo da seção que vamos "revelar" (Process). A
       * cortina casa com o bg-black, então só aparecem a linha de queima e
       * o bloom enquanto o usuário rola da ProjectsSection para cá.
       */}
      <section
        className="relative isolate"
        style={{ overflow: "visible" }}
        aria-hidden={false}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-screen">
          <BurnTransition
            color="rgb(0, 0, 0)"
            transitionColor="rgb(255, 145, 60)"
            noiseScale={0.1}
            noiseIntensity={1}
            scrollSensitivity={0.1}
            baseAnimationSpeed={1}
            edgeSoftness={0.5}
            bloomIntensity={0.4}
            bloomRadius={1}
            parallaxEnabled
          />
        </div>
        <ProcessSection />
      </section>
      <PlansSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
