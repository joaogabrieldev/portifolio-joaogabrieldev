import { useWindowSize } from "@/hooks/useWindowSize";
import { HERO_CONTENT } from "@/layout/Hero";
import HeroButton from "@/pieces/HeroButton/HeroButton";
import { dmSans, syne } from "@/utils/fonts";
import { ArrowUpRight } from "lucide-react";

const HeroLeftText = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div
      data-hero="left"
      data-parallax="left"
      className="relative -top-16 z-20 order-3 flex w-full max-w-[780px] min-w-0 flex-col items-center px-1 sm:px-2 md:px-0 lg:top-0"
    >
      {isMobile && (
        <h2
          className={`mb-5 w-full max-w-full border-2 border-red-500 px-1 text-center text-4xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance text-white sm:mb-6 sm:px-2 sm:text-5xl md:text-6xl lg:text-[2.35rem] ${syne.className}`}
        >
          Design que pensa. <br />
          Interfaces que funcionam.
        </h2>
      )}
      <div className="w-full max-w-[440px] rounded-2xl border border-white/15 bg-white/6 p-3 text-left shadow-[0_10px_36px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:max-w-[860px] sm:p-4 md:p-10">
        {!isMobile && (
          <h2
            className={`mb-5 w-full max-w-full border-2 border-red-500 px-1 text-center text-4xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance text-white sm:mb-6 sm:px-2 sm:text-5xl md:text-6xl lg:text-[2.35rem] ${syne.className}`}
          >
            Design que pensa. <br />
            Interfaces que funcionam.
          </h2>
        )}
        <p
          className={`text-center text-[0.98rem] leading-[1.55] text-zinc-100/88 sm:text-lg ${dmSans.className}`}
        >
          A maioria dos sites parecem bonitos até alguém tentar usá-los.
        </p>
        <p
          className={`mt-4 text-center text-[0.98rem] leading-[1.55] text-zinc-100/88 sm:text-lg ${dmSans.className}`}
        >
          Aqui, estética e performance não competem — elas colaboram.
        </p>
        <div className="mt-4 h-px w-full bg-linear-to-r from-white/25 via-white/5 to-transparent" />
        <div className="flex justify-center gap-4">
          <HeroButton
            button_href={HERO_CONTENT.readMoreLink}
            button_label="Ver Projetos"
            button_icon={<ArrowUpRight size={18} />}
            button_variant="primary"
          />{" "}
          <HeroButton
            button_href={HERO_CONTENT.readMoreLink}
            button_label="Ver CV"
            button_variant="secondary"
            button_icon={<ArrowUpRight size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLeftText;
