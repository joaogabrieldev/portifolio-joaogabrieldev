export interface ProcessStep {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    phase: "Fase 1",
    title: "Briefing & diagnóstico",
    subtitle: "Alinhamento de objetivos",
    body: "Antes de qualquer decisão, entendemos o que você quer alcançar, quem é seu público e o que o projeto precisa resolver. Saímos com um escopo claro e um ponto de partida sólido.",
  },
  {
    id: "ux-ui",
    phase: "Fase 2",
    title: "UX / UI & prototipagem",
    subtitle: "Fluxos e interface",
    body: "Desenhamos como o projeto vai funcionar antes de construir qualquer coisa. Você navega pela simulação, aprova o que faz sentido e só depois o desenvolvimento começa.",
  },
  {
    id: "dev",
    phase: "Fase 3",
    title: "Desenvolvimento",
    subtitle: "Performance e acessibilidade",
    body: "Com o design aprovado, construímos cada parte com atenção à velocidade, ao comportamento em celular e à facilidade de manutenção futura.",
  },
  {
    id: "qa-launch",
    phase: "Fase 4",
    title: "QA & lançamento",
    subtitle: "Entrega contínua",
    body: "Testamos tudo em dispositivos reais antes de publicar. Você valida, a gente ajusta e o projeto vai ao ar com tudo documentado para você tocar sozinho depois.",
  },
];
