import type { IconType } from "react-icons";
import {
  SiAdobeaftereffects,
  SiAstro,
  SiCss3,
  SiFigma,
  SiFirebase,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPycharm,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiBun,
} from "react-icons/si";

export type AboutSkill = {
  name: string;
  Icon: IconType;
  /** 0–100 */
  level: number;
};

export type AboutSkillGroup = {
  id: "stackBase" | "frontend" | "backend" | "frameworks" | "extras" | "tools";
  label: string;
  skills: AboutSkill[];
};

export const aboutSkillGroups: AboutSkillGroup[] = [
  {
    id: "stackBase",
    label: "Stack Base",
    skills: [
      { name: "HTML5", Icon: SiHtml5, level: 94 },
      { name: "CSS3", Icon: SiCss3, level: 90 },
      { name: "JavaScript", Icon: SiJavascript, level: 88 },
    ],
  },
  {
    id: "frontend",
    label: "Stack Front-End",
    skills: [
      { name: "TypeScript", Icon: SiTypescript, level: 88 },
      { name: "React", Icon: SiReact, level: 90 },
      { name: "Tailwind CSS", Icon: SiTailwindcss, level: 86 },
      { name: "Framer Motion", Icon: SiFirebase, level: 78 },
    ],
  },
  {
    id: "backend",
    label: "Stack Back-End",
    skills: [
      { name: "TypeScript (Node)", Icon: SiTypescript, level: 82 },
      { name: "Node.js", Icon: SiNodedotjs, level: 92 },
      { name: "Bun", Icon: SiBun, level: 80 },
      { name: "PostgreSQL", Icon: SiPostgresql, level: 78 },
      { name: "MySQL", Icon: SiMysql, level: 76 },
      { name: "MongoDB", Icon: SiMongodb, level: 72 },
      { name: "Prisma / ORMs", Icon: SiFastapi, level: 74 },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "Vite", Icon: SiVite, level: 86 },
      { name: "Next.js", Icon: SiNextdotjs, level: 90 },
      { name: "Astro", Icon: SiAstro, level: 70 },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    skills: [
      { name: "Python", Icon: SiPython, level: 76 },
      { name: "FastAPI / APIs", Icon: SiFastapi, level: 72 },
    ],
  },
  {
    id: "tools",
    label: "Tools, Ferramentas & IDEs",
    skills: [
      { name: "VS Code", Icon: SiGithub, level: 92 },
      { name: "Git", Icon: SiGit, level: 86 },
      { name: "GitHub", Icon: SiGithub, level: 86 },
      { name: "Figma", Icon: SiFigma, level: 82 },
      { name: "Vercel", Icon: SiVercel, level: 84 },
      { name: "Postman", Icon: SiPostman, level: 80 },
      { name: "After Effects", Icon: SiAdobeaftereffects, level: 70 },
      { name: "Visual Studio", Icon: SiGit, level: 68 },
      { name: "PyCharm", Icon: SiPycharm, level: 68 },
    ],
  },
];
