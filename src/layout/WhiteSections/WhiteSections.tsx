import { FooterSection, ProcessSection, SchedulingSection } from "@/sections";

const WhiteSections = () => {
  return (
    <div className="relative">
      <ProcessSection />
      <div className="bg-white">
        <SchedulingSection />
        <FooterSection />
        {/* <FAQSection /> */}
      </div>
    </div>
  );
};

export default WhiteSections;
