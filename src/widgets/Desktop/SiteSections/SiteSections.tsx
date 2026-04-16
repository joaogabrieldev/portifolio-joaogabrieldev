"use client";

import {
  AboutSection,
  ContactSection,
  FAQSection,
  PlansSection,
  ProcessSection,
  ProjectsSection,
} from "@/sections";

export default function SiteSections() {
  return (
    <div className="relative z-20 bg-[#050505]">
      <AboutSection />
      <ProcessSection />
      <PlansSection />
      <ProjectsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
