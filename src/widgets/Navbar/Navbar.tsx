import Logo from "@/pieces/Logo/Logo";
import Nav from "@/components/Nav/Nav";

import "./Navbar.css";
import MobileNavbar from "@/components/Mobile/MobileNavbar/MobileNavbar";
import { useWindowSize } from "@/hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <div className="fixed top-0 z-50 flex w-full">
      <div
        className={`relative z-20 flex w-full min-w-dvw flex-row items-center justify-around gap-10 border-b border-b-zinc-800 bg-[#34343496]/40 py-5 backdrop-blur-[6px] lg:gap-46`}
        id="navbar"
      >
        <div className="w-full">
          <Logo />
        </div>

        <div className="flex w-full flex-row items-end gap-6">
          {width <= 1200 ? (
            <div className="flex items-end">
              <MobileNavbar />
            </div>
          ) : (
            <div className="flex">
              <Nav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
