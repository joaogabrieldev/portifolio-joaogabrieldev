import Logo from "@/pieces/Logo/Logo";
import Nav from "@/components/Nav/Nav";

import "./Navbar.css";
import MobileNavbar from "@/components/Mobile/MobileNavbar/MobileNavbar";
import { useWindowSize } from "@/hooks/useWindowSize";

const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <div className="fixed top-0 z-50 flex w-full justify-center px-3 pt-4 md:px-6">
      <div
        className="relative z-20 flex w-full max-w-7xl flex-row items-center justify-between rounded-2xl border border-white/15 bg-[#16070bf2] px-4 py-3 shadow-[0_14px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6"
        id="navbar"
      >
        <div className="w-auto">
          <Logo />
        </div>

        <div className="flex w-auto flex-row items-center gap-6">
          {width <= 1200 ? (
            <div className="flex items-center">
              <MobileNavbar />
            </div>
          ) : (
            <div className="flex items-center">
              <Nav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
