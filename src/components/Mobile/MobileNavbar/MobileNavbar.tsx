import { mobileNavLinks } from "@/assets/data/navLinks";
import HamburguerMenu from "@/components/UIverse/HamburguerMenu/HamburguerMenu";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";

import "./MobileNavbar.css";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMobileScroll = (slug: string) => {
    toggleMenu();

    setTimeout(() => {
      const element = document.getElementById(slug);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <div className="relative flex w-20 justify-end">
      <HamburguerMenu onClick={toggleMenu} isOpen={isMenuOpen!} />
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="dropdownMenu absolute top-full right-0 mt-4 w-72 rounded-3xl border border-white/15 p-4 text-sm text-white"
        >
          <div className="mb-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-white/70">
              NAVEGAÇÃO
            </span>
            <span className="text-xs font-medium text-white/50">Menu</span>
          </div>

          <div className="flex flex-col gap-2">
            {mobileNavLinks.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleMobileScroll(item.slug)}
                  className="mobileNavItem"
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <Link
            to="mobile-contato"
            smooth={true}
            duration={800}
            onClick={toggleMenu}
            className="mt-4 flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[#f46f1f] px-5 text-sm font-semibold text-white transition hover:bg-[#ff7d2f]"
          >
            Let's Chat
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;
