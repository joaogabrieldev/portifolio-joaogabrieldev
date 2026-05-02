import Link from "next/link";

import { dmSans, outfit } from "@/utils/fonts";
import {
  emailGmail,
  urlGithub,
  urlLinkedin,
  urlWhatsapp,
} from "@/utils/linksToGo";
import { sectionShell } from "./sectionStyles";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className={`${sectionShell} scroll-mt-6 border-black/10 bg-white pb-28 text-black`}
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
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
          className={`mt-4 max-w-2xl text-base text-black/70 sm:text-lg ${dmSans.className}`}
        >
          Envie uma mensagem com escopo, prazo desejado e referências — retorno
          em até um dia útil com próximos passos e estimativa.
        </p>
        <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${emailGmail}`}
            className={`inline-flex h-12 items-center justify-center rounded-full border border-black/20 bg-black px-8 text-sm font-bold tracking-wide text-white uppercase shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition hover:bg-black/85 ${dmSans.className}`}
          >
            Enviar e-mail
          </a>
          <a
            href={urlWhatsapp}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-black/5 px-8 text-sm font-semibold text-black/85 backdrop-blur-xl transition hover:border-black/25 hover:bg-black/10 ${dmSans.className}`}
          >
            WhatsApp
          </a>
          <Link
            href={urlLinkedin}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-black/5 px-8 text-sm font-semibold text-black/85 backdrop-blur-xl transition hover:border-black/25 hover:bg-black/10 ${dmSans.className}`}
          >
            LinkedIn
          </Link>
          <Link
            href={urlGithub}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-black/5 px-8 text-sm font-semibold text-black/85 backdrop-blur-xl transition hover:border-black/25 hover:bg-black/10 ${dmSans.className}`}
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
