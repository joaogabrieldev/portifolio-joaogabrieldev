"use client";

import { dmSans, outfit } from "@/utils/fonts";
import { urlGithub, urlLinkedin, urlWhatsapp } from "@/utils/linksToGo";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import ContactButton from "@/pieces/ContactButton/ContactButton";
import SendEmailMenu from "@/pieces/SendEmailMenu/SendEmailMenu";

export default function SchedulingSection() {
  const baseCalLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "";
  const normalizedCalLink = baseCalLink.replace(/^\/+|\/+$/g, "");
  const bookingPath = normalizedCalLink.includes("/")
    ? normalizedCalLink
    : `${normalizedCalLink}/30min`;

  return (
    <section
      id="contato"
      className="relative scroll-mt-6 overflow-hidden bg-transparent px-4 py-20 pb-28 text-black sm:px-8 md:px-12"
      aria-labelledby="scheduling-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* LEFT — Contact info */}
          <div className="flex flex-col lg:w-[380px] lg:shrink-0">
            <p
              className={`mb-3 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
            >
              Contato
            </p>
            <h2
              id="scheduling-heading"
              className={`text-3xl font-semibold tracking-tight text-black sm:text-4xl ${outfit.className}`}
            >
              Vamos conversar sobre o seu projeto.
            </h2>
            <p
              className={`mt-4 text-base text-black sm:text-lg ${dmSans.className}`}
            >
              Escolha um horário no calendário ou, se preferir algo mais rápido,
              manda uma mensagem direta.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              <SendEmailMenu />
              <ContactButton
                href={urlWhatsapp}
                label="WhatsApp"
                icon={<SiWhatsapp className="size-4.5 shrink-0" aria-hidden />}
              />
              <div className="flex gap-3">
                <ContactButton
                  className="flex-1"
                  href={urlLinkedin}
                  label="LinkedIn"
                  icon={
                    <SiLinkedin className="size-4.5 shrink-0" aria-hidden />
                  }
                />
                <ContactButton
                  className="flex-1"
                  href={urlGithub}
                  label="GitHub"
                  icon={<SiGithub className="size-4.5 shrink-0" aria-hidden />}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Cal.com embed */}
          <div className="min-h-[720px] min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#d0d4e8]">
            <iframe
              title="Agendamento Cal.com"
              src={`https://app.cal.com/${bookingPath}?layout=month_view&theme=light`}
              className="h-full min-h-[720px] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
