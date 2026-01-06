import { projects } from "@/assets/data/projects";
import { useWindowSize } from "@/hooks/useWindowSize";
import Carousel from "@/widgets/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { motion } from "motion/react";

const OPTIONS: EmblaOptionsType = { align: "center" };
// const SLIDE_COUNT = 6;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const DesktopProjects = () => {
  return (
    <motion.div className={`max-w-8xl rounded-2 mt-10 w-full`}>
      <Carousel slides={projects} options={OPTIONS} />
    </motion.div>
  );
};

export default DesktopProjects;
