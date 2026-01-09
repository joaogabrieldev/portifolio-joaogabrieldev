import { formatProjectDate } from "@/utils/formatProjectDate";
import type { Projects } from "@/assets/data/projects";
import "./ProjectPreview.css";
import Link from "next/link";

const ProjectPreview = ({ url, title, date, description, icons }: Projects) => {
  return (
    <div className="select-none">
      <div className="iframe-container rounded-xl bg-white shadow-lg shadow-gray-400/10">
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
          <div className="mt-2.5 mb-1.5 ml-5 flex w-full max-w-6xl flex-row justify-around font-semibold text-[#bdbbfc]">
            <div className="w-1/2">{title}</div>
            <div className="w-1/2 text-end">{formatProjectDate(date)}</div>
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
