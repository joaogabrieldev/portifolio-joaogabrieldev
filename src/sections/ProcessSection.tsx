"use client";

import ProcessPinnedTimeline, {
  type ProcessStepInfoCard,
} from "@/components/ProcessPinnedTimeline/ProcessPinnedTimeline";
import {
  Clock3,
  Code2,
  Compass,
  FileText,
  Laptop2,
  Palette,
  PenTool,
  Rocket,
  Ruler,
  Target,
  CheckCircle2,
  Zap,
  type LucideIcon,
} from "lucide-react";

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
        icon: FileText,
        title: "Resumo da reunião",
        intro:
          "Tudo que conversamos vira um registro claro que os dois podemos consultar durante o projeto.",
        topics: [
          "O que você quer alcançar e como vamos medir isso",
          "Quem é seu público e onde ele está",
          "O que cabe no projeto, o que fica pra depois e quando entrega",
          "O que ainda precisa de resposta antes de começar",
        ],
      },
      {
        icon: Compass,
        title: "Mapa de referências",
        intro:
          "Uma curadoria visual e estratégica que alinha estética, tom e direção criativa antes de qualquer pixel ser desenhado.",
        topics: [
          "Sites e marcas que te inspiram, organizados com contexto",
          "O que seus concorrentes estão fazendo visualmente",
          "O que o projeto deve transmitir e o que deve evitar",
          "Por que cada referência foi escolhida",
        ],
      },
      {
        icon: Clock3,
        title: "Até 3 dias",
        intro:
          "Um prazo enxuto e respeitado — tempo suficiente para ouvir com atenção, processar e entregar algo concreto.",
        topics: [
          "Reunião de alinhamento no dia 1",
          "Resumo e referências prontos até o dia 3",
          "Você revisa e aprova antes de qualquer coisa avançar",
          "Nenhuma etapa começa sem o seu ok",
        ],
      },
    ],
    "ux-ui": [
      {
        icon: Palette,
        title: "Simulação do projeto",
        intro:
          "Antes de construir, você navega pelo projeto como se já estivesse pronto.",
        topics: [
          "Todos os fluxos principais desenhados do início ao fim",
          "O que acontece quando algo carrega, dá erro ou está vazio",
          "Versões para celular, tablet e computador já testadas",
          "Um link para você explorar e dar feedback no seu tempo",
        ],
      },
      {
        icon: Ruler,
        title: "Identidade visual do projeto",
        intro:
          "Tudo que define a cara do projeto organizado em um lugar só, sem deixar nada solto.",
        topics: [
          "Cores, fontes e espaçamentos escolhidos e documentados",
          "Botões, campos, cards e janelas prontos para reutilizar",
          "Ícones e visual alinhados com a sua marca",
          "Pronto para a construção começar sem precisar adivinhar nada",
        ],
      },
      {
        icon: Clock3,
        title: "3–5 dias",
        intro: "Tempo suficiente para pensar bem antes de construir.",
        topics: [
          "Esboços iniciais nos primeiros dois dias",
          "Versão final navegável entre os dias 3 e 5",
          "Você revisa e sugere ajustes antes de fechar",
          "Nenhuma construção começa sem aprovação visual",
        ],
      },
    ],
    dev: [
      {
        icon: Laptop2,
        title: "Construção do projeto",
        intro:
          "É aqui que o projeto sai do papel e vira algo real, rápido e que funciona de verdade.",
        topics: [
          "Organização clara para facilitar ajustes no futuro",
          "Cada parte do sistema construída para evitar erros silenciosos",
          "Formulários, integrações e painéis configurados e funcionando",
          "Reviso tudo antes de cada entrega, não só no final",
        ],
      },
      {
        icon: Zap,
        title: "Projeto otimizado",
        intro:
          "Um site lento afasta usuário. Por isso velocidade não é detalhe, é padrão.",
        topics: [
          "Imagens e fontes carregando do jeito certo",
          "Nota alta no Google em velocidade e acessibilidade",
          "Seu site aparecendo bem nos buscadores desde o primeiro dia",
          "Erros monitorados e ferramenta de análise configurada se precisar",
        ],
      },
      {
        icon: Clock3,
        title: "Até 10 dias",
        intro:
          "Tempo para construir com cuidado, testar no caminho e entregar sem pressa.",
        topics: [
          "Projeto configurado nos primeiros dias",
          "Cada tela construída e entregue em partes",
          "Você acompanha e aprova ao longo do processo",
          "O prazo pode variar dependendo do tamanho do projeto",
        ],
      },
    ],
    "qa-launch": [
      {
        icon: CheckCircle2,
        title: "Revisão final",
        intro:
          "Nenhum projeto vai ao ar sem passar por tudo. Cada detalhe é testado antes de você ver o resultado final.",
        topics: [
          "Testado nos principais navegadores do mercado",
          "Validado no celular, tablet e computador de verdade",
          "Formulários, links e mensagens de erro todos checados",
          "Lista de ajustes resolvida antes de publicar",
        ],
      },
      {
        icon: Rocket,
        title: "Publicação + entrega",
        intro:
          "Seu projeto no ar, com tudo configurado e nas suas mãos para tocar depois.",
        topics: [
          "Publicado no servidor da sua escolha ou no que eu recomendar",
          "Endereço do site, segurança e configurações técnicas resolvidas",
          "Você recebe acesso a tudo: código, painel de conteúdo e arquivos",
          "Um guia de como mexer no projeto depois que eu sair",
        ],
      },
      {
        icon: Clock3,
        title: "Até 3 dias",
        intro:
          "Um fechamento com calma para garantir que tudo sobe estável.",
        topics: [
          "Testes e correções nos primeiros dois dias",
          "Você valida numa versão de teste antes de publicar",
          "Publicação acompanhada em tempo real",
          "Suporte imediato nos primeiros dias após o lançamento",
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
