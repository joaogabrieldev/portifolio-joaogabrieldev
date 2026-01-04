import { navLinks } from "@/assets/data/navLinks";
import NavLink from "@/pieces/NavLink/NavLink";

const Nav = () => {
  return (
    <ul className="flex w-180 flex-row justify-center gap-8 border-2 border-red-600">
      {navLinks.map((item, index) => {
        return <NavLink key={index} title={item.title} slug={item.slug} />;
      })}
    </ul>
  );
};

export default Nav;
