import { Sparkles } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/inverted-favicon.png";
import { Link } from "react-scroll";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useRef } from "react";

const Logo = () => {
  const { width } = useWindowSize();
  const logoResponsizeSize = useRef<number | null>(58);

  if (width <= 768) {
    logoResponsizeSize.current = 58;
  } else {
    logoResponsizeSize.current = 68;
  }

  return (
    <div className="ml-20 flex w-full flex-row gap-2 select-none lg:ml-50">
      {/* <Sparkles stroke="white" />
      <h1 className="font-semibold text-white select-none">Minha Logo</h1> */}
      <Link
        to="inicio"
        smooth={true}
        duration={800}
        spy={true}
        activeClass="text-[#948ad5]"
        className="cursor-pointer"
      >
        <Image
          src={logo}
          alt={"logo"}
          width={logoResponsizeSize.current}
          height={logoResponsizeSize.current}
        />
      </Link>
    </div>
  );
};

export default Logo;
