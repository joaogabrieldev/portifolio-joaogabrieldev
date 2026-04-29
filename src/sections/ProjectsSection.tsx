import Link from "next/link";

import { projects } from "@/assets/data/projects";
import { dmSans, outfit } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { HoverButton } from "@/components/ui/hover-button";
import { ShinyButton } from "@/components/ui/shiny-button";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className={`scroll-mt-6 bg-black px-4 py-20 text-white sm:px-8 md:px-12`}
      aria-labelledby="projetos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
        >
          Projetos
        </p>
        <h2
          id="projetos-heading"
          className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
        >
          Seleção de trabalhos recentes.
        </h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
        <div className="mt-8 lg:mt-12 flex items-center justify-center">
          <ShinyButton>
            <Link href="/projetos" className="text-white">
              Ver todos os projetos
            </Link>
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
