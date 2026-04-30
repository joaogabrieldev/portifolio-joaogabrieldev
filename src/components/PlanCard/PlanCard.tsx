"use client";

import type { Plans } from "@/assets/data/types/assets.types";
import newLogoPng from "@/assets/images/new-logo.png";
import LogoBlack from "@/assets/images/new-logo-black_00000.png";
import Image from "next/image";
import { Link } from "react-scroll";
import { CheckCircle2 } from "lucide-react";
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

function IconUser({ className }: { className?: string }) {
  return null;
}

function IconCloud({ className }: { className?: string }) {
  return null;
}

function IconCheck({ className }: { className?: string }) {
  return <CheckCircle2 className={className} size={14} aria-hidden />;
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
      ? "px-[22px] pb-[34px] pt-[22px]"
      : "px-[22px] pb-[30px] pt-[22px]";

  const orbClass = isFeatured ? "bg-[#5e6ad2]" : "bg-white/10";
  const watermarkOpacityClass = "opacity-[0.2]";

  const cardBgClass = isFeatured
    ? "bg-[rgba(94,106,210,0.08)] border-[rgba(113,112,255,0.25)] shadow-[0_0_0_1px_rgba(113,112,255,0.15)]"
    : "bg-[rgba(255,255,255,0.02)] border-black/12 shadow-[0_1px_2px_rgba(0,0,0,0.04)]";

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
        "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-[#5e6ad2] px-4 py-2.5 text-sm font-medium text-white transition-all duration-150 ease-out hover:bg-[#7170ff]",
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
      className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-black/10 bg-black/4 px-4 py-2.5 text-sm font-medium text-[#2b3138] transition-all duration-150 ease-out hover:bg-black/8"
    >
      <IconMail className="size-3.5 shrink-0 text-[#2b3138]" />
      {ctaSecondaryContent}
    </Link>
  );

  return (
    <article
      role="listitem"
      aria-label={`Plano ${plan.title}`}
      className={cn(
        "relative overflow-hidden rounded-xl border px-[22px] pb-[26px] transition-all duration-200 ease-out hover:bg-white/4",
        cardBgClass,
        className,
      )}
    >
      <div className="relative -mx-[22px] mb-0 overflow-hidden">
        <div className={cn("relative overflow-hidden", headerPaddingClass)}>
          <div
            className={cn(
              "pointer-events-none absolute -top-5.5 -right-10 z-0 h-[200px] w-[200px]",
              watermarkOpacityClass,
            )}
            aria-hidden
          >
            <Image
              src={LogoBlack}
              alt=""
              width={200}
              height={200}
              className="h-full w-full rotate-8 object-contain"
            />
          </div>
          {isFeatured ? (
            <span className="absolute top-[18px] right-[18px] z-20 rounded-full border border-[rgba(113,112,255,0.30)] bg-[rgba(113,112,255,0.15)] px-[10px] py-[3px] text-[11px] font-medium tracking-[0.02em] text-[#828fff]">
              Mais escolhido
            </span>
          ) : null}
          <div className="relative z-10">
            <div
              className={cn(
                "relative grid size-11 place-items-center overflow-hidden rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.35),inset_0_0_0_1px_rgba(255,255,255,0.15)]",
                "shadow-none",
                orbClass,
              )}
              aria-hidden
            >
              <Image
                src={isFeatured ? newLogoPng : LogoBlack}
                alt=""
                width={36}
                height={36}
                className="relative z-2 size-8 object-contain"
              />
              <span className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(circle_at_70%_80%,transparent_45%,rgba(0,0,0,0.3)_80%),conic-gradient(from_140deg_at_50%_50%,rgba(255,255,255,0.05),transparent_30%,rgba(0,0,0,0.15)_60%,transparent_90%)] mix-blend-overlay" />
            </div>
            <h3
              className={cn(
                "mt-3.5 mb-1.5 text-[20px] font-semibold tracking-[-0.015em] text-[#161a20]",
              )}
            >
              {plan.title}
            </h3>
            <p
              className={cn(
                "m-0 max-w-[270px] text-[15px] leading-[1.6] font-normal text-[#5c636f]",
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
      <div className="mt-[18px] flex flex-col gap-2 pt-0.5">
        <div className="flex items-center gap-2 text-sm text-[#5c636f]">
          <IconUser className="size-4 shrink-0 text-white/75" />
          <span>
            <strong className="font-medium text-[#2f3742]">Ideal:</strong>{" "}
            {plan.recommendation}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-[#5c636f]">
          <IconCloud className="size-4 shrink-0 text-white/75" />
          <span>
            <strong className="font-medium text-[#2f3742]">Incluso:</strong>{" "}
            {metaSecondLine}
          </span>
        </div>
      </div>
      <div className="my-[18px] mb-2.5 flex items-center gap-2.5">
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/5 to-transparent" />
        <span className="text-[10.5px] font-medium tracking-[0.14em] text-black/30 uppercase">
          {/* {dividerLabel} */}
        </span>
        <span className="h-px flex-1 bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <ul
        className={cn(
          "m-0 mt-2.5 flex list-none flex-col gap-2 p-0",
          !dividerLabel && "mt-[18px]",
        )}
      >
        {plan.beneficts.map((item) => (
          <li
            key={`${plan.title}-${item.title}`}
            className="flex items-center gap-2 text-sm font-normal text-[#5c636f]"
          >
            <span className="grid size-4 shrink-0 place-items-center">
              <IconCheck
                className={cn(isFeatured ? "text-[#7170ff]" : "text-zinc-700")}
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
