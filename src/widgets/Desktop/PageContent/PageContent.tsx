import Navbar from "../../Navbar/Navbar";
import Hero from "@/sections/DesktopSections/Hero/Hero";

import About from "@/sections/DesktopSections/About/About";

import Processes from "@/sections/DesktopSections/Processes/Processes";
import Plans from "@/sections/DesktopSections/Plans/Plans";
import Projects from "@/sections/DesktopSections/Projects/Projects";
import FAQ from "@/sections/DesktopSections/FAQ/FAQ";
import Contact from "../../../sections/DesktopSections/Contact/Contact";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Processes />
        <Plans />
        <Projects />
      </main>
      <footer>
        <FAQ />
        <Contact />
      </footer>
    </div>
  );
};

export default PageContent;
