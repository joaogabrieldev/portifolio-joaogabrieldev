import React from "react";
import "./InformationFooter.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ubuntu } from "@/utils/fonts";
import Link from "next/link";

const InformationFooter = () => {
  return (
    <div className="absolute bottom-8 flex w-full max-w-dvw flex-col border-2 border-red-600 pb-20 max-[1200px]:pb-26 min-[1200px]:flex-row">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex flex-col border-2 border-white select-none">
          <span className="footer-title -ml-12 text-center text-4xl md:text-start md:ml-0">
            Joao
          </span>
          <span className="footer-title pl-12 text-center text-4xl md:pl-6">
            Gabriel
          </span>
        </div>
        <div className="w-full border-2 border-white">
          <h2 className={`${ubuntu.className} text-center text-lg select-none`}>
            &copy; 2025, João Gabriel R. Rocha. Todos os direitos reservados.
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 border-2 border-white px-14 py-2 text-4xl text-gray-500 md:py-0">
        <span>
          <Link href={""} target="_blank">
            <SiGithub className="cursor-pointer hover:text-[#948ad5]" />
          </Link>
        </span>
        <span>
          <Link href={""} target="_blank">
            <SiLinkedin className="cursor-pointer hover:text-[#948ad5]" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default InformationFooter;
