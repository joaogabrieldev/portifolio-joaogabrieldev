# TODO — portfólio

Backlog curto e acionável. Marcar itens concluídos ao fechar cada tarefa.

---

## Prioridade

### 1. Transição “burn” entre Projetos e Processos + bloco monocromático

**Objetivo:** Inserir `BurnTransition` entre a secção de **projetos** e a de **processos**, com uma faixa de **copy** (CTA) que também seja revelada pela transição; a partir da secção de **processos**, aplicar **inversão de cores para paleta branco e preto** (nesta ordem visual: fundo branco, texto/elementos em preto — ajustar detalhes de contraste e bordas ao implementar).

**Onde encaixar no layout**

- Ordem no DOM sugerida: `ProjectsSection` → **wrapper com transição** (copy + início do conteúdo que “queima”) → `ProcessSection` e restante fluxo, ou composição equivalente em `src/widgets/Desktop/SiteSections/SiteSections.tsx`.
- Copy tipo *“Deseja me contratar?”* (ou variação próxima) pode viver **no próprio `SiteSections`** (bloco dedicado antes de `ProcessSection`) **ou** no início de `src/sections/ProcessSection.tsx`, desde que o **mesmo grupo** seja filho de `BurnTransition` para a animação englobar copy + entrada na secção de processos.

**Implementação (checklist)**

- [ ] Envolver o trecho adequado com `BurnTransition` (`src/components/BurnTransition/BurnTransition.tsx`), passando `children` que inclua a **copy** e o **começo** da zona que muda para branco/preto.
- [ ] Definir tema **branco + preto** a partir de `#processos` (ou wrapper da secção): fundos, tipografia, bordas e ícones da timeline (`ProcessPinnedTimeline` / `ProcessSection`) coerentes com o novo contraste.
- [ ] Garantir que secções **após** processos (planos, FAQ, contacto) ou voltem ao tema escuro global ou mantenham regra explícita — documentar decisão no PR/commit.
- [ ] Testar com scroll/Lenis e altura real do bloco; evitar `overflow` que corte a máscara do burn.
- [ ] Rever acessibilidade (contraste WCAG no tema claro).

**Referências rápidas**

- Transição: `src/components/BurnTransition/BurnTransition.tsx`
- Ordem das secções: `src/widgets/Desktop/SiteSections/SiteSections.tsx`
- Processos: `src/sections/ProcessSection.tsx`, `src/components/ProcessPinnedTimeline/ProcessPinnedTimeline.tsx`
- Projetos: `src/sections/ProjectsSection.tsx`

---

## Backlog (próximas)

_(Adicionar tarefas abaixo conforme necessário.)_
