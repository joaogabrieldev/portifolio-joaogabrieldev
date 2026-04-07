import { ArrowUpRight } from "lucide-react";
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
    <div className="hidden items-center gap-3 md:flex">
      <ul className="flex h-11 items-center gap-1 rounded-full border border-white/10 bg-white/6 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
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

      <ScrollLink
        to="contato"
        smooth={true}
        duration={800}
        className="flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#f46f1f] px-6 text-sm font-semibold text-white transition hover:bg-[#ff7d2f]"
      >
        Let&apos;s Chat
      </ScrollLink>

      <button
        type="button"
        aria-label="Abrir contato"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/85"
      >
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default HeroDesktopNav;
