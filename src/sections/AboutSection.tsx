import Link from "next/link";
import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { aboutSkillGroups } from "@/assets/data/aboutContent";
import CardHeader from "@/components/CardHeader/CardHeader";
import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import TimelineEntry from "@/components/TimelineEntry/TimelineEntry";
import LiveStatusDot from "@/pieces/LiveStatusDot/LiveStatusDot";
import { dmSans, epilogue } from "@/utils/fonts";

import { sectionShell } from "./sectionStyles";

/** Cards 2×2: borda / fundo / hover alinhados ao design editorial */
const infoCardClass =
  "group rounded-2xl border border-white/10 bg-white/4 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.35)] transition-[border-color,background-color] duration-300 ease-out hover:border-violet-400/25 hover:bg-white/[0.07] md:p-7";

/** Timeline interna: linha esquerda reage ao hover do card pai (`group`) */
const timelineRailClass =
  "border-l border-white/10 pl-5 transition-[border-left-color] duration-300 ease-out group-hover:border-l-violet-500/60";

/** Badge PT / EN */
const langChipClass =
  "inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]";

type TimelineItem = {
  period: string;
  title: ReactNode;
  subtitle: string;
  description: string;
};

type LanguageItem = {
  code: string;
  name: string;
  level: string;
};

type ContactLink = {
  index: string;
  label: string;
  display: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
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

const EXPERIENCE_ITEM: TimelineItem = {
  period: "2022 — Presente",
  title: (
    <>
      Desenvolvedor Frontend <span className="text-white/40">—</span> Freelancer
    </>
  ),
  subtitle: "Projetos independentes",
  description:
    "Landing pages e portfólios performáticos, integrações com APIs e CMS headless, com foco em acessibilidade, SEO técnico e DX de manutenção.",
};

const LANGUAGES: LanguageItem[] = [
  { code: "PT", name: "Português", level: "Nativo" },
  { code: "EN", name: "Inglês", level: "Intermediário" },
];

const CONTACT_LINKS: ContactLink[] = [
  {
    index: "01",
    label: "GitHub",
    display: "github.com/joaogabriel2r",
    href: "https://github.com/joaogabriel2r",
    Icon: SiGithub,
  },
  {
    index: "02",
    label: "LinkedIn",
    display: "linkedin.com/in/joaogabrieldev",
    href: "https://linkedin.com/in/joaogabrieldev",
    Icon: SiLinkedin,
  },
];

const EDITORIAL_EMAIL = "joaogabriel2r.profissional@hotmail.com";

const semester = new Date().getMonth() + 1 > 6 ? "02" : "01";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className={`${sectionShell} scroll-mt-6 tabular-nums`}
    >
      <div className="relative mx-auto max-w-[1200px]">
        <header className="relative">
          <div className="relative flex flex-wrap items-center justify-between gap-y-3 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-3 before:h-px before:w-6 before:shrink-0 before:bg-violet-300/60 before:content-['']">
              <span
                className={`text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
              >
                Sobre
              </span>
            </div>
            <div
              className={`hidden items-center gap-6 text-[10px] tracking-[0.22em] text-white/40 uppercase sm:flex ${epilogue.className}`}
            >
              <span>Brasília / BR</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>Ref. 0024</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>
                Ed. <span>{semester} / 2026</span>
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-12 gap-6 pt-10 pb-14 md:gap-10">
            <div className="col-span-12 md:col-span-2">
              <div
                className={`text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(167,139,250,0.35)] ${epilogue.className}`}
              >
                01
              </div>
              <div
                className={`mt-3 text-[10px] tracking-[0.22em] text-white/35 uppercase ${epilogue.className}`}
              >
                Perfil
              </div>
            </div>

            <div className="col-span-12 md:col-span-10">
              <h2
                id="sobre-heading"
                className={`text-[2.2rem] leading-[1.02] font-semibold tracking-[-0.025em] sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem] ${epilogue.className}`}
              >
                <span className="font-extrabold text-white">João Gabriel</span>
                <span className="text-white/25"> — </span>
                <span className="text-white/90 italic">desenvolvimento</span>
                <span className="text-white/90 italic"> de produtos</span>
                <span className="text-white/90 italic"> digitais</span>
                <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                  .
                </span>
              </h2>

              <div className="mt-8 grid grid-cols-12 gap-6 md:gap-10">
                <p
                  className={`col-span-12 text-base leading-relaxed text-white/70 md:col-span-7 md:text-[1.0625rem] ${dmSans.className}`}
                >
                  Desenvolvedor frontend com foco em performance e clareza.
                  Construo interfaces acessíveis, rápidas e com manutenção
                  previsível — do conceito visual ao deploy.
                </p>

                <aside className="col-span-12 md:col-span-4 md:col-start-9">
                  <div className="border-l border-white/10 pl-5">
                    <div
                      className={`text-[10px] font-semibold tracking-[0.22em] text-violet-300/90 uppercase ${epilogue.className}`}
                    >
                      Assinatura
                    </div>
                    <p
                      className={`mt-3 text-sm leading-relaxed text-white/55 ${dmSans.className}`}
                    >
                      Interfaces tratadas como artefatos editoriais — precisas,
                      legíveis, duráveis.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </header>

        <section
          aria-label="Perfil profissional"
          className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          <article className={infoCardClass} onMouseEnter={() => {}}>
            <CardHeader title="Formação Acadêmica" index="02" />
            <div className="space-y-7">
              {FORMATION.map((item) => (
                <TimelineEntry key={item.subtitle} {...item} />
              ))}
            </div>
          </article>

          <article className={`${infoCardClass} flex flex-col`}>
            <CardHeader title="Experiência Profissional" index="03" />
            <div className="flex-1">
              <div className={timelineRailClass}>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-xs font-semibold tracking-[0.18em] text-violet-300/90 uppercase ${epilogue.className}`}
                  >
                    {EXPERIENCE_ITEM.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-emerald-300/90 uppercase ${epilogue.className}`}
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    Ativo
                  </span>
                </div>
                <h3
                  className={`mt-2 text-lg font-semibold text-white ${epilogue.className}`}
                >
                  {EXPERIENCE_ITEM.title}
                </h3>
                <p
                  className={`mt-0.5 text-sm text-white/60 ${dmSans.className}`}
                >
                  {EXPERIENCE_ITEM.subtitle}
                </p>
                <p
                  className={`mt-3 text-sm leading-relaxed text-white/70 ${dmSans.className}`}
                >
                  {EXPERIENCE_ITEM.description}
                </p>
              </div>
            </div>
            <footer className="mt-7 border-t border-white/5 pt-5">
              <p className={`text-xs text-white/50 italic ${dmSans.className}`}>
                Recorte mais relevante para produtos digitais — detalhes
                completos no currículo em PDF.
              </p>
            </footer>
          </article>

          <article className={infoCardClass}>
            <CardHeader title="Idiomas" index="04" />
            <div>
              {LANGUAGES.map((lang, i) => (
                <div
                  key={lang.code}
                  className={`flex items-center justify-between ${
                    i === 0 ? "border-b border-white/5 pb-3" : "pt-3"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-semibold text-white ${epilogue.className}`}
                    >
                      {lang.name}
                    </span>
                  </div>
                  <span
                    className={`text-xs tracking-[0.18em] text-white/55 uppercase ${epilogue.className}`}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={infoCardClass}>
            <CardHeader title="Redes & Contato" index="05" />

            <div className="mb-5 flex items-center gap-3">
              <LiveStatusDot />
              <span
                className={`text-xs tracking-[0.18em] text-white/55 uppercase ${epilogue.className}`}
              >
                Disponível para projetos
              </span>
            </div>

            <ul className="space-y-3">
              {CONTACT_LINKS.map(({ index, label, display, href, Icon }) => (
                <li key={index}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link flex items-center gap-3 text-sm text-violet-300 transition-colors duration-200 hover:text-violet-200 ${dmSans.className}`}
                    aria-label={`${label}: ${display}`}
                  >
                    <Icon className="h-4 w-4 text-violet-300/80" />
                    <span>{display}</span>
                    <span className="ml-auto text-white/25 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-violet-300">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}

              <li aria-hidden className="my-1 h-px bg-white/5" />

              <li>
                <Link
                  href={`mailto:${EDITORIAL_EMAIL}`}
                  className={`flex items-center gap-3 text-xs text-white/55 transition-colors hover:text-white/80 ${dmSans.className}`}
                  aria-label={`Enviar e-mail para ${EDITORIAL_EMAIL}`}
                >
                  <Mail className="h-4 w-4 text-white/40" strokeWidth={1.8} />
                  <span className="truncate">{EDITORIAL_EMAIL}</span>
                </Link>
              </li>
            </ul>
          </article>
        </section>

        <section
          aria-labelledby="sobre-skills-heading"
          className="mt-14 border-t border-white/10 pt-12 md:mt-16 md:pt-14"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p
                className={`text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
              >
                Stack & ferramentas
              </p>
              <h2
                id="sobre-skills-heading"
                className={`mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl ${epilogue.className}`}
              >
                Conhecimentos
              </h2>
            </div>
            <p className={`max-w-md text-sm text-white/50 ${dmSans.className}`}>
              Níveis indicativos (0–100%) com base em projetos reais e rotina de
              uso.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {aboutSkillGroups.map((group, groupIndex) => {
              const baseDelay =
                aboutSkillGroups
                  .slice(0, groupIndex)
                  .reduce((acc, g) => acc + g.skills.length, 0) * 0.035;

              return (
                <article key={group.id} className={infoCardClass}>
                  <h3
                    className={`text-xs font-semibold tracking-[0.18em] text-violet-300/90 uppercase ${epilogue.className}`}
                  >
                    {group.label}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {group.skills.map((skill, skillIndex) => {
                      const Icon = skill.Icon;
                      const delay = baseDelay + skillIndex * 0.035;

                      return (
                        <li key={`${group.id}-${skill.name}`}>
                          <div className="flex items-center gap-2.5">
                            {skill.iconUrl ? (
                              // eslint-disable-next-line @next/next/no-img-element -- URLs externas e ícones locais mistos
                              <img
                                src={skill.iconUrl}
                                alt=""
                                width={18}
                                height={18}
                                className="size-[18px] shrink-0 object-contain"
                              />
                            ) : (
                              <Icon
                                className="size-[18px] shrink-0"
                                style={
                                  skill.iconColor
                                    ? { color: skill.iconColor }
                                    : undefined
                                }
                                aria-hidden
                              />
                            )}
                            <span
                              className={`min-w-0 flex-1 truncate text-sm font-medium text-white/90 ${dmSans.className}`}
                            >
                              {skill.name}
                            </span>
                            <span
                              className={`shrink-0 text-[12px] font-semibold text-white/55 tabular-nums sm:text-base ${epilogue.className}`}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          <SkillProgressBar
                            value={skill.level}
                            delay={Math.min(delay, 1.2)}
                            className="mt-2"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <div
          className={`mt-14 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.22em] text-white/40 uppercase ${epilogue.className}`}
        >
          <span>§ About</span>
          <span>v. 2.0.0</span>
        </div>
      </div>
    </section>
  );
}
