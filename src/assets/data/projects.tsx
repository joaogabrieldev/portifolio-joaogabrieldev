import { JSX } from "react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVercel,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiVite
} from "react-icons/si";

export type Projects = {
  url: string;
  title: string;
  date: string;
  description: string;
  icons: JSX.Element[];
};

export const projects: Projects[] = [
  {
    url: "https://projeto-airbnb.vercel.app/",
    title: "Clone do Airbnb",
    date: "14/11/2025",
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
    description:
      "Este projeto é uma réplica da interface do Medium, construída do zero. Ele demonstra minha capacidade de pegar um design complexo e transformá-lo em uma página web real, com atenção minuciosa ao alinhamento, espaçamento e hierarquia das informações.",
    icons: [
      <SiHtml5 key={"HTML"} />,
      <SiCss3 key={"CSS"} />,
      <SiJavascript key={"Javascript"} />,
      <SiVercel key={"Vercel"} />,
    ],
  },
  {
    url: "https://projeto-landing-page-ashy.vercel.app/",
    title: "Landing Page Base",
    date: "06/12/2025",
    description:
      "Uma 'vitrine digital' de alta performance. Este projeto combina um visual moderno e organizado com uma velocidade impressionante: o site carrega instantaneamente e responde de imediato aos comandos. O objetivo foi criar uma experiência de navegação 'premium', garantindo estabilidade e fluidez, exatamente como um site profissional deve ser.",
    icons: [
      <SiReact key={"React"} />,
      <SiTailwindcss key={"TailwindCSS"} />,
      <SiTypescript key={"Typescript"} />,
      <SiVite key={"Vite"} />,
      <SiVercel key={"Vercel"} />,
    ],
  }
];
