import { mobileNavLinks } from "@/assets/data/navLinks";
import HamburguerMenu from "@/components/UIverse/HamburguerMenu/HamburguerMenu";
import NavLink from "@/pieces/NavLink/NavLink";
import { motion } from "motion/react";
import { useState } from "react";

import "./MobileNavbar.css";
import { scroller } from "react-scroll";

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
    <div className="relative flex w-50 max-w-100 justify-end max-[500px]:pr-4 min-[750px]:w-85">
      <HamburguerMenu onClick={toggleMenu} isOpen={isMenuOpen!} />
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="dropdownMenu absolute top-full right-0 mt-7 h-80 w-40 rounded-b-2xl border border-gray-600 border-t-gray-800 p-4 text-sm text-white md:mt-7"
        >
          <div className="flex flex-col gap-4">
            {mobileNavLinks.map((item, index) => {
              return (
                // <NavLink
                //   key={index}
                //   title={item.title}
                //   slug={item.slug}
                //   onClick={() => handleMobileClick(item.slug)}
                // />
                <div
                  key={index}
                  onClick={() => handleMobileScroll(item.slug)}
                  className="text-lg font-semibold"
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;
