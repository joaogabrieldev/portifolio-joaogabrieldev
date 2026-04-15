export interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    title: "Briefing & diagnóstico",
    subtitle: "Alinhamento de objetivos",
    body: "Entendemos público, conversões e mensagem. Levantamos referências, restrições técnicas e métricas de sucesso para guiar o restante do projeto com clareza.",
  },
  {
    id: "ux-ui",
    title: "UX / UI & prototipagem",
    subtitle: "Fluxos e interface",
    body: "Estruturamos jornadas, hierarquia visual e consistência de marca. Validamos navegação e estados antes de escrever código, reduzindo retrabalho.",
  },
  {
    id: "dev",
    title: "Desenvolvimento",
    subtitle: "Performance e acessibilidade",
    body: "Implementação em React / Next.js com TypeScript, componentes reutilizáveis, SEO técnico e build otimizado para Core Web Vitals.",
  },
  {
    id: "qa-launch",
    title: "QA & lançamento",
    subtitle: "Entrega contínua",
    body: "Testes em dispositivos reais, ajustes finos, deploy e handoff documentado — para você evoluir o produto com segurança depois do go-live.",
  },
];
