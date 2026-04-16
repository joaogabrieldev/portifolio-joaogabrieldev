import type { IconType } from "react-icons";
import {
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type AboutSkill = {
  name: string;
  Icon: IconType;
  /** 0–100 */
  level: number;
};

export const aboutSkills: AboutSkill[] = [
  { name: "React", Icon: SiReact, level: 90 },
  { name: "Next.js", Icon: SiNextdotjs, level: 92 },
  { name: "TypeScript", Icon: SiTypescript, level: 88 },
  { name: "Node.js", Icon: SiNodedotjs, level: 80 },
  { name: "PostgreSQL", Icon: SiPostgresql, level: 75 },
  { name: "Python", Icon: SiPython, level: 72 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, level: 85 },
  { name: "Git", Icon: SiGit, level: 82 },
];
