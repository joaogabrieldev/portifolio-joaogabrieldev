import { aboutSkillGroups } from "@/assets/data/aboutContent";
import { SkillProgressBar } from "@/components/SkillProgressBar/SkillProgressBar";
import { dmSans, epilogue, geistMono } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";

const infoCardClass =
  "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/18 md:p-7";

export default function KnowledgeSection() {
  return (
    <section
      id="conhecimentos"
      aria-labelledby="conhecimentos-heading"
      className={`${sectionShell} scroll-mt-6`}
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p
              className={`text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
            >
              Stack & ferramentas
            </p>
            <h2
              id="conhecimentos-heading"
              className={`mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl ${epilogue.className}`}
            >
              Conhecimentos
            </h2>
          </div>
          <p className={`max-w-md text-sm text-white/50 ${dmSans.className}`}>
            Niveis indicativos (0-100%) com base em projetos reais e rotina de
            uso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {aboutSkillGroups.map((group, groupIndex) => {
            const baseDelay =
              aboutSkillGroups
                .slice(0, groupIndex)
                .reduce((acc, currentGroup) => acc + currentGroup.skills.length, 0) *
              0.035;

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
                            className={`shrink-0 text-[11px] tabular-nums text-white/55 transition-colors duration-300 ease-out group-hover:text-white/75 sm:text-sm ${geistMono.className}`}
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
      </div>
    </section>
  );
}
