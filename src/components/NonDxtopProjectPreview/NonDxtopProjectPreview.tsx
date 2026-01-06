import { Projects } from "@/assets/data/projects";
import { formatProjectDate } from "@/utils/formatProjectDate";
import Link from "next/link";
import "./NonDxtopProjectPreview.css";
import MobileGlowButton from "./../Mobile/MobileGlowButton/MobileGlowButton";
import { ArrowRight } from "lucide-react";

const NonDxtopProjectPreview = ({
  url,
  title,
  date,
  description,
  icons,
}: Projects) => {
  return (
    <div className="flex w-full max-w-105 flex-col justify-center rounded-4xl border-2 border-gray-600 select-none">
      <div className="mobile-iframe-container rounded-xl bg-white shadow-lg shadow-gray-400/10">
        <iframe
          src={url}
          loading="lazy"
          title={title}
          className="cursor-pointer"
          scrolling="no"
        />
      </div>
      <Link href={url} target="_blank">
        <div className="flex items-center justify-center">
          <div className="mx-5 mt-2.5 mb-1.5 flex w-full max-w-6xl flex-row justify-around font-semibold text-[#bdbbfc]">
            <div className="w-1/2">{title}</div>
            <div className="w-1/2 text-end">{formatProjectDate(date)}</div>
          </div>
        </div>
        <div className="px-2 font-semibold text-[#a7a4fff1]">
          <p className="">{description}</p>
        </div>
      </Link>
      <div className="mt-3 mb-2 flex flex-row gap-2 px-2 pl-4 text-[22px] text-[#bdbbfc]/80">
        {...icons}
      </div>
      <div className="my-4 flex items-center justify-center">
        <Link href={url} target="_blank" className="viewProjectButton">
          <span className="flex items-center">Visualizar Projeto</span>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NonDxtopProjectPreview;
