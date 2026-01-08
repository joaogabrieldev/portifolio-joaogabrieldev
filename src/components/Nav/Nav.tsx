import { navLinks } from "@/assets/data/navLinks";
import NavLink from "@/pieces/NavLink/NavLink";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <ul className="flex w-180 flex-row items-center justify-center gap-8">
      {navLinks.map((item, index) =>
        item.title === "Contato" ? (
          <Link
            key={index}
            to={item.slug}
            smooth={true}
            className="-ml-1 flex cursor-pointer items-center justify-center rounded-md bg-[#948ad5] px-4 py-1.5 text-[16px] font-semibold text-white shadow-xs shadow-gray-500 transition duration-150 ease-out hover:bg-[#948ad5a9]"
          >
            {item.title}
          </Link>
        ) : (
          <NavLink key={index} title={item.title} slug={item.slug} />
        ),
      )}
    </ul>
  );
};

export default Nav;
