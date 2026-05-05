"use client";

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { dmSans } from "@/utils/fonts";

/** Card compacto (`subtext`) ou expandido (`intro` + `topics`). */
export type ProcessStepInfoCard = {
  /** Ícone visual na caixa roxa (emoji ou Lucide SVG). */
  icon?: string | LucideIcon;
  title: string;
  subtext?: string;
  intro?: string;
  topics?: string[];
};

export type ProcessStepInfoCardLayout = "mobile" | "desktop-rich" | "desktop-compact";

function resolveCardIconTitle(card: ProcessStepInfoCard): {
  icon: string | LucideIcon;
  heading: string;
} {
  if (card.icon) {
    return { icon: card.icon, heading: card.title };
  }
  const m = card.title.match(
    /^(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)\s+/u,
  );
  if (m) {
    return { icon: m[1], heading: card.title.slice(m[0].length).trim() };
  }
  return { icon: "◆", heading: card.title };
}

function renderCardIcon(icon: string | LucideIcon, className: string) {
  if (typeof icon === "string") {
    return <span className={className}>{icon}</span>;
  }
  const Icon = icon;
  return <Icon className={className} strokeWidth={1.9} aria-hidden />;
}

export interface ProcessStepInfoCardItemProps {
  card: ProcessStepInfoCard;
  cardIndex: number;
  layout: ProcessStepInfoCardLayout;
}

export function ProcessStepInfoCardItem({
  card,
  cardIndex,
  layout,
}: ProcessStepInfoCardItemProps) {
  const isRich = Boolean(card.intro || card.topics?.length);
  const { icon, heading } = resolveCardIconTitle(card);

  if (layout === "mobile") {
    return (
      <div
        className="relative overflow-hidden rounded-2xl border border-violet-500/65 bg-[linear-gradient(180deg,rgba(167,139,246,0.55)_0px,rgba(167,139,246,0.55)_2px,transparent_2px),#131013] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_40px_rgba(124,58,237,0.14),0_6px_24px_rgba(124,58,237,0.08)]"
      >
        <div className="flex items-start gap-3 pt-1">
          <div
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-violet-500/45 bg-violet-950/90 text-base leading-none shadow-[0_0_0_1px_rgba(139,92,246,0.22),0_0_18px_rgba(124,58,237,0.35)]"
            aria-hidden
          >
            {renderCardIcon(icon, "size-[68%] text-violet-200")}
          </div>
          <div className="min-w-0">
            <p className={`text-sm font-semibold text-white ${dmSans.className}`}>
              {heading}
            </p>
            {isRich ? (
              <>
                {card.intro ? (
                  <p
                    className={`mt-1 text-xs leading-relaxed text-gray-400 ${dmSans.className}`}
                  >
                    {card.intro}
                  </p>
                ) : null}
                {card.topics && card.topics.length > 0 ? (
                  <ul className={`mt-2 space-y-1.5 ${dmSans.className}`}>
                    {card.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex gap-2 text-xs leading-snug text-gray-400"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500/75"
                          aria-hidden
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : card.subtext ? (
              <p
                className={`mt-1 text-xs leading-relaxed text-gray-400 ${dmSans.className}`}
              >
                {card.subtext}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (layout === "desktop-rich" && isRich) {
    return (
      <div
        className={cn(
          "group relative flex translate-y-0 flex-col overflow-hidden rounded-2xl border border-violet-500/65 bg-[linear-gradient(180deg,rgba(167,139,246,0.55)_0px,rgba(167,139,246,0.55)_2px,transparent_2px),#131013] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_40px_rgba(124,58,237,0.14),0_6px_24px_rgba(124,58,237,0.08)] will-change-[transform,box-shadow] [transition:box-shadow_550ms_cubic-bezier(0.22,1,0.36,1),border-color_550ms_cubic-bezier(0.22,1,0.36,1),transform_780ms_cubic-bezier(0.33,1,0.68,1)] sm:p-5 lg:p-6",
          "hover:-translate-y-1 hover:border-violet-400/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_52px_rgba(124,58,237,0.18),0_14px_44px_rgba(124,58,237,0.16)]",
          "max-w-sm min-w-[min(100%,240px)] flex-[1_1_240px] gap-3 sm:min-w-[min(100%,260px)] sm:flex-[1_1_260px] lg:gap-4",
        )}
      >
        <span className="absolute top-4 right-4 text-[11px] font-mono tracking-[0.15em] text-white/30">
          Nº {(cardIndex + 1).toString().padStart(2, "0")}
        </span>
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-violet-500/45 bg-violet-950/90 text-base leading-none shadow-[0_0_0_1px_rgba(139,92,246,0.22),0_0_22px_rgba(124,58,237,0.38),0_0_20px_rgba(124,58,237,0.3)] sm:h-10 sm:w-10 sm:text-lg"
          aria-hidden
        >
          {renderCardIcon(icon, "size-[68%] text-violet-200")}
        </div>
        <div className="flex min-w-0 flex-col gap-1.5 sm:gap-2">
          <p
            className={`text-base font-semibold tracking-tight text-white sm:text-lg ${dmSans.className}`}
          >
            {heading}
          </p>
          {card.intro ? (
            <p
              className={`text-xs leading-relaxed text-gray-400 sm:text-sm ${dmSans.className}`}
            >
              {card.intro}
            </p>
          ) : null}
          {card.topics && card.topics.length > 0 ? (
            <ul
              className={`mt-1 space-y-1.5 border-t border-white/6 pt-2.5 sm:space-y-2 sm:pt-3 ${dmSans.className}`}
            >
              {card.topics.map((topic, topicIndex) => (
                <li
                  key={topicIndex}
                  className="flex gap-2.5 text-xs leading-snug text-gray-400 sm:text-sm"
                >
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-500/75 sm:mt-2"
                    aria-hidden
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className="group flex min-w-[140px] translate-y-0 flex-col gap-1 rounded-xl border border-purple-500/25 bg-[linear-gradient(180deg,rgba(168,85,247,0.38)_0px,rgba(168,85,247,0.38)_2px,transparent_2px),rgba(168,85,247,0.05)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_4px_20px_rgba(88,28,135,0.09)] backdrop-blur-sm will-change-[transform,box-shadow] [transition:box-shadow_550ms_cubic-bezier(0.22,1,0.36,1),border-color_550ms_cubic-bezier(0.22,1,0.36,1),transform_720ms_cubic-bezier(0.33,1,0.68,1)] hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-[linear-gradient(180deg,rgba(192,132,252,0.42)_0px,rgba(192,132,252,0.42)_2px,transparent_2px),rgba(168,85,247,0.1)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_36px_rgba(124,58,237,0.16)]"
    >
      <p className={`text-sm font-medium text-purple-200 ${dmSans.className}`}>
        <span className="inline-flex items-center gap-1.5">
          {renderCardIcon(icon, "size-3.5 text-violet-300")}
          <span>{heading}</span>
        </span>
      </p>
      {card.subtext ? (
        <p className={`text-xs text-gray-500 ${dmSans.className}`}>
          {card.subtext}
        </p>
      ) : null}
    </div>
  );
}
