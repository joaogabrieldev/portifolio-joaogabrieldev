export type AboutSkill = {
  name: string;
  slug?: string;
  iconUrl?: string;
  iconColor?: string;
  isInline?: boolean;
};

export type AboutSkillGroup = {
  id: string;
  label: string;
  skills: AboutSkill[];
};

export const aboutSkillGroups: AboutSkillGroup[] = [
  {
    id: "frontend",
    label: "Front-end",
    skills: [
      { name: "TypeScript", slug: "typescript" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
    ],
  },
  {
    id: "backend",
    label: "Back-end",
    skills: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Bun", slug: "bun" },
      { name: "Prisma", slug: "prisma" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Drizzle", isInline: true },
    ],
  },
  {
    id: "deployment",
    label: "Deploy & Infra",
    skills: [
      { name: "Vercel", slug: "vercel" },
      { name: "Supabase", slug: "supabase" },
      { name: "Turso", slug: "turso" },
      { name: "Koyeb", isInline: true },
      { name: "BullMQ", iconUrl: "/assets/icons/bullmq.svg" },
    ],
  },
  {
    id: "ai",
    label: "IA & Ferramentas",
    skills: [
      { name: "Claude", isInline: true },
      { name: "Cursor", isInline: true },
      { name: "MCP", isInline: true },
      { name: "RAG" },
      { name: "Git", slug: "git" },
    ],
  },
  {
    id: "designUI",
    label: "Design",
    skills: [
      { name: "Figma", iconUrl: "/assets/icons/figma.png" },
      { name: "Spline", isInline: true },
      { name: "Claude Design", isInline: true },
      { name: "Google Stitch", isInline: true },
      { name: "Framer", slug: "framer" },
    ],
  },
];
