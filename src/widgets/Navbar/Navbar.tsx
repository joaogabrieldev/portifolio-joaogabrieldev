import Logo from "@/pieces/Logo/Logo";
import Nav from "@/components/Nav/Nav";

import "./Navbar.css";
import MobileNavbar from "@/components/Mobile/MobileNavbar/MobileNavbar";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex w-full">
      <div
        className={`relative z-20 flex w-full min-w-dvw flex-row items-center justify-around gap-10 border-2 border-b border-white border-b-zinc-800 bg-[#34343496]/40 py-5 backdrop-blur-[6px] lg:gap-46`}
        id="navbar"
      >
        <div className="w-full border-2 border-white">
          <Logo />
        </div>

        <div className="flex w-full flex-row items-end gap-6 border-2 border-white">
          <div className="flex max-[1200px]:hidden">
            <Nav />
          </div>
          <div className="hidden max-[1200px]:flex max-[1200px]:items-end">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
