"use client";

import type { CSSProperties } from "react";
import type { Plans } from "@/assets/data/types/assets.types";
import newLogoPng from "@/assets/images/new-logo.png";
import Image from "next/image";
import { Link } from "react-scroll";
import { useWindowSize } from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";

export type PlanCardVariant = "orange" | "featured" | "offwhite";

export interface IPlanCardProps {
  plan: Plans;
  variant: PlanCardVariant;
  /** Rótulo do divisor (ex.: plano anterior +). Só usado se definido. */
  dividerLabel?: string;
  className?: string;
}

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

/** Brilho laranja no card inteiro — linear no topo evita “anel” duro do radial na altura do preço. */
const ORANGE_CARD_SURFACE: CSSProperties = {
  backgroundColor: "#121317",
  backgroundImage: [
    "linear-gradient(180deg, rgba(255,106,43,0.16) 0%, rgba(255,106,43,0.07) 14%, rgba(255,106,43,0.025) 28%, rgba(18,19,23,0) 52%)",
    "radial-gradient(ellipse 220% 175% at 90% -35%, rgba(255,106,43,0.5) 0%, rgba(255,106,43,0.17) 38%, rgba(255,106,43,0.055) 58%, transparent 78%)",
    "radial-gradient(ellipse 130% 100% at 28% -28%, rgba(255,188,150,0.26) 0%, transparent 56%)",
    "linear-gradient(180deg, rgba(255,255,255,0.048) 0%, transparent 30%)",
  ].join(","),
};

/** Mesma “fórmula” que o laranja: wash + radiais amplos no article inteiro (sem corte no preço). Tons prata/cinza. */
const OFFWHITE_CARD_SURFACE: CSSProperties = {
  backgroundColor: "#121317",
  backgroundImage: [
    "linear-gradient(180deg, rgba(200,202,212,0.135) 0%, rgba(200,202,212,0.06) 14%, rgba(200,202,212,0.022) 28%, rgba(18,19,23,0) 52%)",
    "radial-gradient(ellipse 220% 175% at 90% -35%, rgba(130,132,142,0.44) 0%, rgba(90,92,100,0.16) 38%, rgba(60,62,70,0.052) 58%, transparent 78%)",
    "radial-gradient(ellipse 130% 100% at 28% -28%, rgba(235,236,240,0.26) 0%, transparent 56%)",
    "linear-gradient(180deg, rgba(255,255,255,0.048) 0%, transparent 30%)",
  ].join(","),
};

/** Featured: violeta contínuo no card (base #131418), alinhado ao header radial antigo (#6b4dff → #1a1443). */
const FEATURED_CARD_SURFACE: CSSProperties = {
  backgroundColor: "#131418",
  backgroundImage: [
    "linear-gradient(180deg, rgba(107,77,255,0.17) 0%, rgba(107,77,255,0.07) 14%, rgba(107,77,255,0.028) 28%, rgba(19,20,24,0) 52%)",
    "radial-gradient(ellipse 220% 175% at 82% -32%, rgba(107,77,255,0.58) 0%, rgba(91,61,255,0.2) 36%, rgba(59,42,143,0.078) 56%, transparent 78%)",
    "radial-gradient(ellipse 130% 100% at 28% -28%, rgba(210,200,255,0.28) 0%, transparent 56%)",
    "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 30%)",
  ].join(","),
};

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden>
      <path
        fill="currentColor"
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1.5c-3.3 0-6 1.8-6 4V14h12v-.5c0-2.2-2.7-4-6-4Z"
      />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden>
      <path
        fill="currentColor"
        d="M11.5 12H4.8A3.3 3.3 0 0 1 4 5.5a4 4 0 0 1 7.8.6 2.95 2.95 0 0 1-.3 5.9Z"
      />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden>
      <circle
        cx="8"
        cy="8"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity={0.7}
      />
      <path
        d="M5 8.3 7.2 10.5 11.2 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden>
      <rect
        x="2"
        y="4"
        width="12"
        height="9"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M2.6 5 8 9l5.4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PlanCard = ({
  plan,
  variant,
  dividerLabel,
  className,
}: IPlanCardProps) => {
  const { width } = useWindowSize();
  const scrollOffset = width >= 768 ? -72 : 0;
  const isFeatured = variant === "featured";

  const headerPaddingClass =
    variant === "featured"
      ? "px-[22px] pb-[46px] pt-[26px]"
      : "px-[22px] pb-[42px] pt-[22px]";

  const orbClass =
    variant === "orange"
      ? "bg-[radial-gradient(circle_at_35%_30%,#ffcfb5,#ff9348_40%,#ff6a2b_70%,#2a0d04)]"
      : variant === "featured"
        ? "bg-[radial-gradient(circle_at_35%_30%,#e3dcff,#9c84ff_40%,#5b3dff_70%,#231a6d)]"
        : "bg-[radial-gradient(circle_at_35%_30%,#ffffff,#dedee2_45%,#8a8b91_75%,#3b3c42)]";

  const cardBgClass =
    variant === "featured"
      ? "pb-7"
      : variant === "orange" || variant === "offwhite"
        ? ""
        : "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0)_40%),#121317]";

  const metaSecondLine =
    plan.beneficts[1]?.title ??
    plan.beneficts[0]?.title ??
    "Benefícios inclusos no pacote";

  const ctaSecondaryContent = <>Solicitar orçamento</>;

  const ctaFeatured = (
    <Link
      to="contato"
      smooth
      duration={800}
      offset={scrollOffset}
      className={cn(
        "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[#5039BF] px-3.5 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_20px_rgba(75,53,175,0.45)] transition-[background,border-color,transform] duration-250 hover:bg-[#4b35af] active:translate-y-px",
      )}
    >
      <IconMail className="size-3.5 shrink-0 text-white/90" />
      Solicitar orçamento
    </Link>
  );

  const ctaSecondary = (
    <Link
      to="contato"
      smooth
      duration={800}
      offset={scrollOffset}
      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-white/[0.12] bg-white/[0.06] px-3.5 py-2.5 text-[13px] font-medium text-white transition-[background,border-color,transform] duration-150 hover:border-white/[0.18] hover:bg-white/10 active:translate-y-px"
    >
      <IconMail className="size-3.5 shrink-0 text-white/90" />
      {ctaSecondaryContent}
    </Link>
  );

  return (
    <article
      role="listitem"
      aria-label={`Plano ${plan.title}`}
      style={
        variant === "orange"
          ? ORANGE_CARD_SURFACE
          : variant === "offwhite"
            ? OFFWHITE_CARD_SURFACE
            : variant === "featured"
              ? FEATURED_CARD_SURFACE
              : undefined
      }
      className={cn(
        "relative overflow-hidden rounded-[22px] border border-white/[0.06] px-[22px] pb-[26px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-[8px]",
        cardBgClass,
        className,
      )}
    >
      <div className="relative -mx-[22px] mb-0 overflow-hidden">
        <div className={cn("relative overflow-hidden", headerPaddingClass)}>
          <div
            className="pointer-events-none absolute -top-5.5 -right-10 z-[1] h-[200px] w-[200px] opacity-[0.15]"
            aria-hidden
          >
            <Image
              src={newLogoPng}
              alt=""
              width={200}
              height={200}
              className="h-full w-full rotate-8 object-contain"
            />
          </div>
          {isFeatured ? (
            <span className="absolute top-[18px] right-[18px] z-[2] rounded-full border border-white/[0.14] bg-white/[0.12] px-2.5 py-1 text-[11px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
              Mais escolhido
            </span>
          ) : null}
          <div className="relative z-[2]">
            <div
              className={cn(
                "relative grid size-11 place-items-center overflow-hidden rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.15)]",
                orbClass,
              )}
              aria-hidden
            >
              <Image
                src={newLogoPng}
                alt=""
                width={36}
                height={36}
                className="relative z-[2] size-8 object-contain"
              />
              <span className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_70%_80%,transparent_45%,rgba(0,0,0,0.3)_80%),conic-gradient(from_140deg_at_50%_50%,rgba(255,255,255,0.05),transparent_30%,rgba(0,0,0,0.15)_60%,transparent_90%)] mix-blend-overlay" />
            </div>
            <h3
              className={cn(
                "mt-3.5 mb-1.5 text-[15px] font-semibold tracking-tight text-white",
                isFeatured &&
                  "mt-[18px] mb-2 text-[26px] font-semibold tracking-[-0.4px]",
              )}
            >
              {plan.title}
            </h3>
            <p
              className={cn(
                "m-0 max-w-[260px] text-[12.5px] leading-[1.45] text-white/[0.72]",
                isFeatured && "max-w-[270px] text-sm text-white/[0.8]",
              )}
            >
              {plan.description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-baseline gap-1">
        {/* <div className="mt-[6px] mb-3.5">
          <span
            className={cn(
              "text-[26px] font-semibold tracking-[-0.6px] text-white",
              isFeatured && "text-[32px]",
            )}
          >
            {formatter.format(plan.price)}
          </span> 
           <span className="text-[13px] font-normal text-[#a6a8ad]">/ pacote</span>
          {plan.originalPrice ? (
            <span className="ml-1 text-sm font-medium text-white/35 line-through">
              {formatter.format(plan.originalPrice)}
            </span>
          ) : null}
        </div> */}
      </div>

      {isFeatured ? ctaFeatured : ctaSecondary}
      <div className="mt-[18px] flex flex-col gap-2.5 pt-0.5">
        <div className="flex items-center gap-2.5 text-[13px] text-white/[0.78]">
          <IconUser className="size-4 shrink-0 text-white/75" />
          <span>
            <strong className="font-semibold text-white">Ideal:</strong>{" "}
            {plan.recommendation}
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-[13px] text-white/[0.78]">
          <IconCloud className="size-4 shrink-0 text-white/75" />
          <span>
            <strong className="font-semibold text-white">Incluso:</strong>{" "}
            {metaSecondLine}
          </span>
        </div>
      </div>
      <div className="my-[18px] mb-2.5 flex items-center gap-2.5">
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/[0.12] to-transparent" />
        <span className="text-[10.5px] font-medium tracking-[0.14em] text-white/42 uppercase">
          {/* {dividerLabel} */}
        </span>
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/[0.12] to-transparent" />
      </div>

      <ul
        className={cn(
          "m-0 mt-2.5 flex list-none flex-col gap-[11px] p-0",
          !dividerLabel && "mt-[18px]",
        )}
      >
        {plan.beneficts.map((item) => (
          <li
            key={`${plan.title}-${item.title}`}
            className="flex items-center gap-2.5 text-[13px] text-white/[0.82]"
          >
            <span className="grid size-4 shrink-0 place-items-center text-white/70">
              <IconCheck
                className={cn("size-3.5", isFeatured && "text-white/[0.82]")}
              />
            </span>
            <span className="min-w-0 flex-1">{item.title}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PlanCard;
