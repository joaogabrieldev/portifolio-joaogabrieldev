"use client";

import ProcessPinnedTimeline, {
  type ProcessStepInfoCard,
} from "@/components/ProcessPinnedTimeline/ProcessPinnedTimeline";
import { Code2, PenTool, Rocket, Target, type LucideIcon } from "lucide-react";

/** Lucide por etapa (`processSteps.ts`): briefing, UX/UI, dev, go-live. */
const PROCESS_STEP_ICONS: Record<string, LucideIcon> = {
  briefing: Target,
  "ux-ui": PenTool,
  dev: Code2,
  "qa-launch": Rocket,
};

/** Mini cards informativos por etapa (só o step ativo exibe os do seu `id`). */
const PROCESS_STEP_INFO_CARDS: Partial<
  Record<string, ProcessStepInfoCard[]>
> = {
  briefing: [
    {
      icon: "📄",
      title: "Documento de briefing",
      intro:
        "Tudo o que foi dito na reunião, organizado em um registro claro que serve de bússola para todo o projeto.",
      topics: [
        "Objetivos do projeto e métricas de sucesso definidas",
        "Perfil do público-alvo e contexto de mercado",
        "Restrições técnicas, prazos e escopo acordado",
        "Perguntas em aberto e próximos passos mapeados",
      ],
    },
    {
      icon: "🗺️",
      title: "Mapa de referências",
      intro:
        "Uma curadoria visual e estratégica que alinha estética, tom e direção criativa antes de qualquer pixel ser desenhado.",
      topics: [
        "Referências visuais selecionadas com base no seu posicionamento",
        "Análise de concorrentes diretos e indiretos",
        "Paleta de mood: o que deve transmitir e o que deve evitar",
        "Anotações justificando cada escolha de referência",
      ],
    },
    {
      icon: "⏱",
      title: "~3 dias",
      intro:
        "Um prazo enxuto e respeitado — tempo suficiente para ouvir com atenção, processar e entregar algo concreto.",
      topics: [
        "Reunião de briefing realizada no dia 1",
        "Documento e mapa de referências entregues até o dia 3",
        "Janela de ajustes e validação incluída no prazo",
        "Aprovação do cliente antes de avançar para a próxima etapa",
      ],
    },
  ],
  "ux-ui": [
    {
      icon: "🎨",
      title: "Protótipo navegável",
      subtext: "Fluxos e telas validadas no Figma",
    },
    {
      icon: "📐",
      title: "UI kit & tokens",
      subtext: "Cores, tipos e componentes para o dev",
    },
    {
      icon: "⏱",
      title: "~5–8 dias",
      subtext: "Duração estimada",
    },
  ],
  dev: [
    {
      icon: "💻",
      title: "Código em produção",
      subtext: "Next.js, TypeScript e componentes reutilizáveis",
    },
    {
      icon: "⚡",
      title: "Build otimizado",
      subtext: "SEO técnico e Core Web Vitals",
    },
    {
      icon: "⏱",
      title: "~10–15 dias",
      subtext: "Varia com o escopo",
    },
  ],
  "qa-launch": [
    {
      icon: "✅",
      title: "Relatório de QA",
      subtext: "Browsers, breakpoints e ajustes finos",
    },
    {
      icon: "🚀",
      title: "Deploy + handoff",
      subtext: "Ambiente no ar e documentação",
    },
    {
      icon: "⏱",
      title: "~3–5 dias",
      subtext: "Duração estimada",
    },
  ],
};

export default function ProcessSection() {
  return (
    <ProcessPinnedTimeline
      stepIcons={PROCESS_STEP_ICONS}
      stepInfoCards={PROCESS_STEP_INFO_CARDS}
    />
  );
}
