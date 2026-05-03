import {
  ContactSection,
  FAQSection,
  PlansSection,
  ProcessSection,
} from "@/sections";

const WhiteSections = () => {
  return (
    <div className="relative bg-white">
      <ProcessSection />
      <PlansSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default WhiteSections;
