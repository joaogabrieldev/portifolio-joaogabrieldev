import React from "react";
import Image from "next/image";
import logo from "@/assets/images/new-logo.png";
import { useWindowSize } from "@/hooks/useWindowSize";

const NewLogo = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <div>
      <Image
        src={logo}
        alt="logo"
        width={isMobile ? 54 : 64}
        height={isMobile ? 54 : 64}
        className="cursor-pointer hover:fill-gray-200"
      />
    </div>
  );
};

export default NewLogo;
