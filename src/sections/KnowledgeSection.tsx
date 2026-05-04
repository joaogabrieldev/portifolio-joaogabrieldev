"use client";

import { useState } from "react";
import { LibraryBig } from "lucide-react";
import { SiClaude, SiKoyeb } from "react-icons/si";
import { aboutSkillGroups } from "@/assets/data/aboutContent";
import { dmSans, outfit } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";

const SIMPLE_ICON_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons";

function cdnUrl(slug: string) {
  return `${SIMPLE_ICON_BASE}/${slug}.svg`;
}

/* Ícones locais / avatar Drizzle / Google (PNG) */
const LEGACY_INLINE_ICON_SRC: Record<string, string> = {
  cursor: "/assets/icons/cursor.png",
  mcp: "/assets/icons/mcp.png",
  spline: "/assets/icons/spline.png",
  drizzle: "https://avatars.githubusercontent.com/u/108468352?s=64",
  stitch: "/assets/icons/google.png",
};

const SKILL_ICON_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Tailwind CSS": "#06B6D4",
  Vite: "#646CFF",
  "Node.js": "#5FA04E",
  Bun: "#FBF0DF",
  Prisma: "#5A67D8",
  PostgreSQL: "#4169E1",
  Drizzle: "#C5F74F",
  Vercel: "#FFFFFF",
  Supabase: "#3ECF8E",
  Turso: "#4DA8A9",
  Koyeb: "#7FD8FF",
  BullMQ: "#EAB308",
  Claude: "#D97757",
  "Claude Design": "#D97757",
  Cursor: "#3B82F6",
  MCP: "#8B5CF6",
  RAG: "#22D3EE",
  Git: "#F05032",
  Figma: "#F24E1E",
  Spline: "#A78BFA",
  "Google Stitch": "#4285F4",
  Framer: "#0055FF",
};

function getInlineKey(name: string): string | null {
  if (name === "Cursor") return "cursor";
  if (name === "MCP") return "mcp";
  if (name === "RAG") return "rag";
  if (name === "Spline") return "spline";
  if (name === "Claude" || name === "Claude Design") return "claude";
  if (name === "Koyeb") return "koyeb";
  if (name === "Drizzle") return "drizzle";
  if (name === "Google Stitch") return "stitch";
  return null;
}

type SkillIconProps = { slug?: string; iconUrl?: string; name: string };

const iconWrapClass = "size-4 shrink-0 opacity-60";

function SkillIcon({ slug, iconUrl, name }: SkillIconProps) {
  const inlineKey = getInlineKey(name);
  const iconColor =
    SKILL_ICON_COLORS[name] ??
    (slug ? SKILL_ICON_COLORS[slug] : undefined) ??
    "rgba(255,255,255,0.85)";

  /* React Icons / Lucide (Claude, Koyeb, RAG) */
  if (inlineKey === "claude") {
    return (
      <SiClaude
        className={iconWrapClass}
        style={{ color: iconColor }}
        aria-hidden
      />
    );
  }
  if (inlineKey === "koyeb") {
    return (
      <SiKoyeb
        className={iconWrapClass}
        style={{ color: iconColor }}
        aria-hidden
      />
    );
  }
  if (inlineKey === "rag") {
    return (
      <LibraryBig
        className={iconWrapClass}
        style={{ color: iconColor }}
        strokeWidth={1.75}
        aria-hidden
      />
    );
  }

  /* 1 — imagens herdadas (assets locais, avatar Drizzle, Google) */
  if (inlineKey && LEGACY_INLINE_ICON_SRC[inlineKey]) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={LEGACY_INLINE_ICON_SRC[inlineKey]}
        alt=""
        width={16}
        height={16}
        style={{
          width: 16,
          height: 16,
          objectFit: "contain",
          opacity: 0.78,
          flexShrink: 0,
        }}
      />
    );
  }

  /* 2 — local PNG/SVG from /assets/icons/ */
  if (iconUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={iconUrl}
        alt=""
        width={16}
        height={16}
        style={{
          width: 16,
          height: 16,
          objectFit: "contain",
          opacity: 0.78,
          flexShrink: 0,
        }}
      />
    );
  }

  /* 3 — Simple Icons CDN (mask branco) */
  if (slug) {
    return (
      <span
        aria-hidden
        style={{
          width: 16,
          height: 16,
          flexShrink: 0,
          backgroundColor: iconColor,
          WebkitMaskImage: `url(${cdnUrl(slug)})`,
          maskImage: `url(${cdnUrl(slug)})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          opacity: 0.78,
        }}
      />
    );
  }

  return null;
}

export default function KnowledgeSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="habilidades"
      aria-labelledby="habilidades-heading"
      className={`relative scroll-mt-6 overflow-hidden bg-black px-4 py-20 text-white sm:px-8 md:px-12`}
    >
      {/* Violet radial atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 -translate-x-[30%] translate-y-[30%]"
        style={{
          width: 1200,
          height: 1200,
          backgroundColor: `#000000`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* HEADING */}
        <div className="mb-0">
          <p
            className={`mb-3 text-[11px] font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            Stack & Ferramentas
          </p>
          <h2
            id="habilidades-heading"
            className={`text-[52px] leading-[1.05] font-semibold tracking-[-0.025em] text-balance text-white ${outfit.className}`}
          >
            O que eu uso para construir.
          </h2>
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-[1.55] text-white/40 ${dmSans.className}`}
          >
            Ferramentas que uso no dia a dia em projetos{" "}
            <em className="text-white/55 not-italic">reais</em>.
          </p>
        </div>

        {/* HORIZONTAL RULE */}
        <div aria-hidden className="my-16 h-px w-full bg-white/8" />

        {/* COLUMNS */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${aboutSkillGroups.length}, minmax(0, 1fr))`,
          }}
        >
          {aboutSkillGroups.map((group, i) => {
            const isLast = i === aboutSkillGroups.length - 1;
            return (
              <div
                key={group.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "20px 28px",
                  boxShadow: !isLast
                    ? "1px 0 0 rgba(255,255,255,0.06)"
                    : undefined,
                  opacity: hovered === null || hovered === i ? 1 : 0.78,
                  transition: "opacity 300ms ease, background-color 300ms ease",
                  borderRadius: 12,
                  backgroundColor: "transparent",
                }}
                className="hover:!bg-white/[0.02]"
              >
                {/* Category label */}
                <div
                  className={`mb-4 flex items-center gap-2.5 text-[10px] font-medium tracking-[0.18em] text-white/85 uppercase ${dmSans.className}`}
                >
                  <span className="font-mono text-[9px] font-normal tracking-normal text-white/75">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{group.label}</span>
                </div>

                {/* Skills list */}
                <ul className="m-0 flex list-none flex-col p-0">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={`flex items-center gap-3 text-[14.5px] leading-[2.0] font-medium text-white ${dmSans.className}`}
                    >
                      <SkillIcon
                        slug={skill.slug}
                        iconUrl={skill.iconUrl}
                        name={skill.name}
                      />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <div
          className={`mt-24 flex flex-wrap items-start gap-3 text-[14px] text-white/65 ${dmSans.className}`}
        >
          <span
            aria-hidden
            className="mt-[0.55em] inline-block h-px w-6 shrink-0 bg-white/18"
          />
          <p className="m-0 max-w-2xl leading-relaxed">
            <span>
              Aberto a novas ferramentas conforme o projeto exige. Para ver a
              lista completa de tecnologias{" "}
            </span>
            <span
              onClick={() => {
                window.open("/curriculo-joao-gabriel-r.-rocha.pdf", "_blank");
              }}
              className="inline-block font-medium whitespace-nowrap text-violet-300/95 underline decoration-violet-400/45 underline-offset-[3px] transition hover:text-violet-200"
            >
              veja o meu currículo
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
