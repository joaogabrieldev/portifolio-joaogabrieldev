import { navLinks } from "@/assets/data/navLinks";
import NavLink from "@/pieces/NavLink/NavLink";

const Nav = () => {
  return (
    <ul className="flex flex-row gap-8">
      {navLinks.map((item, index) => {
        return <NavLink key={index} title={item.title} slug={item.slug} />;
      })}
    </ul>
  );
};

export default Nav;
