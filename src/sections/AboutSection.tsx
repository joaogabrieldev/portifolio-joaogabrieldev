import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import { dmSans, outfit } from "@/utils/fonts";
import { aboutSkillGroups } from "./aboutContent";
import { sectionShell } from "./sectionStyles";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className={`${sectionShell} scroll-mt-6`}
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
        >
          Sobre
        </p>
        <h2
          id="sobre-heading"
          className={`max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${outfit.className}`}
        >
          João Gabriel — desenvolvimento de produtos digitais com foco em
          performance e clareza.
        </h2>

        <div
          className={`mt-10 grid gap-10 border-t border-white/8 pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-16 ${dmSans.className}`}
        >
          {/* Coluna esquerda: formação, idiomas, redes */}
          <div className="space-y-8">
            <section aria-label="Formação acadêmica" className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                Formação acadêmica
              </h3>

              <div className="space-y-4 text-sm text-white/80">
                <div className="grid gap-1 sm:grid-cols-[minmax(0,82px)_minmax(0,1fr)] sm:gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                    2023 — atual
                  </p>
                  <div>
                    <p className="font-medium text-white/92">
                      Engenharia de Software — UniCEUB
                    </p>
                    <p className="text-xs text-white/60">
                      Ênfase em desenvolvimento web, arquitetura de software e
                      boas práticas de engenharia.
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-white/[0.06]" />

                <div className="grid gap-1 sm:grid-cols-[minmax(0,82px)_minmax(0,1fr)] sm:gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                    2020 — 2022
                  </p>
                  <div>
                    <p className="font-medium text-white/92">
                      Técnico em Informática
                    </p>
                    <p className="text-xs text-white/60">
                      Base em lógica, redes e fundamentos de programação,
                      aplicada a projetos práticos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              aria-label="Idiomas e redes"
              className="grid gap-6 sm:grid-cols-2"
            >
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Idiomas
                </h3>
                <ul className="space-y-1.5 text-sm text-white/80">
                  <li className="flex items-baseline justify-between gap-4">
                    <span>Português</span>
                    <span className="text-xs text-white/55">Nativo</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-4">
                    <span>Inglês</span>
                    <span className="text-xs text-white/55">
                      Intermediário (leitura e conversação)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  Redes
                </h3>
                <ul className="space-y-1.5 text-sm text-white/80">
                  <li>
                    <span className="text-white/60">LinkedIn</span>
                    <span className="ml-2 text-white/90">
                      /joaogabrieldev
                    </span>
                  </li>
                  <li>
                    <span className="text-white/60">GitHub</span>
                    <span className="ml-2 text-white/90">
                      /joaogabriel2r
                    </span>
                  </li>
                  <li className="text-xs text-white/60">
                    joaogabriel2r.profissional@hotmail.com
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Coluna direita: experiência / resumo profissional */}
          <aside
            aria-label="Resumo profissional"
            className="space-y-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-sm"
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              Experiência profissional
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-white/80">
              <div className="grid gap-1 sm:grid-cols-[minmax(0,82px)_minmax(0,1fr)] sm:gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/45">
                  2022 — atual
                </p>
                <div>
                  <p className="font-medium text-white/92">
                    Desenvolvedor Frontend / Freelancer
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-white/70">
                    <li>Criação de landing pages e portfólios performáticos.</li>
                    <li>Integração com APIs e CMS headless.</li>
                    <li>
                      Foco em acessibilidade, SEO técnico e DX de manutenção.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-xs text-white/55">
                Essa página resume o recorte mais relevante para produtos
                digitais — detalhes completos de experiências estão disponíveis
                no currículo em PDF.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-14">
          <h3
            className={`text-lg font-semibold tracking-tight text-white sm:text-xl ${outfit.className}`}
          >
            Stack principal
          </h3>
          <p
            className={`mt-2 max-w-2xl text-sm text-white/55 ${dmSans.className}`}
          >
            Níveis indicam familiaridade prática no dia a dia — não substituem
            certificações nem métricas de projeto.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {aboutSkillGroups.map((group, groupIndex) => (
              <section
                key={group.id}
                aria-label={group.label}
                className="space-y-4"
              >
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  {group.label}
                </h4>
                <ul className="space-y-4" aria-label={group.label}>
                  {group.skills.map(({ name, Icon, level }, index) => (
                    <li key={name} className="grid gap-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[1.35rem] text-white/90"
                          aria-hidden
                        >
                          <Icon />
                        </span>
                        <span className="text-sm font-medium text-white/92 sm:text-base">
                          {name}
                        </span>
                        <span className="ml-auto tabular-nums text-xs text-white/45 sm:text-sm">
                          {level}%
                        </span>
                      </div>
                      <SkillProgressBar
                        value={level}
                        delay={(groupIndex * 0.12 + index * 0.06)}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
