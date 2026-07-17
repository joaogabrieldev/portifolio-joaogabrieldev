import { StaticImageData } from "next/image";
import { JSX } from "react";
import fintrackThumb from "@/assets/thumbs/fintrack-thumb.png";
import airbnbThumb from "@/assets/thumbs/airbnb-thumb.png";
import formiguinhasThumb from "@/assets/thumbs/formiguinhas-thumb.png";
import mediumThumb from "@/assets/thumbs/medium-thumb.png";
import kinoThumb from "@/assets/thumbs/kino-thumb.png";
import landingPageBaseThumb from "@/assets/thumbs/landing-page-base-thumb.png";

import {
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVercel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiSupabase,
  SiStripe,
  SiDrizzle,
  SiPostgresql,
  SiNodedotjs,
  SiFastify,
  SiZod, 
  SiRedis
} from "react-icons/si";

export type Projects = {
  url: string;
  title: string;
  projectImage?: StaticImageData | string;
  date: string;
  description: string;
  icons: JSX.Element[];
  repoUrl?: string;
  collaborators?: { name: string; url?: string }[];
};

export const projects: Projects[] = [
   {
    url: "https://sempreporperto.com.br/",
    title: "Landing Page - SemprePorPerto",
    date: "31/05/2026",
    // projectImage: fintrackThumb,
    description:
    "Landing page de captação de leads pré-lançamento do SemprePorPerto, app de gestão de medicamentos para idosos. Voltada ao familiar/cuidador, apresenta o problema com dados, as funcionalidades do produto e um formulário de duplo campo obrigatório (e-mail + WhatsApp) com validação em tempo real via React Hook Form + Zod, normalização E.164 de números brasileiros e proteção anti-duplicata. Os leads são persistidos em PostgreSQL (Supabase) via Drizzle ORM e disparam automações de e-mail e WhatsApp em fila (BullMQ), com rate limiting em Redis (Upstash) e templates de mensagem editáveis sem redeploy. Instrumentada com Google Analytics 4 (generate_lead) e Meta Pixel (Lead) para medição de CPL em tráfego pago, com meta de carregamento abaixo de 3 segundos em 4G.",
    icons: [
      <SiNextdotjs key={"Next"} />,
      <SiReact key={"React"} />,
      <SiTypescript key={"Typescript"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiZod key={"Zod"} />,
      <SiDrizzle key={"Drizzle"} />,
      <SiSupabase key={"Supabase"} />,
      <SiRedis key={"Redis"} />,
      <SiVercel key={"Vercel"} />,
    ],
  },
  {
    url: "fintrack-omega-snowy.vercel.app",
    title: "Projeto - FinTrack (MVP)",
    date: "11/04/2026",
    projectImage: fintrackThumb,
    description:
      "Aplicação web multi-usuário para gestão de finanças pessoais, com autenticação segura, CRUD de gastos, categorias customizadas, orçamentos por categoria, metas de economia e dashboard interativo com gráficos e alertas visuais. Desenvolvido com Next.js, TypeScript, Tailwind, shadcn/ui, Drizzle + SQLite e Auth.js, com foco em performance, simplicidade de arquitetura e experiência responsiva.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiNextdotjs key={"Next"} />,
      <SiDrizzle key={"Drizzle"} />,
      <SiSqlite key={"SQLite"} />,
      <SiNodedotjs key={"Node.js"} />,
      <SiFastify key={"Fastify"} />,
    ],
  },
  {
    url: "https://www.formiguinhasdaalegria.com.br",
    title: "Site - Formiguinhas da Alegria",
    date: "26/03/2026",
    projectImage: formiguinhasThumb,
    description:
      "Site institucional da ONG Formiguinhas da Alegria, com o objetivo de divulgar a causa e ajudar a causa a alcançar mais pessoas.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiNextdotjs key={"Next"} />,
      <SiVercel key={"Vercel"} />,
      <SiSupabase key={"Supabase"} />,
      <SiStripe key={"Stripe"} />,
      <SiDrizzle key={"Drizzle"} />,
      <SiPostgresql key={"PostgreSQL"} />,
      <SiNodedotjs key={"Node.js"} />,
      <SiFastify key={"Fastify"} />,
    ],
  },
  {
    url: "https://projeto-kino.vercel.app/",
    title: "Projeto - Kino",
    date: "08/02/2026",
    projectImage: kinoThumb,
    description:
      "Projeto desenvolvido APENAS PARA ESTUDO: catálogo de filmes e séries integrado à API do TMDB, com busca em tempo real, páginas de detalhes, carrosséis interativos e suporte a tema claro/escuro. Construído com Next.js, React, TypeScript e Tailwind CSS, focando em organização de arquitetura, responsividade e performance.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiNextdotjs key={"Next"} />,
      <SiVercel key={"Vercel"} />,
    ],
    repoUrl: "https://github.com/joaogabrieldev/projeto-kino",
  },
  {
    url: "https://projeto-landing-page-ashy.vercel.app/",
    title: "Landing Page Base",
    date: "06/12/2025",
    projectImage: landingPageBaseThumb,
    description:
      "Uma 'vitrine digital' de alta performance. Este projeto combina um visual moderno e organizado com uma velocidade impressionante: o site carrega instantaneamente e responde de imediato aos comandos. O objetivo foi criar uma experiência de navegação 'premium', garantindo estabilidade e fluidez, exatamente como um site profissional deve ser.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiVite key={"Vite"} />,
      <SiVercel key={"Vercel"} />,
    ],
  },
  {
    url: "https://projeto-airbnb.vercel.app/",
    title: "Clone do Airbnb",
    date: "14/11/2025",
    projectImage: airbnbThumb,
    description:
      "Clone da Interface Principal do site Airbnb, utilizando as melhores práticas de design e performance, e as tecnologias mais modernas do mercado.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiNextdotjs key={"Next"} />,
      <SiVercel key={"Vercel"} />,
    ],
  },
  {
    url: "https://projeto-medium.vercel.app/",
    title: "Clone do Medium",
    date: "01/10/2025",
    projectImage: mediumThumb,
    description:
      "Este projeto é uma réplica da interface do Medium, construída do zero. Ele demonstra minha capacidade de pegar um design complexo e transformá-lo em uma página web real, com atenção minuciosa ao alinhamento, espaçamento e hierarquia das informações.",
    icons: [
      <SiHtml5 key={"HTML"} />,
      <SiCss3 key={"CSS"} />,
      <SiJavascript key={"Javascript"} />,
      <SiVercel key={"Vercel"} />,
    ],
  },
];
