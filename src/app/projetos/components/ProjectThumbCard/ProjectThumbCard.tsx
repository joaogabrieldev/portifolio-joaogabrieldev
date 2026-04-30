"use client";

import type { Projects } from "@/assets/data/projects";
import { formatProjectDate } from "@/utils/formatProjectDate";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { dmSans, outfit } from "@/utils/fonts";
import "./ProjectThumbCard.css";

function toEmbedUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

type ProjectThumbCardProps = {
  project: Projects;
  index: number;
};

export function ProjectThumbCard({ project, index }: ProjectThumbCardProps) {
  const href = toEmbedUrl(project.url);
  const [day, month, year] = project.date.split("/");
  const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.25 + index * 0.08, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-xl border border-white/8 bg-white/3 backdrop-blur-[2px] transition-[border-color,box-shadow] duration-300 hover:border-white/14 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_48px_-24px_rgba(0,0,0,0.8)] ${outfit.className}`}
      aria-labelledby={`project-title-${index}`}
    >
      <div className="relative aspect-auto overflow-hidden p-3 pb-0">
        <div className="project-media-shell ring-1 ring-white/6">
          {project.projectImage ? (
            <Image
              src={project.projectImage}
              alt={`Preview do projeto ${project.title}`}
              className="project-media-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-white/50"
              aria-hidden
            >
              Sem imagem disponível
            </div>
          )}
        </div>
      </div>

      <div className={`space-y-3 p-5 pt-4 ${dmSans.className}`}>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2
            id={`project-title-${index}`}
            className="text-lg font-semibold tracking-tight text-white"
          >
            {project.title}
          </h2>
          <time
            className="shrink-0 tabular-nums text-xs font-medium text-white/35"
            dateTime={isoDate}
          >
            {formatProjectDate(project.date)}
          </time>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div
          className="flex flex-wrap items-center gap-2 text-[#94a3b8] [&_svg]:h-4 [&_svg]:w-4"
          aria-label="Tecnologias utilizadas"
        >
          {project.icons.map((icon, i) => (
            <span
              key={`${project.title}-icon-${i}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/6 bg-white/4 text-[#a5b4fc]"
            >
              {icon}
            </span>
          ))}
        </div>

        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-violet-300/90 transition-colors hover:text-violet-200 ${outfit.className}`}
        >
          Abrir projeto
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
