import Logo from "./../../pieces/Logo/Logo";
import Nav from "./../../components/Nav/Nav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 flex w-full min-w-dvw flex-row justify-around gap-46 border-2 border-b border-white border-b-zinc-800 py-5"
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
