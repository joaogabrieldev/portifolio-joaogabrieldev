import { navLinks } from "@/assets/data/navLinks";
import { Link } from "react-scroll";
import { ArrowUpRight } from "lucide-react";

const Nav = () => {
  const desktopLinks = navLinks.filter((item) => item.title !== "Contato");

  return (
    <div className="flex items-center gap-3">
      <ul className="flex h-11 items-center gap-1 rounded-full border border-white/10 bg-white/6 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
        {desktopLinks.map((item) => (
          <li key={item.slug} className="list-none">
            <Link
              to={item.slug}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="desktopNavActive"
              className="desktopNavLink"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="contato"
        smooth={true}
        duration={800}
        className="flex h-11 cursor-pointer items-center justify-center rounded-full bg-[#f46f1f] px-6 text-sm font-semibold text-white transition hover:bg-[#ff7d2f]"
      >
        Let's Chat
      </Link>

      <button
        type="button"
        aria-label="Acessar contato"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/85"
      >
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
};

export default Nav;
