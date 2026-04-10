import { HERO_CONTENT } from "@/layout/Hero";
import { ArrowUpRight } from "lucide-react";

const HeroLeftText = () => {
  const referenceText =
    "Merging design thinking with human insight to create digital experiences that do not just look great - they perform effortlessly.";

  return (
    <div
      data-hero="left"
      data-parallax="left"
      className="relative z-20 order-3 flex w-full min-w-0 justify-center px-1 sm:px-2 md:px-0"
    >
      <div className="w-full max-w-[320px] rounded-2xl border border-white/15 bg-white/6 p-3 text-left shadow-[0_10px_36px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:max-w-[350px] sm:p-4 md:p-5">
        <p className="text-[0.94rem] leading-[1.45] text-zinc-100/90">
          {referenceText}
        </p>

        <div className="mt-4 h-px w-full bg-linear-to-r from-white/25 via-white/5 to-transparent" />

        <a
          href={HERO_CONTENT.readMoreLink}
          className="group mt-4 inline-flex items-center gap-2 rounded-full border border-violet-300/35 bg-violet-500/75 px-3 py-1.5 text-base font-medium text-white shadow-[0_8px_24px_rgba(109,40,217,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-400/85 sm:px-4 sm:py-2 sm:text-lg"
        >
          <span>Let&apos;s Talk.</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-white/85 sm:h-10 sm:w-10"
          >
            <ArrowUpRight size={18} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeroLeftText;
