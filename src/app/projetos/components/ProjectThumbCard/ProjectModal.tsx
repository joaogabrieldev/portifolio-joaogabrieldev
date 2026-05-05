"use client";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Github } from "lucide-react";
import { dmSans, outfit } from "@/utils/fonts";
import { formatProjectDate } from "@/utils/formatProjectDate";
import type { Projects } from "@/assets/data/projects";

type ProjectModalProps = {
  project: Projects;
  open: boolean;
  onClose: () => void;
};

function toEmbedUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  const href = toEmbedUrl(project.url);
  const [day, month, year] = project.date.split("/");
  const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* OVERLAY */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />
        </TransitionChild>

        {/* PANEL WRAPPER */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-2"
            >
              <DialogPanel
                className={`relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e14] shadow-2xl outline-none ${dmSans.className}`}
              >
                {/* CLOSE BUTTON */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:bg-white/10 hover:text-white"
                  aria-label="Fechar modal"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* SCROLLABLE CONTENT */}
                <div className="max-h-[85vh] overflow-y-auto">
                  {/* PROJECT IMAGE */}
                  {project.projectImage && (
                    <div className="project-media-shell h-[220px] w-full rounded-none ring-0 sm:h-[260px]">
                      <Image
                        src={project.projectImage}
                        alt={`Preview do projeto ${project.title}`}
                        className="project-media-image"
                        sizes="(max-width: 768px) 100vw, 672px"
                      />
                    </div>
                  )}

                  <div className="p-6 pt-5">
                    {/* HEADER */}
                    <div className="mb-1 flex items-start justify-between gap-4 pr-8">
                      <DialogTitle
                        className={`text-xl font-semibold tracking-tight text-white ${outfit.className}`}
                      >
                        {project.title}
                      </DialogTitle>
                      <time
                        className="mt-1 shrink-0 text-xs font-medium text-white/35 tabular-nums"
                        dateTime={isoDate}
                      >
                        {formatProjectDate(project.date)}
                      </time>
                    </div>

                    {/* AUTHOR + COLLABORATORS */}
                    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p
                        className={`text-xs font-semibold tracking-[0.16em] text-violet-300/70 uppercase ${outfit.className}`}
                      >
                        João Gabriel
                      </p>
                      {project.collaborators &&
                        project.collaborators.length > 0 && (
                          <>
                            <span className="text-xs text-white/20">+</span>
                            {project.collaborators.map((c) =>
                              c.url ? (
                                <Link
                                  key={c.name}
                                  href={c.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-white/45 underline underline-offset-2 transition hover:text-white/70"
                                >
                                  {c.name}
                                </Link>
                              ) : (
                                <span
                                  key={c.name}
                                  className="text-xs text-white/45"
                                >
                                  {c.name}
                                </span>
                              ),
                            )}
                          </>
                        )}
                    </div>

                    {/* DESCRIPTION — full, sem line-clamp */}
                    <p className="mb-6 text-sm leading-relaxed text-white/65">
                      {project.description}
                    </p>

                    {/* STACK ICONS */}
                    <div
                      className="mb-8 flex flex-wrap gap-2 [&_svg]:h-4 [&_svg]:w-4"
                      aria-label="Tecnologias utilizadas"
                    >
                      {project.icons.map((icon, i) => (
                        <span
                          key={`modal-icon-${i}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 bg-white/4 text-[#a5b4fc]"
                        >
                          {icon}
                        </span>
                      ))}
                    </div>

                    {/* CTA ROW */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex h-11 items-center gap-2 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500 ${outfit.className}`}
                      >
                        Abrir projeto
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>

                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white ${outfit.className}`}
                        >
                          <Github className="h-4 w-4" />
                          Repositório
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
