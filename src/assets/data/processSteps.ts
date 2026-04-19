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
    body: "Entendemos público, conversões e mensagem. Levantamos referências, restrições técnicas e métricas de sucesso para guiar o restante do projeto com clareza.",
  },
  {
    id: "ux-ui",
    phase: "Fase 2",
    title: "UX / UI & prototipagem",
    subtitle: "Fluxos e interface",
    body: "Estruturamos jornadas, hierarquia visual e consistência de marca. Validamos navegação e estados antes de escrever código, reduzindo retrabalho.",
  },
  {
    id: "dev",
    phase: "Fase 3",
    title: "Desenvolvimento",
    subtitle: "Performance e acessibilidade",
    body: "Implementação em React / Next.js com TypeScript, componentes reutilizáveis, SEO técnico e build otimizado para Core Web Vitals.",
  },
  {
    id: "qa-launch",
    phase: "Fase 4",
    title: "QA & lançamento",
    subtitle: "Entrega contínua",
    body: "Testes em dispositivos reais, ajustes finos, deploy e handoff documentado — para você evoluir o produto com segurança depois do go-live.",
  },
];
