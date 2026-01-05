import { navLinks } from "@/assets/data/navLinks";
import HamburguerMenu from "@/components/UIverse/HamburguerMenu/HamburguerMenu";
import NavLink from "@/pieces/NavLink/NavLink";
import { motion } from "motion/react";
import { useState } from "react";

import "./MobileNavbar.css";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative flex w-50 max-w-100 justify-end border-2 border-red-600 min-[750px]:w-85">
      <HamburguerMenu onClick={toggleMenu} isOpen={isMenuOpen!} />
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="dropdownMenu absolute top-full right-0 mt-6 h-60 w-40 rounded-b-2xl border border-gray-600 border-t-gray-800 p-4 text-sm text-white"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  title={item.title}
                  slug={item.slug}
                  onClick={toggleMenu}
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;
