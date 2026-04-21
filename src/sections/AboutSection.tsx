import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import { dmSans, jetbrainsMono, outfit, syne } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { aboutSkillGroups } from "../assets/data/aboutContent";
import portraitImg from "@/assets/images/hero-2-alpha_b&w.png";

type InfoBlockProps = {
  label: string;
  children: React.ReactNode;
};

function InfoBlockHeading({ label }: { label: string }) {
  return (
    <h3
      className={`${outfit.className} mb-5 text-xs font-bold tracking-[0.2em] text-white uppercase`}
    >
      {label}
    </h3>
  );
}

function InfoBlock({ label, children }: InfoBlockProps) {
  return (
    <div>
      <InfoBlockHeading label={label} />
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
      className="relative scroll-mt-6 border-t border-white/10 bg-black text-white"
      aria-labelledby="sobre-heading"
    >
      {/* Split editorial: retrato à esquerda, conteúdo à direita */}
      <div className="grid w-full grid-cols-1 lg:grid-cols-[40%_60%]">
        {/* Coluna esquerda: retrato */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#1c1b1b] lg:aspect-auto lg:min-h-[calc(100vh-4rem)]">
          <Image
            src={portraitImg}
            alt="Retrato em preto e branco de João Gabriel em perfil"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center mix-blend-luminosity grayscale"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-violet-700/30 via-transparent to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0e0e0e] via-[#0e0e0e]/60 to-transparent lg:hidden"
            aria-hidden
          />
        </div>

        {/* Coluna direita: conteúdo editorial */}
        <div className="relative flex flex-col justify-center overflow-hidden bg-[#0e0e0e] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 xl:px-24">
          {/* Watermark ambiente "JG" */}
          <div
            className={`${syne.className} pointer-events-none absolute -right-6 top-24 select-none text-[18rem] leading-none font-black tracking-tighter text-white/[0.035] sm:text-[22rem] lg:text-[26rem] xl:text-[30rem]`}
            aria-hidden
          >
            JG
          </div>

          {/* Cabeçalho */}
          <div className="relative z-10 max-w-4xl">
            <span
              className={`${jetbrainsMono.className} mb-4 block text-xs tracking-[0.2em] text-violet-400 uppercase`}
            >
              Sobre
            </span>
            <h2
              id="sobre-heading"
              className={`${syne.className} mb-6 text-5xl leading-[0.9] font-black tracking-tighter break-words text-white uppercase sm:text-6xl lg:text-7xl xl:text-[5.25rem]`}
            >
              João Gabriel
            </h2>
            <p
              className={`${dmSans.className} max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl`}
            >
              desenvolvimento de produtos digitais com foco em{" "}
              <span className="border-b-2 border-violet-500 pb-1 font-medium text-white">
                performance
              </span>{" "}
              e clareza.
            </p>
            <div
              className="my-12 h-0.5 w-[60px] bg-violet-500 lg:my-16"
              aria-hidden
            />
          </div>

          {/* Grid assimétrico de informação */}
          <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-10 md:gap-y-16">
            {/* Col A: Formação */}
            <div className="md:col-span-5">
              <InfoBlock label="Formação Acadêmica">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${jetbrainsMono.className} text-xs tracking-wider text-violet-300`}
                    >
                      2023 — ATUAL
                    </span>
                    <h4
                      className={`${outfit.className} text-base font-bold text-white sm:text-lg`}
                    >
                      Engenharia de Software — UniCEUB
                    </h4>
                    <p
                      className={`${dmSans.className} text-sm leading-relaxed text-white/60`}
                    >
                      Ênfase em desenvolvimento web, arquitetura de software e
                      boas práticas de engenharia.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span
                      className={`${jetbrainsMono.className} text-xs tracking-wider text-violet-300`}
                    >
                      2020 — 2022
                    </span>
                    <h4
                      className={`${outfit.className} text-base font-bold text-white sm:text-lg`}
                    >
                      Técnico em Informática
                    </h4>
                    <p
                      className={`${dmSans.className} text-sm leading-relaxed text-white/60`}
                    >
                      Base em lógica, redes e fundamentos de programação,
                      aplicada a projetos práticos.
                    </p>
                  </div>
                </div>
              </InfoBlock>
            </div>

            {/* Col B + C: agrupamento à direita */}
            <div className="flex flex-col gap-12 md:col-span-7 md:gap-14">
              {/* Idiomas + Redes */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <InfoBlock label="Idiomas">
                  <ul className={`${dmSans.className} flex flex-col gap-3 text-sm`}>
                    <li className="flex items-center justify-between gap-4">
                      <span className="font-bold text-white">Português</span>
                      <span
                        className={`${jetbrainsMono.className} text-xs text-white/55`}
                      >
                        Nativo
                      </span>
                    </li>
                    <li className="flex items-center justify-between gap-4">
                      <span className="font-bold text-white">Inglês</span>
                      <span
                        className={`${jetbrainsMono.className} text-xs text-white/55`}
                      >
                        Intermediário
                      </span>
                    </li>
                  </ul>
                </InfoBlock>

                <InfoBlock label="Redes">
                  <ul
                    className={`${jetbrainsMono.className} flex flex-col gap-3 text-sm`}
                  >
                    <li>
                      <Link
                        href="https://github.com/joaogabriel2r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-300 transition-colors duration-300 hover:text-violet-200"
                      >
                        github.com/joaogabriel2r
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/joaogabrieldev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-300 transition-colors duration-300 hover:text-violet-200"
                      >
                        linkedin.com/in/joaogabrieldev
                      </Link>
                    </li>
                    <li className="text-xs text-white/55">
                      joaogabriel2r.profissional@hotmail.com
                    </li>
                  </ul>
                </InfoBlock>
              </div>

              {/* Experiência Profissional (slab elevado) */}
              <div className="translate-y-2 bg-[#2a2a2a] p-8 shadow-[0_0_60px_rgba(229,226,225,0.06)] sm:p-10">
                <InfoBlockHeading label="Experiência Profissional" />
                <div className="flex flex-col gap-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-baseline">
                      <h4
                        className={`${outfit.className} text-lg font-bold text-white sm:text-xl`}
                      >
                        Desenvolvedor Frontend / Freelancer
                      </h4>
                      <span
                        className={`${jetbrainsMono.className} text-xs tracking-wider text-violet-300 sm:text-sm`}
                      >
                        2022 — PRESENTE
                      </span>
                    </div>
                    <span
                      className={`${dmSans.className} text-sm font-bold text-white/80`}
                    >
                      Projetos independentes
                    </span>
                    <ul
                      className={`${dmSans.className} mt-2 flex flex-col gap-2 text-sm leading-relaxed text-white/70`}
                    >
                      <li className="flex gap-4">
                        <span className="text-violet-400">—</span>
                        Criação de landing pages e portfólios performáticos.
                      </li>
                      <li className="flex gap-4">
                        <span className="text-violet-400">—</span>
                        Integração com APIs e CMS headless.
                      </li>
                      <li className="flex gap-4">
                        <span className="text-violet-400">—</span>
                        Foco em acessibilidade, SEO técnico e DX de manutenção.
                      </li>
                    </ul>
                  </div>

                  <p
                    className={`${dmSans.className} text-xs leading-relaxed text-white/50`}
                  >
                    Essa página resume o recorte mais relevante para produtos
                    digitais — detalhes completos estão disponíveis no currículo
                    em PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stack principal */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 md:px-12">
        <h3
          className={`${outfit.className} text-lg font-semibold tracking-tight text-white sm:text-xl`}
        >
          Stack principal
        </h3>
        <p
          className={`${dmSans.className} mt-2 max-w-2xl text-sm text-white/55`}
        >
          Níveis indicam familiaridade prática no dia a dia — não substituem
          certificações nem métricas de projeto.
        </p>

        <div className="mt-8 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-12">
          <div className="grid w-full min-w-0 flex-1 gap-x-10 gap-y-10 sm:gap-y-12 lg:grid-cols-2">
            {normalGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                aria-label={group.label}
                className="space-y-5"
              >
                <h4 className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                  {group.label}
                </h4>
                <ul className="space-y-6" aria-label={group.label}>
                  {group.skills.map(
                    ({ name, Icon, iconColor, iconUrl, level }, index) => (
                      <li key={name} className="grid gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-800/60 text-[1.35rem]"
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
                          <span className="text-sm font-medium text-white/92 sm:text-base">
                            {name}
                          </span>
                          <span className="ml-auto text-xs text-white/45 tabular-nums sm:text-sm">
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
                <h4 className="text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
                  {group.label}
                </h4>
                <ul className="space-y-6" aria-label={group.label}>
                  {group.skills.map(
                    ({ name, Icon, iconColor, iconUrl, level }, index) => (
                      <li key={name} className="grid gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gray-800/60 text-[1.35rem]"
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
                          <span className="text-sm font-medium text-white/92 sm:text-base">
                            {name}
                          </span>
                          <span className="ml-auto text-xs text-white/45 tabular-nums sm:text-sm">
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
    </section>
  );
}
