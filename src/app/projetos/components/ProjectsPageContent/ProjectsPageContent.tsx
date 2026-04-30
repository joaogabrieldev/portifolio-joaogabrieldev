"use client";

import { projects } from "@/assets/data/projects";
import { dmSans, outfit } from "@/utils/fonts";
import { motion } from "motion/react";
import BackButton from "../../../../components/BackButton/BackButton";
import Noise from "@/components/ReactBits/Noise/Noise";
import { GridPattern } from "../GridPattern/GridPattern";
import { ProjectThumbCard } from "../ProjectThumbCard/ProjectThumbCard";

const ProjectsPageContent = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #050505 0%, #0a0a0a 45%, #0c0c0c 100%)",
      }}
    >
      <GridPattern />

      <div className="relative z-10">
        <header className="border-b border-white/8 bg-black/20 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="justify-self-start"
            >
              <BackButton />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
              className={`text-center text-lg font-semibold tracking-tight text-white sm:text-xl ${outfit.className}`}
            >
              Projetos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className={`justify-self-end text-right text-xs font-medium text-white/40 tabular-nums ${dmSans.className}`}
            >
              {projects.length} projetos
            </motion.p>
          </div>
        </header>

        <main
          className="px-4 py-12 sm:px-6 lg:px-8"
          aria-label="Portfólio de projetos"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
              className="mb-14 text-center"
            >
              <p
                className={`mb-4 text-[0.65rem] font-semibold tracking-[0.28em] text-violet-300/90 uppercase sm:text-xs ${outfit.className}`}
              >
                Portfólio
              </p>
              <h2
                className={`mb-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl ${outfit.className}`}
              >
                Trabalhos em destaque
              </h2>
              <p
                className={`mx-auto max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg ${dmSans.className}`}
              >
                Interfaces e produtos web com foco em performance, clareza e
                experiência — pré-visualização ao vivo de cada deploy.
              </p>
            </motion.div>

            <div
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
              role="list"
              aria-label="Lista de projetos"
            >
              {projects.map((project, index) => (
                <div key={project.title} role="listitem">
                  <ProjectThumbCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="h-20" aria-hidden />
      </div>
    </div>
  );
};

export default ProjectsPageContent;
