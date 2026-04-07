import { HERO_CONTENT } from "@/layout/Hero";

const HeroFooter = () => (
  <footer
    data-hero="footer"
    data-parallax="footer"
    className="z-30 flex w-full max-w-7xl items-center justify-end sm:justify-between"
  >
    <div className="hidden items-center space-x-4 sm:flex" />
    <div className="text-foreground/80 text-xs font-medium sm:text-sm">
      {HERO_CONTENT.locationText}
    </div>
  </footer>
);

export default HeroFooter;
