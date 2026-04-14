import LangSelect from "@/pieces/LangSelect/LangSelect";
import { dmSans } from "@/utils/fonts";
import { Link as ScrollLink } from "react-scroll";

interface HeroNavLink {
  title: string;
  slug: string;
}

interface HeroDesktopNavProps {
  navLinks: HeroNavLink[];
}

const HeroDesktopNav = ({ navLinks }: HeroDesktopNavProps) => {
  return (
    <div className="hidden max-w-full justify-self-center md:flex">
      <ul className="flex h-11 max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/6 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
        {navLinks.map((item) => (
          <li key={item.slug} className="list-none">
            <ScrollLink
              to={item.slug}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="bg-white/13 text-white"
              className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full px-4 text-sm font-semibold text-white/90 transition hover:bg-white/8 hover:text-white"
            >
              {item.title}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function HeroDesktopNavActions() {
  return (
    <>
      <LangSelect />
      <ScrollLink
        to="contato"
        smooth={true}
        duration={800}
        className={`flex h-11 cursor-pointer items-center justify-center rounded-full border border-violet-400/25 bg-[#413b72] px-6 text-sm font-bold tracking-wide text-white uppercase shadow-[0_8px_24px_rgba(65,59,114,0.45)] transition hover:border-violet-300/35 hover:bg-[#4f4790] hover:shadow-[0_10px_28px_rgba(65,59,114,0.5)] ${dmSans.className}`}
      >
        Contato
      </ScrollLink>
    </>
  );
}

export default HeroDesktopNav;
