import Link from "next/link";

import { dmSans, outfit } from "@/utils/fonts";
import { emailGmail, urlGithub, urlLinkedin, urlWhatsapp } from "@/utils/linksToGo";
import { sectionShell } from "./sectionStyles";

export default function ContactSection() {
  return (
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
          Envie uma mensagem com escopo, prazo desejado e referências — retorno
          em até um dia útil com próximos passos e estimativa.
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
  );
}
