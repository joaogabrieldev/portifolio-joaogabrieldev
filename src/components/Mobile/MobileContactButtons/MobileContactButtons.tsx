import Link from "next/link";
import React from "react";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

const MobileContactButtons = () => {
  return (
    <div className="mt-10 flex w-full flex-row items-center justify-center gap-4 border-2 border-white select-none">
      <Link
        href={""}
        className="flex flex-row items-center gap-1.5 rounded-md bg-green-500 px-8 py-2 text-lg font-semibold"
      >
        <SiWhatsapp className="font-bold" width={30} height={30} />
        <span>Whatsapp</span>
      </Link>
      <Link
        href={""}
        className="flex flex-row items-center gap-1.5 rounded-md bg-blue-500 px-8 py-2 text-lg font-semibold"
      >
        <SiLinkedin width={30} height={30} />
        <span>Linkedin</span>
      </Link>
    </div>
  );
};

export default MobileContactButtons;
