"use client";

import { projects } from "@/assets/data/projects";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "motion/react";
import NonDxtopProjectPreview from "@/components/NonDxtopProjectPreview/NonDxtopProjectPreview";
import BackButton from "./../../components/BackButton/BackButton";

const texts = ["Portifólio", "O que eu já construí até aqui."];

const ProjectsPageContent = () => {
  return (
    <div className="absolute top-0 text-white">
      <div className="relative z-20 flex h-auto w-full min-w-dvw flex-col items-center justify-center border-white bg-[#343434]/40 pb-10 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-2 left-2 min-w-dvw md:top-8 md:left-24"
        >
          <BackButton />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-18 flex justify-center md:mt-12"
        >
          <MorphingText
            texts={texts}
            className="mt-8 mb-4 w-sm text-4xl text-white select-none sm:text-4xl md:-mt-2 md:h-24 md:w-xl md:max-w-lg md:text-5xl lg:text-[3rem]"
          />
        </motion.div>
        <div className="mt-6">
          <motion.div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((item, index) => {
              return (
                <NonDxtopProjectPreview
                  key={index}
                  url={item.url}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  icons={item.icons}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageContent;
