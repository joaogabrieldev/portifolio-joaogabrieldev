import Logo from "./../../pieces/Logo/Logo";
import Nav from "./../../components/Nav/Nav";
// import "./Navbar.css";

const classe = `fixed top-0 left-0 w-full   border-b border-white/10`;

const Navbar = () => {
  return (
    <div
      className="fixed top-0 z-50 flex w-full min-w-dvw flex-row justify-around gap-46 border-2 border-b border-white border-b-zinc-800 bg-[#34343496]/40 py-5 backdrop-blur-[6px]"
      id="navbar"
    >
      <div>
        <Logo />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
