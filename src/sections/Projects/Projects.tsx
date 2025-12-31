import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";

import LivePreview from "../../components/ProjectPreview/ProjectPreview";
import Carousel from "@/widgets/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { projects } from "@/assets/data/projects";

const texts = ["Projetos", "Uma seleção dos meus trabalhos recentes."];

const OPTIONS: EmblaOptionsType = { align: "center" };
// const SLIDE_COUNT = 6;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Projects = () => {
  return (
    <Section height={"auto"} id="projetos" className="pb-10">
      <motion.div className="mt-20">
        <MorphingText
          className="max-w-2xl text-center text-2xl font-bold text-white select-none sm:pb-8 sm:text-5xl md:h-24 md:pb-0 md:text-5xl lg:text-[3rem]"
          texts={texts}
        />
      </motion.div>
      <div className="flex justify-center">
        <motion.div className="mt-10 w-full max-w-8xl border-2 border-white px-6">
          <Carousel slides={projects} options={OPTIONS} />
        </motion.div>
      </div>
      <motion.div></motion.div>
    </Section>
  );
};

export default Projects;
