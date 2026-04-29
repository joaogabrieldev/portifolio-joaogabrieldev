import DesktopFAQ from "@/widgets/Desktop/DesktopFAQ/DesktopFAQ";
import { outfit } from "@/utils/fonts";
import { sectionShell } from "./sectionStyles";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className={`scroll-mt-6 border-black/10 bg-white px-4 py-20 text-black sm:px-8 md:px-12`}
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.2em] text-black/55 uppercase ${outfit.className}`}
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
  );
}
