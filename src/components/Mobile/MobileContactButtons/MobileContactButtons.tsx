import Link from "next/link";
import React from "react";
import OutlookLogo from "@/assets/icons/icons8-outlook-96.png";
import GmailLogo from "@/assets/icons/gmail-icon.svg";
import Image from "next/image";
import { SiLinkedin, SiWhatsapp } from "react-icons/si";

import { urlWhatsapp, urlGmail, urlOutlook } from "@/utils/linksToGo";

const MobileContactButtons = () => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <div className="text-center font-semibold text-gray-500">
        <h1 className="px-2 text-lg select-none">
          Selecione por onde deseja entrar em contato:{" "}
        </h1>
      </div>
      {/* 880 */}
      <div className="flex w-full flex-col items-center justify-center gap-3 select-none">
        <div className="flex flex-row gap-4">
          <Link
            href={urlWhatsapp}
            className="flex flex-row items-center gap-1.5 rounded-md bg-green-600 px-8 py-2 text-lg font-semibold text-white"
          >
            <SiWhatsapp className="font-bold" width={30} height={30} />
            <span>Whatsapp</span>
          </Link>
          <Link
            href={urlGmail}
            className="flex flex-row items-center rounded-md bg-white px-10 text-lg font-semibold"
          >
            <Image src={GmailLogo} alt={""} width={40} className="-ml-2" />
            <span className="text-gray-800">Gmail</span>
          </Link>
        </div>
        <div>
          <Link
            href={urlOutlook}
            className="flex flex-row items-center gap-1.5 rounded-md bg-white px-8 py-2 text-lg font-semibold"
          >
            <Image src={OutlookLogo} alt={""} width={30} />
            <span className="text-blue-500">Outlook</span>
          </Link>
        </div>
      </div>
      <div className="text-white">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        hic harum saepe aliquid. Quis voluptatum alias vel hic nulla quae nam
        perspiciatis illo, commodi in optio explicabo ullam earum corrupti.
      </div>
    </div>
  );
};

export default MobileContactButtons;
