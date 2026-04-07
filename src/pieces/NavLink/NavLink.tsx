import { defaultTransition } from "@/utils/defaults";
import { Link } from "react-scroll";

import "./NavLink.css";

export interface INavLinkProps {
  title: string;
  slug: string;
  onClick?: () => void;
}

const NavLink = ({ title, slug, onClick }: INavLinkProps) => {
  return (
    <li className="list-none">
      <Link
        to={slug}
        smooth={true}
        duration={800}
        spy={true}
        onClick={onClick}
        activeClass="activeLink"
        className={`cursor-pointer select-none text-[17px] font-semibold text-white hover:text-white/80 ${defaultTransition}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
