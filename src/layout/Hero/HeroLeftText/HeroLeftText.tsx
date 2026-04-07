import { HERO_CONTENT } from "@/layout/Hero";

const HeroLeftText = () => (
  <div
    data-hero="left"
    data-parallax="left"
    className="z-20 order-3 w-full px-2 text-center md:order-1 md:px-0 md:text-left"
  >
    <p className="mx-auto max-w-sm text-xs leading-relaxed text-gray-200/80 sm:text-sm md:mx-0">
      {HERO_CONTENT.mainText}
    </p>
    <a
      href={HERO_CONTENT.readMoreLink}
      className="mt-4 inline-block text-sm font-medium text-gray-200 underline decoration-from-font"
    >
      Read More
    </a>
  </div>
);

export default HeroLeftText;
