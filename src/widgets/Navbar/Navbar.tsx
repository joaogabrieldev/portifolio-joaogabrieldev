import Logo from "./../../pieces/Logo/Logo";
import Nav from "./../../components/Nav/Nav";
import HamburguerMenu from "@/components/UIverse/HamburguerMenu/HamburguerMenu";
import { useEffect, useState } from "react";
// import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  return (
    <div
      className="fixed top-0 z-50 flex w-full min-w-dvw flex-row items-center justify-around gap-46 border-2 border-b border-white border-b-zinc-800 bg-[#34343496]/40 py-5 backdrop-blur-[6px]"
      id="navbar"
    >
      <div>
        <Logo />
      </div>
      <div className="flex flex-row items-center gap-6">
        <Nav />
        <HamburguerMenu onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

export default Navbar;
