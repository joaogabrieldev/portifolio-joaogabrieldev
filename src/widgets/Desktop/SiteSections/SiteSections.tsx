"use client";

import Link from "next/link";

import { plans } from "@/assets/data/plans";
import { projects } from "@/assets/data/projects";
import PlanCard from "@/components/PlanCard/PlanCard";
import ProcessPinnedTimeline from "@/components/ProcessPinnedTimeline/ProcessPinnedTimeline";
import DesktopFAQ from "@/widgets/Desktop/DesktopFAQ/DesktopFAQ";
import { dmSans, outfit } from "@/utils/fonts";
import {
  emailGmail,
  urlGithub,
  urlLinkedin,
  urlWhatsapp,
} from "@/utils/linksToGo";

const sectionShell =
  "border-t border-white/10 bg-[#0a0a0a] px-4 py-20 text-white sm:px-8 md:px-12";

export default function SiteSections() {
  return (
    <div className="relative z-20 bg-[#050505]">
      <section
        id="sobre"
        className={`${sectionShell} scroll-mt-6`}
        aria-labelledby="sobre-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            Sobre
          </p>
          <h2
            id="sobre-heading"
            className={`max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${outfit.className}`}
          >
            Engenharia de produto digital com foco em performance e clareza.
          </h2>
          <div
            className={`mt-8 grid max-w-4xl gap-6 text-base leading-relaxed text-white/78 sm:text-lg ${dmSans.className}`}
          >
            <p>
              Trabalho com React, Next.js e TypeScript para entregar interfaces
              rápidas, acessíveis e fáceis de evoluir — do discovery ao deploy,
              com comunicação objetiva e entregas previsíveis.
            </p>
            <p>
              Cada projeto equilibra estética, SEO técnico e métricas de
              experiência, para que sua presença online converta visitantes em
              contatos reais, sem sacrificar velocidade ou manutenção.
            </p>
          </div>
        </div>
      </section>

      <ProcessPinnedTimeline />

      <section
        id="planos"
        className={`${sectionShell} scroll-mt-6`}
        aria-labelledby="planos-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            Planos
          </p>
          <h2
            id="planos-heading"
            className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
          >
            Escolha o pacote que combina com o estágio do seu negócio.
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                originalPrice={plan.originalPrice}
                emphasis={plan.emphasis}
                description={plan.description}
                recommendation={plan.recommendation}
                beneficts={plan.beneficts}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className={`${sectionShell} scroll-mt-6`}
        aria-labelledby="projetos-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            Projetos
          </p>
          <h2
            id="projetos-heading"
            className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
          >
            Seleção de trabalhos recentes.
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title}>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_48px_rgba(0,0,0,0.35)] transition hover:border-violet-400/35 hover:bg-white/[0.07]"
                >
                  <span
                    className={`text-lg font-semibold text-white group-hover:text-violet-200 ${outfit.className}`}
                  >
                    {project.title}
                  </span>
                  <span
                    className={`mt-1 text-xs text-white/45 ${dmSans.className}`}
                  >
                    {project.date}
                  </span>
                  <p
                    className={`mt-4 flex-1 text-sm leading-relaxed text-white/72 ${dmSans.className}`}
                  >
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-violet-200/90">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="text-lg [&_svg]:block">
                        {icon}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="faq"
        className={`${sectionShell} scroll-mt-6`}
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            FAQ
          </p>
          <h2
            id="faq-heading"
            className={`mb-12 text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
          >
            Perguntas frequentes.
          </h2>
          <DesktopFAQ />
        </div>
      </section>

      <section
        id="contato"
        className={`${sectionShell} scroll-mt-6 pb-28`}
        aria-labelledby="contato-heading"
      >
        <div className="mx-auto max-w-6xl">
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${outfit.className}`}
          >
            Contato
          </p>
          <h2
            id="contato-heading"
            className={`text-3xl font-semibold tracking-tight sm:text-4xl ${outfit.className}`}
          >
            Vamos conversar sobre o seu próximo site.
          </h2>
          <p
            className={`mt-4 max-w-2xl text-base text-white/75 sm:text-lg ${dmSans.className}`}
          >
            Envie uma mensagem com escopo, prazo desejado e referências —
            retorno em até um dia útil com próximos passos e estimativa.
          </p>
          <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${emailGmail}`}
              className={`inline-flex h-12 items-center justify-center rounded-full border border-violet-400/25 bg-[#413b72] px-8 text-sm font-bold tracking-wide text-white uppercase shadow-[0_8px_24px_rgba(65,59,114,0.45)] transition hover:border-violet-300/35 hover:bg-[#4f4790] ${dmSans.className}`}
            >
              Enviar e-mail
            </a>
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-8 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10 ${dmSans.className}`}
            >
              WhatsApp
            </a>
            <Link
              href={urlLinkedin}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-8 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10 ${dmSans.className}`}
            >
              LinkedIn
            </Link>
            <Link
              href={urlGithub}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/6 px-8 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10 ${dmSans.className}`}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
