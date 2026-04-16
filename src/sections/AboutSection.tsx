import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import { dmSans, outfit } from "@/utils/fonts";
import { aboutSkills } from "./aboutContent";
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
          className={`max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${outfit.className}`}
        >
          Engenharia de produto digital com foco em performance e clareza.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-14">
          <div
            className={`max-w-2xl space-y-6 text-base leading-relaxed text-white/78 sm:text-lg ${dmSans.className}`}
          >
            <p>
              Trabalho com React, Next.js e TypeScript para entregar interfaces
              rápidas, acessíveis e fáceis de evoluir — do discovery ao deploy,
              com comunicação objetiva e entregas previsíveis.
            </p>
            <p>
              Cada projeto equilibra estética, SEO técnico e métricas de
              experiência, para que sua presença online converta visitantes em
              contatos reais, sem sacrificar velocidade ou manutenção.
            </p>
          </div>

          <aside
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm ${dmSans.className}`}
            aria-label="Formação"
          >
            <p
              className={`text-xs font-semibold tracking-[0.18em] text-violet-300/90 uppercase ${outfit.className}`}
            >
              Formação
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Engenharia de Software na UniCEUB — base sólida em algoritmos,
              arquitetura e boas práticas aplicadas ao desenvolvimento web.
            </p>
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

          <ul
            className={`mt-8 grid max-w-3xl gap-6 sm:gap-7 ${dmSans.className}`}
            aria-label="Habilidades técnicas"
          >
            {aboutSkills.map(({ name, Icon, level }, index) => (
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
                <SkillProgressBar value={level} delay={index * 0.06} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
