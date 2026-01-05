import { Projects } from "@/assets/data/projects";
import { formatProjectDate } from "@/utils/formatProjectDate";
import Link from "next/link";
import "./NonDxtopProjectPreview.css";

const NonDxtopProjectPreview = ({
  url,
  title,
  date,
  description,
  icons,
}: Projects) => {
  return (
    <div className="flex flex-col justify-center rounded-4xl border border-gray-600 select-none">
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
          <div className="mt-2.5 mb-1.5 ml-5 flex w-full max-w-6xl flex-row justify-around border-2 font-semibold text-[#bdbbfc]">
            <div className="w-1/2 border-2">{title}</div>
            <div className="w-1/2 border-2 text-end">
              {formatProjectDate(date)}
            </div>
          </div>
        </div>
        <div className="px-2 font-semibold text-[#a7a4fff1]">
          <p className="">{description}</p>
        </div>
      </Link>
      <div>{...icons}</div>
    </div>
  );
};

export default NonDxtopProjectPreview;
