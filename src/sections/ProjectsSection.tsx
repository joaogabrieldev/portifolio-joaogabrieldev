import Link from "next/link";

import { projects } from "@/assets/data/projects";
import { dmSans, outfit } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className={`${sectionShell} scroll-mt-6`}
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
          {projects.map((project) => (
            <li key={project.title}>
              <Link
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.35)] transition hover:border-violet-400/35 hover:bg-white/[0.07]"
              >
                <span
                  className={`text-lg font-semibold text-white group-hover:text-violet-200 ${outfit.className}`}
                >
                  {project.title}
                </span>
                <span
                  className={`mt-1 text-xs text-white/45 ${dmSans.className}`}
                >
                  {project.date}
                </span>
                <p
                  className={`mt-4 flex-1 text-sm leading-relaxed text-white/72 ${dmSans.className}`}
                >
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-violet-200/90">
                  {project.icons.map((icon, i) => (
                    <span key={i} className="text-lg [&_svg]:block">
                      {icon}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
