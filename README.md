<div align="center">

# 💼 Portfólio João Gabriel Dev

![Next.js](https://img.shields.io/badge/Next.js-16.1.0-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)

[![Deploy](https://img.shields.io/badge/Deploy-joaogabriel.dev-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://joaogabriel.dev)
[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaogabrielrocha-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)

Portfólio pessoal com foco em front-end moderno, animações avançadas e apresentação de projetos/serviços.

</div>

---

## 📑 Índice

- [🌐 Deploy](#-deploy)
- [📖 Sobre](#-sobre)
- [🧱 Padrões e Fundamentos](#-padrões-e-fundamentos)
- [🛠️ Tecnologias e Bibliotecas](#️-tecnologias-e-bibliotecas)
- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [⚙️ Como rodar localmente](#️-como-rodar-localmente)
- [📌 Evento](#-evento)
- [👨‍💻 Contato](#-contato)

---

## 🌐 Deploy

Projeto em produção:

### 🔗 [https://joaogabriel.dev](https://joaogabriel.dev)

---

## 📖 Sobre

Este repositório contém meu site portfólio, desenvolvido para apresentar:

- projetos reais;
- stack técnica e habilidades;
- serviços/propostas para freelas;
- canais de contato profissional.

### 🖼️ Preview

<div align="center">
  <img src="./public/assets/images/hero-2-alpha.png" alt="Preview da home do portfólio" width="820" />
</div>

<div align="center">
  <img src="./src/assets/thumbs/kino-thumb.png" alt="Thumb de projeto do portfólio" width="260" />
  <img src="./src/assets/thumbs/fintrack-thumb.png" alt="Thumb de projeto Fintrack" width="260" />
  <img src="./src/assets/thumbs/airbnb-thumb.png" alt="Thumb de projeto Airbnb clone" width="260" />
</div>

---

## 🧱 Padrões e Fundamentos

O projeto segue fundamentos importantes de arquitetura front-end:

- **Arquitetura baseada em componentes** (componentes pequenos, reutilizáveis e compostos);
- **Separation of Concerns** (separação entre `sections`, `widgets`, `components`, `pieces`, `utils`);
- **Responsividade mobile-first** com utilitários do Tailwind;
- **Tipagem estática com TypeScript** para maior segurança e manutenção;
- **Organização por domínio visual** (seções de página + widgets de composição);
- **Padronização de código** com ESLint + Prettier.

> Caso este projeto faça parte de algum curso/evento específico, você pode atualizar a seção **Evento** abaixo.

---

## 🛠️ Tecnologias e Bibliotecas

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,vercel,git,vscode" alt="Stack principal" />
</div>

### 🚀 Stack principal

- **Next.js** (`16.1.0`)
- **React** (`19.2.3`)
- **TypeScript** (`^5`)
- **Tailwind CSS** (`^4`)

### 📚 Bibliotecas utilizadas

- **Animações/UI**: `framer-motion`, `motion`, `gsap`, `@gsap/react`, `lottie-react`
- **3D/visual**: `three`, `@react-three/fiber`, `@react-three/drei`, `@splinetool/react-spline`
- **Componentes e acessibilidade**: `@headlessui/react`, `@radix-ui/react-accordion`
- **Carrossel e interação**: `embla-carousel`, `embla-carousel-react`, `react-scroll`
- **Estado/utilitários**: `zustand`, `clsx`, `class-variance-authority`, `tailwind-merge`, `mathjs`
- **Contato/agendamento**: `@calcom/embed-react`
- **Ícones**: `lucide-react`, `react-icons`

### 🧪 Dev tooling

- `eslint`, `eslint-config-next`, `eslint-plugin-simple-import-sort`
- `prettier`, `prettier-plugin-tailwindcss`
- `vitest`, `@vitest/coverage-v8`, `@vitest/browser-playwright`

### 🧩 Ícones das stacks (estilo devicon/simpleicons)

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="44" height="44" alt="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="44" height="44" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="44" height="44" alt="TypeScript" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" width="44" height="44" alt="Tailwind CSS" />
  <img src="https://cdn.simpleicons.org/framer/0055FF" width="44" height="44" alt="Framer Motion" />
  <img src="https://cdn.simpleicons.org/greensock/88CE02" width="44" height="44" alt="GSAP" />
  <img src="https://cdn.simpleicons.org/vercel/000000" width="44" height="44" alt="Vercel" />
</div>

---

## 🗂️ Estrutura do Projeto

```bash
src/
├── app/             # Rotas e layout (Next App Router)
├── layout/          # Blocos de layout principais
├── sections/        # Seções da landing (Hero, About, Process, etc.)
├── widgets/         # Composições complexas de UI
├── components/      # Componentes reutilizáveis
├── pieces/          # Peças menores e especializadas
├── assets/          # Imagens, ícones, thumbs e dados estáticos
├── hooks/           # Hooks customizados
├── lib/             # Helpers compartilhados
└── utils/           # Utilitários gerais
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js 18+
- `pnpm` (recomendado) ou `npm`

### Passos

```bash
git clone https://github.com/joaogabrieldev/portifolio-joaogabrieldev.git
cd portifolio-joaogabrieldev
pnpm install
pnpm dev
```

Aplicação local: `http://localhost:3000`

### Scripts úteis

- `pnpm dev` -> desenvolvimento
- `pnpm build` -> build de produção
- `pnpm start` -> iniciar build
- `pnpm lint` -> validação de código
- `pnpm storybook` -> Storybook local
- `pnpm build-storybook` -> build do Storybook

---

## 📌 Evento

**Evento/curso relacionado:** `não informado no repositório`

> Se quiser, substitua por algo como: `NLW`, `Imersão`, `Bootcamp` ou o nome do curso/evento real.

---

## 👨‍💻 Contato

<div align="center">

### João Gabriel R. Rocha

[![GitHub](https://img.shields.io/badge/GitHub-joaogabrieldev-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joaogabrieldev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaogabrielrocha-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joaogabrielrocha)
[![Portfólio](https://img.shields.io/badge/Site-joaogabriel.dev-0A0A0A?style=for-the-badge&logo=googlechrome&logoColor=white)](https://joaogabriel.dev)

</div>

---

<div align="center">
Feito com ❤️, Next.js e muito café.
</div>
