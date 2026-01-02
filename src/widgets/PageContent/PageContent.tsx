import Navbar from "../Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";

import About from "@/sections/About/About";

import Processes from "@/sections/Processes/Processes";
import Plans from "@/sections/Plans/Plans";
import Projects from "@/sections/Projects/Projects";
import FAQ from "@/sections/FAQ/FAQ";

const PageContent = () => {
  return (
    <div className="absolute top-0 left-0 z-10 h-full w-full overflow-x-hidden">
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
      </footer>
    </div>
  );
};

export default PageContent;
