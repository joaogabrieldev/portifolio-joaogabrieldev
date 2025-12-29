import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";

const texts = ["Projetos", "Uma seleção dos meus trabalhos recentes."];

const Projects = () => {
  return (
    <Section height={"screen"} id="projetos">
      <motion.div className="mt-20">
        <MorphingText
          className="max-w-2xl text-center text-2xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
          texts={texts}
        />
      </motion.div>
      <div></div>
    </Section>
  );
};

export default Projects;
