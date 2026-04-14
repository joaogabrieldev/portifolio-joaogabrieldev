"use client";

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
        className="h-[54px] w-[54px] cursor-pointer hover:fill-gray-200 md:h-16 md:w-16"
        priority
      />
    </div>
  );
};

export default NewLogo;
