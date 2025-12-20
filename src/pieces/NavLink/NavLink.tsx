import { defaultTransition } from "@/utils/defaults";
import { Link } from "react-scroll";

import "./NavLink.css";

export interface INavLinkProps {
  title: string;
  slug: string;
}

const NavLink = ({ title, slug }: INavLinkProps) => {
  return (
    <li className="list-none">
      <Link
        to={slug}
        smooth={true}
        duration={800}
        spy={true}
        activeClass="activeLink"
        className={`cursor-pointer font-semibold text-white select-none hover:text-[#948ad5] ${defaultTransition}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
