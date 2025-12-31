import { formatProjectDate } from "@/utils/formatProjectDate";
import type { Projects } from "../../assets/data/projects";
import Image from "next/image";
import "./ProjectPreview.css";
import Link from "next/link";

const ProjectPreview = ({ url, title, date, description, icons }: Projects) => {
  return (
    <div className="select-none">
      <div className="iframe-container rounded-xl border-0 bg-white">
        <iframe
          src={url}
          loading="lazy"
          title={title}
          className="cursor-pointer"
          scrolling="no"
        />
      </div>
      <Link href={url} target="_blank">
        <div className="flex justify-center items-center">
          <div className="mb-1.5 mt-2.5 flex flex-row border-2 justify-around  font-semibold max-w-6xl w-full text-[#bdbbfc]">
            <div className="border-2 w-1/2">{title}</div>
            <div className="border-2 w-1/2 text-end">{formatProjectDate(date)}</div>
          </div>
        </div>
        <div className="px-2 font-semibold text-[#a7a4fff1]">
          <p className="">{description}</p>
        </div>
        <div className="mt-3 flex flex-row gap-2 px-2 text-[22px] text-[#bdbbfc]/80">
          {...icons}
        </div>
      </Link>
    </div>
  );
};

export default ProjectPreview;
