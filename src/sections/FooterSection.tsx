"use client";

import {
  urlGithub,
  urlLinkedin,
  urlMailtoApp,
  urlWhatsapp,
} from "@/utils/linksToGo";
import { dmSans, outfit } from "@/utils/fonts";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import Image from "next/image";

const SITE_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

const QUICK_LINKS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
] as const;

const CONTACT_LINKS = [
  {
    href: urlMailtoApp,
    label: "Email",
    icon: MdOutlineEmail,
  },
  {
    href: urlLinkedin,
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    href: urlGithub,
    label: "GitHub",
    icon: SiGithub,
  },
  {
    href: urlWhatsapp,
    label: "WhatsApp",
    icon: SiWhatsapp,
  },
] as const;

import logoBlack from "@/assets/images/new-logo-black.png";

const SOCIAL_ICON_CLASS = "size-4.5";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 pb-20 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-10">
          {/* Marca */}
          <div className="col-span-2 flex flex-col sm:col-span-1">
            <div
              className={`flex flex-row items-center gap-2 text-lg font-semibold tracking-tight text-black ${outfit.className}`}
            >
              <Image
                src={logoBlack}
                alt="João Gabriel"
                width={32}
                height={32}
              />
              <span>João Gabriel</span>
            </div>
            <p
              className={`mt-3 max-w-sm text-sm leading-relaxed text-black/55 ${dmSans.className}`}
            >
              Desenvolvimento web com foco em performance, clareza e resultados
              para o seu negócio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={urlLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-black/55 transition-colors hover:text-black"
                aria-label="LinkedIn"
              >
                <SiLinkedin className={SOCIAL_ICON_CLASS} aria-hidden />
              </a>
              <a
                href={urlGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-black/55 transition-colors hover:text-black"
                aria-label="GitHub"
              >
                <SiGithub className={SOCIAL_ICON_CLASS} aria-hidden />
              </a>
              <a
                href={urlWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-black/10 text-black/55 transition-colors hover:text-black"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className={SOCIAL_ICON_CLASS} aria-hidden />
              </a>
            </div>
          </div>

          {/* Site */}
          <nav aria-label="Navegação do site">
            <p
              className={`text-xs font-semibold tracking-[0.15em] text-black/40 uppercase ${outfit.className}`}
            >
              Site
            </p>
            <ul className={`mt-4 flex flex-col gap-2.5 ${dmSans.className}`}>
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-black/55 transition-colors hover:text-black"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <p
              className={`text-xs font-semibold tracking-[0.15em] text-black/40 uppercase ${outfit.className}`}
            >
              Links rápidos
            </p>
            <ul className={`mt-4 flex flex-col gap-2.5 ${dmSans.className}`}>
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href + label}>
                  <a
                    href={href}
                    className="text-sm text-black/55 transition-colors hover:text-black"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="col-span-2 sm:col-span-1">
            <p
              className={`text-xs font-semibold tracking-[0.15em] text-black/40 uppercase ${outfit.className}`}
            >
              Contato
            </p>
            <ul className={`mt-4 flex flex-col gap-3 ${dmSans.className}`}>
              {CONTACT_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2.5 text-sm text-black/55 transition-colors hover:text-black"
                  >
                    <Icon
                      className="size-4 shrink-0 text-black/45"
                      aria-hidden
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-14 flex flex-col gap-3 border-t border-black/8 pt-8 sm:flex-row sm:items-center sm:justify-between ${dmSans.className}`}
        >
          <p className="text-xs text-black/75">
            © {year} João Gabriel. Todos os direitos reservados.
          </p>
          <p className="text-xs text-black/75">
            Feito com 🖤
          </p>
        </div>
      </div>
    </footer>
  );
}
