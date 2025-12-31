import Navbar from "../Navbar/Navbar";
import Hero from "../../Sections/Hero/Hero";

import About from "../../Sections/About/About";

import RightBottomGradient from "./../Gradients/RightBottomGradient/RightBottomGradient";
import Processes from "../../Sections/Processes/Processes";
import Plans from "@/Sections/Plans/Plans";
import Projects from "./../../Sections/Projects/Projects";
import FAQ from "./../../Sections/FAQ/FAQ";

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
      </footer>
    </div>
  );
};

export default PageContent;
