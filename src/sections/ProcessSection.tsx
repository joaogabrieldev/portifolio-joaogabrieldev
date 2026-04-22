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
const PROCESS_STEP_INFO_CARDS: Partial<Record<string, ProcessStepInfoCard[]>> =
  {
    briefing: [
      {
        icon: "📄",
        title: "Documento de briefing",
        intro:
          "Tudo que foi dito na reunião, transformado em um registro objetivo que guia cada decisão do projeto.",
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
        title: "~ 3 dias",
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
        intro:
          "Uma versão interativa do projeto no Figma que permite sentir o fluxo, testar decisões e validar ideias antes de virar código.",
        topics: [
          "Fluxos principais de navegação desenhados ponta a ponta",
          "Estados de interação mapeados (hover, loading, erro, vazio)",
          "Responsividade validada em desktop, tablet e mobile",
          "Link de preview para revisão e feedback do cliente",
        ],
      },
      {
        icon: "📐",
        title: "UI kit & tokens",
        intro:
          "A base visual do projeto organizada em um sistema consistente, pronta para ser consumida pelo desenvolvimento sem ambiguidade.",
        topics: [
          "Paleta de cores, tipografia e escalas de espaçamento definidas",
          "Componentes reutilizáveis (botões, inputs, cards, modais)",
          "Ícones, ilustrações e tom visual alinhados à marca",
          "Tokens prontos para integrar com Tailwind, CSS ou design system",
        ],
      },
      {
        icon: "⏱",
        title: "~ 5–8 dias",
        intro:
          "Uma janela focada para pensar a interface com calma, validar com o cliente e evitar retrabalho na fase de desenvolvimento.",
        topics: [
          "Wireframes de baixa fidelidade nos primeiros dois dias",
          "Alta fidelidade e protótipo navegável entre os dias 3 e 6",
          "Ciclos de revisão com o cliente incluídos no prazo",
          "Aprovação visual antes de iniciar a fase de código",
        ],
      },
    ],
    dev: [
      {
        icon: "💻",
        title: "Código em produção",
        intro:
          "Implementação robusta em React / Next.js com TypeScript, componentes reutilizáveis e uma arquitetura pensada para durar.",
        topics: [
          "Estrutura de pastas clara e componentes desacoplados",
          "Tipagem estrita do TypeScript nos fluxos críticos",
          "Integrações com APIs, CMS e formulários já configuradas",
          "Code review interno antes de cada entrega parcial",
        ],
      },
      {
        icon: "⚡",
        title: "Build otimizado",
        intro:
          "Um site rápido por padrão, com boas métricas de Core Web Vitals e SEO técnico cuidado desde a primeira linha de código.",
        topics: [
          "Imagens otimizadas, lazy loading e fontes sob controle",
          "Score alto no Lighthouse em performance e acessibilidade",
          "Meta tags, Open Graph e sitemap configurados",
          "Monitoramento básico de erros e analytics opcional",
        ],
      },
      {
        icon: "⏱",
        title: "~ 10–15 dias",
        intro:
          "Tempo para escrever código com calma, testar no caminho e não entregar nada que não passaria no seu próprio aceite.",
        topics: [
          "Setup inicial do projeto e integrações nos primeiros dias",
          "Desenvolvimento incremental das telas principais",
          "Ajustes visuais e revisões a cada entrega parcial",
          "Varia conforme escopo e quantidade de telas e integrações",
        ],
      },
    ],
    "qa-launch": [
      {
        icon: "✅",
        title: "Relatório de QA",
        intro:
          "Uma passagem minuciosa por cada fluxo, dispositivo e breakpoint para pegar o que escapou antes do site ir ao ar.",
        topics: [
          "Testes em Chrome, Firefox, Safari e Edge atualizados",
          "Validação em mobile, tablet e desktop em tamanhos reais",
          "Checagem de formulários, links e estados de erro",
          "Lista de ajustes finos aplicada antes da publicação",
        ],
      },
      {
        icon: "🚀",
        title: "Deploy + handoff",
        intro:
          "O projeto no ar com ambiente configurado, domínio apontado e a documentação que você precisa para tocar sozinho depois.",
        topics: [
          "Deploy em Vercel, Netlify ou ambiente da sua preferência",
          "Configuração de domínio, DNS e HTTPS concluída",
          "Acesso ao repositório, CMS e painéis entregue ao cliente",
          "Documentação de como editar conteúdos e rodar localmente",
        ],
      },
      {
        icon: "⏱",
        title: "~ 3–5 dias",
        intro:
          "Um fechamento sem pressa, com tempo para testar, ajustar e garantir que tudo sobe estável no dia combinado.",
        topics: [
          "QA completo e correções aplicadas nos primeiros dois dias",
          "Deploy de staging para validação final do cliente",
          "Publicação em produção com acompanhamento em tempo real",
          "Período de suporte imediato pós-lançamento incluído",
        ],
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
