import { Projects } from "@/assets/data/projects";
import { dmSans, outfit } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  url,
  title,
  date,
  description,
  icons,
  projectImage,
}: Projects) => {
  const isStaticImageData =
    !!projectImage &&
    typeof projectImage === "object" &&
    "src" in projectImage;
  const isLucideIcon = typeof projectImage === "function";
  const ProjectImage = isLucideIcon ? projectImage : null;

  return (
    <li key={title}>
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.35)] transition hover:border-violet-400/35 hover:bg-white/[0.07]"
      >
        <div>
          {isStaticImageData ? (
            <Image
              src={projectImage}
              alt={title}
              width={100}
              height={100}
            />
          ) : ProjectImage ? (
            <ProjectImage className="size-8 text-white/80" />
          ) : null}
        </div>
        <span
          className={`text-lg font-semibold text-white group-hover:text-violet-200 ${outfit.className}`}
        >
          {title}
        </span>
        <span className={`mt-1 text-xs text-white/45 ${dmSans.className}`}>
          {date}
        </span>
        <p
          className={`mt-4 flex-1 text-sm leading-relaxed text-white/72 ${dmSans.className}`}
        >
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-violet-200/90">
          {icons.map((icon, i) => (
            <span key={i} className="text-lg [&_svg]:block">
              {icon}
            </span>
          ))}
        </div>
      </Link>
    </li>
  );
};

export default ProjectCard;
