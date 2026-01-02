import { navLinks } from "@/assets/data/navLinks";
import NavLink from "@/pieces/NavLink/NavLink";
import { Ref } from "react";

interface IMobileNavbarProps {
  ref: Ref<HTMLDivElement>;
  className: string;
}

const MobileNavbar = ({ ref, className }: IMobileNavbarProps) => {
  return (
    <div ref={ref} className={`${className}`}>
      <ul className="flex flex-col gap-2">
        {navLinks.map((item, index) => {
          return <NavLink key={index} title={item.title} slug={item.slug} />;
        })}
      </ul>
    </div>
  );
};

export default MobileNavbar;
