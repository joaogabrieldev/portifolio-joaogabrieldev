import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { Sailboat } from "lucide-react";
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
  SiGoogle,
  SiKoyeb,
  SiRender,
  SiHeroku,
  SiHostinger,
  SiSupabase,
  SiSqlite,
  SiTurso,
} from "react-icons/si";

export type AboutSkill = {
  name: string;
  Icon: IconType | LucideIcon;
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
    | "designUI"
    | "database"
    | "extras"
    | "deployment"
    | "ai"
    | "tools";
  label: string;
  skills: AboutSkill[];
};

export const aboutSkillGroups: AboutSkillGroup[] = [
  // {
  //   id: "stackBase",
  //   label: "Stack Base",
  //   skills: [
  //     { name: "HTML", Icon: SiHtml5, iconColor: "#E34F26", level: 100 },
  //     { name: "CSS", Icon: SiCss3, iconColor: "#1572B6", level: 100 },
  //     {
  //       name: "JavaScript",
  //       Icon: SiJavascript,
  //       iconColor: "#F7DF1E",
  //       level: 100,
  //     },
  //   ],
  // },
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
        level: 90,
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
    ],
  },
  {
    id: "database",
    label: "Banco de Dados",
    skills: [
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
        name: "MySQL",
        Icon: SiMysql,
        iconUrl: "/assets/icons/mysql.svg",
        iconColor: "#4479A1",
        level: 100,
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        iconColor: "#4169E1",
        level: 90,
      },
      {
        name: "SQLite",
        Icon: SiSqlite,
        iconColor: "#FFF",
        level: 90,
      },
      {
        name: "MongoDB",
        Icon: SiMongodb,
        iconColor: "#47A248",
        level: 95,
      },
      {
        name: "Redis",
        Icon: SiReact,
        iconUrl: "/assets/icons/redis.png",
        level: 80,
      },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    skills: [
      { name: "Vite", Icon: SiVite, iconColor: "#646CFF", level: 90 },
      { name: "Next.js", Icon: SiNextdotjs, iconColor: "#FFFFFF", level: 100 },
      { name: "Astro", Icon: SiAstro, iconColor: "#FF5D01", level: 60 },
    ],
  },
  {
    id: "deployment",
    label: "Deploy",
    skills: [
      { name: "Vercel", Icon: SiVercel, iconColor: "#FFFFFF", level: 100 },
      { name: "Koyeb", Icon: SiKoyeb, iconColor: "#FFFFFF", level: 100 },
      // {
      //   name: "Hostinger",
      //   Icon: SiHostinger,
      //   iconColor: "#FFFFFF",
      //   level: 100,
      // },
      { name: "Render", Icon: SiRender, iconColor: "#FFFFFF", level: 70 },
      { name: "Heroku", Icon: SiHeroku, iconColor: "#FFFFFF", level: 60 },
    ],
  },
  {
    id: "designUI",
    label: "Design & UI/UX",
    skills: [
      {
        name: "Figma",
        Icon: SiFigma,
        iconUrl: "/assets/icons/figma.png",
        iconColor: "#F24E1E",
        level: 95,
      },
      {
        name: "Claude Design",
        Icon: SiClaude,
        iconColor: "#D97757",
        level: 90,
      },
      {
        name: "Google Stitch",
        Icon: SiGoogle,
        iconUrl: "/assets/icons/google.png",
        iconColor: "#4285F4",
        level: 90,
      },
      {
        name: "After Effects",
        Icon: SiAdobeaftereffects,
        iconColor: "#9999FF",
        level: 100,
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
        level: 90,
      },
      {
        name: "Cursor",
        Icon: SiReact,
        iconUrl: "/assets/icons/cursor.png",
        level: 95,
      },
      {
        name: "Gemini",
        Icon: SiReact,
        iconUrl: "/assets/icons/gemini.png",
        level: 100,
      },
      {
        name: "Midjourney",
        Icon: Sailboat,
        iconColor: "#FFFFFF",
        level: 80,
      },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    skills: [
      { name: "Python", Icon: SiPython, iconColor: "#3776AB", level: 60 },
      {
        name: "FastAPI",
        Icon: SiFastapi,
        iconColor: "#009688",
        level: 45,
      },
    ],
  },
  {
    id: "infra",
    label: "Infraestrutura & DevOps",
    skills: [
      {
        name: "BullMQ",
        Icon: SiNodedotjs,
        iconUrl: "/assets/icons/bullmq.svg",
        level: 80,
      },
      {
        name: "Redis",
        Icon: SiReact,
        iconUrl: "/assets/icons/redis.png",
        level: 80,
      },
      {
        name: "Supabase",
        Icon: SiSupabase,
        iconColor: "#3ECF8E",
        level: 90,
      },
      {
        name: "Turso",
        Icon: SiTurso,
        iconColor: "#4DA8A9",
        level: 90,
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
        level: 100,
      },
      { name: "Git", Icon: SiGit, iconColor: "#F05032", level: 95 },
      { name: "GitHub", Icon: SiGithub, iconColor: "#FFFFFF", level: 95 },
      { name: "Postman", Icon: SiPostman, iconColor: "#FF6C37", level: 85 },
      {
        name: "Visual Studio",
        Icon: SiGit,
        iconUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
        level: 65,
      },
      { name: "PyCharm", Icon: SiPycharm, iconColor: "#21D789", level: 65 },
    ],
  },
];
