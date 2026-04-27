"use client";

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
      <ProcessSection />
      <PlansSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
