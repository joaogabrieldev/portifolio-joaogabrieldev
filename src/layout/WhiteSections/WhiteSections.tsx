import { ProcessSection, SchedulingSection } from "@/sections";
import FooterSection from "@/layout/FooterSection/FooterSection";

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
