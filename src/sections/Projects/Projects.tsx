import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";

import DesktopProjects from "../../components/Desktop/DesktopProjects/DesktopProjects";
import MobileProjects from "@/components/Mobile/MobileProjects/MobileProjects";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";

const texts = ["Projetos", "Uma seleção dos meus trabalhos recentes."];

const Projects = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted((prev) => !prev);
  }, []);

  if (!isMounted) {
    return (
      <Section height={"auto"} id="projetos" className="pb-10">
        <div className="opacity-0">Carregando projetos...</div>
      </Section>
    );
  }

  return (
    <Section height={"auto"} id="projetos" className="pb-10">
      <motion.div className="mt-20">
        <MorphingText
          className="max-w-2xl text-center text-2xl font-bold text-white select-none sm:pb-8 sm:text-5xl md:h-24 md:pb-0 md:text-5xl lg:text-[3rem]"
          texts={texts}
        />
      </motion.div>

      <div>{width > 1200 ? <DesktopProjects /> : <MobileProjects />}</div>
    </Section>
  );
};

export default Projects;
