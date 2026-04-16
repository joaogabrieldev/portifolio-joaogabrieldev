import type { IconType } from "react-icons";
import {
  SiAdobeaftereffects,
  SiAstro,
  SiClaude,
  SiCss3,
  SiFigma,
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
  SiPrisma,
} from "react-icons/si";

export type AboutSkill = {
  name: string;
  Icon: IconType;
  iconColor?: string;
  iconUrl?: string;
  /** 0–100 */
  level: number;
};

export type AboutSkillGroup = {
  id:
    | "stackBase"
    | "frontend"
    | "backend"
    | "infra"
    | "frameworks"
    | "extras"
    | "ai"
    | "tools";
  label: string;
  skills: AboutSkill[];
};

export const aboutSkillGroups: AboutSkillGroup[] = [
  {
    id: "stackBase",
    label: "Stack Base",
    skills: [
      { name: "HTML5", Icon: SiHtml5, iconColor: "#E34F26", level: 100 },
      { name: "CSS3", Icon: SiCss3, iconColor: "#1572B6", level: 100 },
      {
        name: "JavaScript",
        Icon: SiJavascript,
        iconColor: "#F7DF1E",
        level: 100,
      },
    ],
  },
  {
    id: "frontend",
    label: "Stack Front-End",
    skills: [
      {
        name: "TypeScript",
        Icon: SiTypescript,
        iconColor: "#3178C6",
        level: 100,
      },
      { name: "React", Icon: SiReact, iconColor: "#61DAFB", level: 100 },
      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        iconColor: "#06B6D4",
        level: 100,
      },
      {
        name: "Axios",
        Icon: SiFastapi,
        iconUrl: "/assets/icons/axios.png",
        level: 95,
      },
      {
        name: "TanStack Query",
        Icon: SiReact,
        iconUrl: "/assets/icons/tanstack-query.png",
        level: 85,
      },
      // {
      //   name: "Motion",
      //   Icon: SiFirebase,
      //   iconUrl:
      //     "https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc",
      //   level: 78,
      // },
    ],
  },
  {
    id: "backend",
    label: "Stack Back-End",
    skills: [
      {
        name: "TypeScript (Node)",
        Icon: SiTypescript,
        iconColor: "#5FA04E",
        level: 100,
      },
      { name: "Node.js", Icon: SiNodedotjs, iconColor: "#5FA04E", level: 95 },
      { name: "Bun", Icon: SiBun, iconColor: "#FBF0DF", level: 80 },
      {
        name: "Axios",
        Icon: SiFastapi,
        iconUrl: "/assets/icons/axios.png",
        level: 95,
      },
      {
        name: "Drizzle",
        Icon: SiFastapi,
        iconUrl: "https://avatars.githubusercontent.com/u/108468352?s=64",
        level: 95,
      },

      {
        name: "Prisma",
        Icon: SiPrisma,
        iconColor: "#8164e3",
        level: 85,
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        iconColor: "#4169E1",
        level: 90,
      },
      {
        name: "MySQL",
        Icon: SiMysql,
        iconUrl: "/assets/icons/mysql.svg",
        iconColor: "#4479A1",
        level: 95,
      },
      { name: "MongoDB", Icon: SiMongodb, iconColor: "#47A248", level: 95 },
      {
        name: "BullMQ",
        Icon: SiNodedotjs,
        iconUrl: "/assets/icons/bullmq.svg",
        level: 80,
      },
    ],
  },
  {
    id: "infra",
    label: "Infra / DevOps",
    skills: [
      {
        name: "Redis",
        Icon: SiReact,
        iconUrl: "/assets/icons/redis.png",
        level: 80,
      },
      {
        name: "BullMQ",
        Icon: SiNodedotjs,
        iconUrl: "/assets/icons/bullmq.svg",
        level: 80,
      },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "Vite", Icon: SiVite, iconColor: "#646CFF", level: 86 },
      { name: "Next.js", Icon: SiNextdotjs, iconColor: "#FFFFFF", level: 90 },
      { name: "Astro", Icon: SiAstro, iconColor: "#FF5D01", level: 70 },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    skills: [
      { name: "Python", Icon: SiPython, iconColor: "#3776AB", level: 50 },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        iconColor: "#009688",
        level: 45,
      },
    ],
  },
  {
    id: "ai",
    label: "IA",
    skills: [
      {
        name: "Claude",
        Icon: SiClaude,
        iconColor: "#D97757",
        level: 88,
      },
      {
        name: "Cursor",
        Icon: SiReact,
        iconUrl: "/assets/icons/cursor.png",
        level: 90,
      },
      {
        name: "Gemini",
        Icon: SiReact,
        iconUrl: "/assets/icons/gemini.svg",
        level: 85,
      },
      {
        name: "Midjourney",
        Icon: SiReact,
        iconUrl: "/assets/icons/midjourney.svg",
        level: 72,
      },
    ],
  },
  {
    id: "tools",
    label: "Tools, Ferramentas & IDEs",
    skills: [
      {
        name: "VS Code",
        Icon: SiGithub,
        iconUrl: "/assets/icons/vscode.png",
        level: 92,
      },
      { name: "Git", Icon: SiGit, iconColor: "#F05032", level: 86 },
      { name: "GitHub", Icon: SiGithub, iconColor: "#FFFFFF", level: 86 },
      { name: "Figma", Icon: SiFigma, iconColor: "#F24E1E", level: 82 },
      { name: "Vercel", Icon: SiVercel, iconColor: "#FFFFFF", level: 84 },
      { name: "Postman", Icon: SiPostman, iconColor: "#FF6C37", level: 80 },
      {
        name: "After Effects",
        Icon: SiAdobeaftereffects,
        iconColor: "#9999FF",
        level: 70,
      },
      {
        name: "Visual Studio",
        Icon: SiGit,
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
        level: 68,
      },
      { name: "PyCharm", Icon: SiPycharm, iconColor: "#21D789", level: 68 },
    ],
  },
];
