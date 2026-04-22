import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import { dmSans, epilogue } from "@/utils/fonts";
import { aboutSkillGroups } from "../assets/data/aboutContent";
import { sectionShell } from "./sectionStyles";

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

const FORMATION: TimelineItem[] = [
  {
    period: "2023 — Atual",
    title: "Engenharia de Software",
    subtitle: "UniCEUB",
    description:
      "Ênfase em desenvolvimento web, arquitetura de software e boas práticas de engenharia.",
  },
  {
    period: "2020 — 2022",
    title: "Técnico em Informática",
    subtitle: "Formação técnica",
    description:
      "Base em lógica, redes e fundamentos de programação, aplicada a projetos práticos.",
  },
];

const EXPERIENCE: TimelineItem[] = [
  {
    period: "2022 — Presente",
    title: "Desenvolvedor Frontend — Freelancer",
    subtitle: "Projetos independentes",
    description:
      "Landing pages e portfólios performáticos, integrações com APIs e CMS headless, com foco em acessibilidade, SEO técnico e DX de manutenção.",
  },
];

function TimelineItemRow({ period, title, subtitle, description }: TimelineItem) {
  return (
    <li className="flex flex-col gap-2 border-l border-white/10 pl-5">
      <span
        className={`text-xs font-semibold tracking-[0.18em] text-violet-300/90 uppercase ${epilogue.className}`}
      >
        {period}
      </span>
      <h4
        className={`text-base font-semibold text-white sm:text-lg ${epilogue.className}`}
      >
        {title}
      </h4>
      <span className={`text-sm text-white/60 ${dmSans.className}`}>
        {subtitle}
      </span>
      <p
        className={`mt-1 text-sm leading-relaxed text-white/70 ${dmSans.className}`}
      >
        {description}
      </p>
    </li>
  );
}

type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.35)]">
      <h3
        className={`mb-5 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function AboutSection() {
  const largeGroups = useMemo(
    () => aboutSkillGroups.filter((group) => group.skills.length > 5),
    [],
  );

  const normalGroups = useMemo(
    () => aboutSkillGroups.filter((group) => group.skills.length <= 5),
    [],
  );

  return (
    <section
      id="sobre"
      className={`${sectionShell} scroll-mt-6`}
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
        >
          Sobre
        </p>
        <h2
          id="sobre-heading"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${epilogue.className}`}
        >
          João Gabriel — desenvolvimento de produtos digitais.
        </h2>
        <p
          className={`mt-4 max-w-2xl text-base text-white/75 sm:text-lg ${dmSans.className}`}
        >
          Desenvolvedor frontend com foco em{" "}
          <span className="font-semibold text-white">performance</span> e{" "}
          <span className="font-semibold text-white">clareza</span>. Construo
          interfaces acessíveis, rápidas e com manutenção previsível — do
          conceito visual ao deploy.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <InfoCard title="Formação Acadêmica">
            <ul className="flex flex-col gap-6">
              {FORMATION.map((item) => (
                <TimelineItemRow key={item.title} {...item} />
              ))}
            </ul>
          </InfoCard>

          <InfoCard title="Experiência Profissional">
            <ul className="flex flex-col gap-6">
              {EXPERIENCE.map((item) => (
                <TimelineItemRow key={item.title} {...item} />
              ))}
            </ul>
            <p
              className={`mt-6 text-xs leading-relaxed text-white/50 ${dmSans.className}`}
            >
              Recorte mais relevante para produtos digitais — detalhes completos
              no currículo em PDF.
            </p>
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <InfoCard title="Idiomas">
            <ul className={`flex flex-col gap-3 text-sm ${dmSans.className}`}>
              <li className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
                <span className="font-semibold text-white">Português</span>
                <span
                  className={`text-xs tracking-[0.18em] text-white/55 uppercase ${epilogue.className}`}
                >
                  Nativo
                </span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="font-semibold text-white">Inglês</span>
                <span
                  className={`text-xs tracking-[0.18em] text-white/55 uppercase ${epilogue.className}`}
                >
                  Intermediário
                </span>
              </li>
            </ul>
          </InfoCard>

          <InfoCard title="Redes & Contato">
            <ul className={`flex flex-col gap-3 text-sm ${dmSans.className}`}>
              <li>
                <Link
                  href="https://github.com/joaogabriel2r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 transition-colors duration-200 hover:text-violet-200"
                >
                  github.com/joaogabriel2r
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/joaogabrieldev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-300 transition-colors duration-200 hover:text-violet-200"
                >
                  linkedin.com/in/joaogabrieldev
                </Link>
              </li>
              <li className="text-xs text-white/55">
                joaogabriel2r.profissional@hotmail.com
              </li>
            </ul>
          </InfoCard>
        </div>

        <div className="mt-20">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
          >
            Stack
          </p>
          <h3
            className={`text-2xl font-semibold tracking-tight sm:text-3xl ${epilogue.className}`}
          >
            Stack principal.
          </h3>
          <p
            className={`mt-2 max-w-2xl text-sm text-white/60 ${dmSans.className}`}
          >
            Níveis indicam familiaridade prática no dia a dia — não substituem
            certificações nem métricas de projeto.
          </p>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="grid w-full min-w-0 flex-1 gap-x-10 gap-y-10 sm:gap-y-12 lg:grid-cols-2">
              {normalGroups.map((group, groupIndex) => (
                <section
                  key={group.id}
                  aria-label={group.label}
                  className="space-y-5"
                >
                  <h4
                    className={`text-xs font-semibold tracking-[0.18em] text-white/60 uppercase ${epilogue.className}`}
                  >
                    {group.label}
                  </h4>
                  <ul className="space-y-6" aria-label={group.label}>
                    {group.skills.map(
                      ({ name, Icon, iconColor, iconUrl, level }, index) => (
                        <li key={name} className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <span
                              className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-[1.35rem]"
                              aria-hidden
                              style={{ color: iconColor ?? "#e5e7eb" }}
                            >
                              {iconUrl ? (
                                <Image
                                  src={iconUrl}
                                  alt=""
                                  width={28}
                                  height={28}
                                  unoptimized={
                                    iconUrl.endsWith(".svg") ||
                                    iconUrl.includes(".svg?")
                                  }
                                  className="size-7 rounded-sm object-contain"
                                />
                              ) : (
                                <Icon className="size-[1.35rem] shrink-0" />
                              )}
                            </span>
                            <span
                              className={`text-sm font-medium text-white/92 sm:text-base ${epilogue.className}`}
                            >
                              {name}
                            </span>
                            <span
                              className={`ml-auto text-xs text-white/50 tabular-nums sm:text-sm ${dmSans.className}`}
                            >
                              {level}%
                            </span>
                          </div>
                          <SkillProgressBar
                            value={level}
                            delay={groupIndex * 0.12 + index * 0.06}
                          />
                        </li>
                      ),
                    )}
                  </ul>
                </section>
              ))}
            </div>
            <div className="flex w-full min-w-0 flex-1 flex-col gap-12 lg:max-w-[min(100%,28rem)] xl:max-w-none xl:flex-[0.6]">
              {largeGroups.map((group, groupIndex) => (
                <section
                  key={group.id}
                  aria-label={group.label}
                  className="space-y-5"
                >
                  <h4
                    className={`text-xs font-semibold tracking-[0.18em] text-white/60 uppercase ${epilogue.className}`}
                  >
                    {group.label}
                  </h4>
                  <ul className="space-y-6" aria-label={group.label}>
                    {group.skills.map(
                      ({ name, Icon, iconColor, iconUrl, level }, index) => (
                        <li key={name} className="grid gap-3">
                          <div className="flex items-center gap-3">
                            <span
                              className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10 text-[1.35rem]"
                              aria-hidden
                              style={{ color: iconColor ?? "#e5e7eb" }}
                            >
                              {iconUrl ? (
                                <Image
                                  src={iconUrl}
                                  alt=""
                                  width={28}
                                  height={28}
                                  unoptimized={
                                    iconUrl.endsWith(".svg") ||
                                    iconUrl.includes(".svg?")
                                  }
                                  className="size-7 rounded-sm object-contain"
                                />
                              ) : (
                                <Icon className="size-[1.35rem] shrink-0" />
                              )}
                            </span>
                            <span
                              className={`text-sm font-medium text-white/92 sm:text-base ${epilogue.className}`}
                            >
                              {name}
                            </span>
                            <span
                              className={`ml-auto text-xs text-white/50 tabular-nums sm:text-sm ${dmSans.className}`}
                            >
                              {level}%
                            </span>
                          </div>
                          <SkillProgressBar
                            value={level}
                            delay={groupIndex * 0.12 + index * 0.06}
                          />
                        </li>
                      ),
                    )}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
