import Logo from "./../../pieces/Logo/Logo";
import Nav from "./../../components/Nav/Nav";
import HamburguerMenu from "@/components/UIverse/HamburguerMenu/HamburguerMenu";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // const principalMenuCondition = isOpen
  //   ? `bg-transparent`
  //   : `border-b
  //     border-b-zinc-800 border-2 border-white bg-[#34343496]/40`;

  return (
    <div className="fixed top-0 z-50 flex w-full">
      <div
        className={`relative z-20 flex w-full min-w-dvw flex-row items-center justify-around gap-46 border-2 border-b border-white border-b-zinc-800 bg-[#34343496]/40 py-5 backdrop-blur-[6px]`}
        id="navbar"
      >
        <div>
          <Logo />
        </div>

        <div className="flex flex-row items-center gap-6">
          <div>
            <Nav />
          </div>
          <HamburguerMenu onClick={toggleMenu} />
        </div>
      </div>
      {isMenuOpen && (
        <div className="relative z-10 flex justify-end pr-20">
          <div className="fixed top-22 right-22 z-10 h-90 max-w-40 border-2 border-white bg-black p-4 text-white">
            <ul>
              {}  
            </ul>           
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
