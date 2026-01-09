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
    <div className="flex w-full max-w-2xl flex-row gap-2 pl-10 select-none md:ml-20 md:pl-0 lg:ml-50">
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
          className="rounded-md"
        />
      </Link>
    </div>
  );
};

export default Logo;
