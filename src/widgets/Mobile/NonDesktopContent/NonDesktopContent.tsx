import NonDesktopFAQ from "@/components/Mobile/NonDesktopFAQ/NonDesktopFAQ";
import Processes from "@/sections/DesktopSections/Processes/Processes";
import NonDesktopAbout from "@/sections/NonDesktopSections/NonDesktopAbout/NonDesktopAbout";
import NonDesktopHero from "@/sections/NonDesktopSections/NonDesktopHero/NonDesktopHero";
import NonDesktopPlans from "@/sections/NonDesktopSections/NonDesktopPlans/NonDesktopPlans";
import NonDesktopProcesses from "@/sections/NonDesktopSections/NonDesktopProcesses/NonDesktopProcesses";
import NonDesktopProjects from "@/sections/NonDesktopSections/NonDesktopProjects/NonDesktopProjects";
import Navbar from "@/widgets/Navbar/Navbar";
import React from "react";
import NonDesktopFAQSection from "../NonDesktopFAQSection/NonDesktopFAQSection";
import NonDesktopContact from "@/sections/NonDesktopSections/NonDesktopContact/NonDesktopContact";
import InformationFooter from "@/components/InformationFooter/InformationFooter";

const NonDesktopContent = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <NonDesktopHero />
        <NonDesktopAbout />
        <NonDesktopProcesses />
        <NonDesktopPlans />
        <NonDesktopProjects />
      </main>
      <footer>
        <NonDesktopFAQSection />
        <NonDesktopContact />
        <InformationFooter />
      </footer>
    </div>
  );
};

export default NonDesktopContent;
