import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";

import DesktopProjects from "../../components/Desktop/DesktopProjects/DesktopProjects";
import MobileProjects from "@/components/Mobile/MobileProjects/MobileProjects";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
import { projects } from "@/assets/data/projects";
import Link from "next/link";

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

  const isMobileButton =
    width > 1200
      ? "rounded-md border-3 border-[#7c7abf99] px-6 py-2 transition duration-200 ease-out hover:bg-[#7c7abf99]"
      : "rounded-md border-2 border-[#7c7abf99] bg-[#7c7abf99] px-6 py-2";

  return (
    <Section height={"auto"} id="projetos" className="pb-10">
      <motion.div className="mt-20">
        <MorphingText
          className="max-w-xl text-center text-4xl font-bold text-white select-none sm:pb-8 sm:text-5xl md:h-24 md:pb-0 md:text-5xl lg:text-[3rem]"
          texts={texts}
        />
      </motion.div>

      <div>{width > 1200 ? <DesktopProjects /> : <MobileProjects />}</div>
      <div className="mt-6 flex items-center justify-center border-2 border-white">
        <Link href={"/projetos"} className={`${isMobileButton}`}>
          Ver todos os Projetos!
        </Link>
      </div>
    </Section>
  );
};

export default Projects;
