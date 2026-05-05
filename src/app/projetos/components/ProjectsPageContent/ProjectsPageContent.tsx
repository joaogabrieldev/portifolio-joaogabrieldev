"use client";

import Link from "next/link";
import { projects } from "@/assets/data/projects";
import { dmSans, outfit } from "@/utils/fonts";
import { motion } from "motion/react";
import BackButton from "../../../../components/BackButton/BackButton";
import Noise from "@/components/ReactBits/Noise/Noise";
import { GridPattern } from "../GridPattern/GridPattern";
import { ProjectThumbCard } from "../ProjectThumbCard/ProjectThumbCard";
import { useWindowSize } from "@/hooks/useWindowSize";
import type { ComponentPropsWithoutRef } from "react";



type GlassVariant = "subtle" | "medium" | "strong";
type GlassTheme = "dark" | "light";

interface GlassMobileBackButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: GlassVariant;
  theme?: GlassTheme;
  href: string;
  label: string;
}

const glassVariants = {
  subtle:
    "backdrop-blur-[16px] [backdrop-filter:blur(16px)] [-webkit-backdrop-filter:blur(16px)] bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.025)_100%)] border-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_4px_30px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.05)_100%)]",
  medium:
    "backdrop-blur-[18px] [backdrop-filter:blur(18px)] [-webkit-backdrop-filter:blur(18px)] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] border-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_30px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.06)_100%)]",
  strong:
    "backdrop-blur-[24px] [backdrop-filter:blur(24px)] [-webkit-backdrop-filter:blur(24px)] bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.045)_100%)] border-white/22 shadow-[inset_0_1px_0_rgba(255,255,255,0.33),0_4px_30px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.07)_100%)]",
} satisfies Record<GlassVariant, string>;

const glassThemes = {
  dark: "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]",
  light: "text-slate-900",
} satisfies Record<GlassTheme, string>;

function GlassMobileBackButton({
  variant = "medium",
  theme = "dark",
  href,
  label,
  className,
  ...rest
}: GlassMobileBackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-xs font-semibold tracking-[0.15em] uppercase transition-[background,box-shadow,transform] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-px ${glassVariants[variant]} ${glassThemes[theme]} ${dmSans.className} ${className ?? ""}`}
      {...rest}
    >
      {label}
    </Link>
  );
}

const ProjectsPageContent = () => {

  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
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
              {isMobile ? (
                <GlassMobileBackButton href="/" label="Voltar" />
              ) : (
                <BackButton href="/" />
              )}
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
