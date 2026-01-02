import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";

import DesktopProjects from "./../../components/DesktopProjects/DesktopProjects";

const texts = ["Projetos", "Uma seleção dos meus trabalhos recentes."];

const Projects = () => {
  return (
    <Section height={"auto"} id="projetos" className="pb-10">
      <motion.div className="mt-20">
        <MorphingText
          className="max-w-2xl text-center text-2xl font-bold text-white select-none sm:pb-8 sm:text-5xl md:h-24 md:pb-0 md:text-5xl lg:text-[3rem]"
          texts={texts}
        />
      </motion.div>

      <div className="flex items-center justify-center">
        <DesktopProjects />
      </div>

      <motion.div></motion.div>
    </Section>
  );
};

export default Projects;
