import DesktopFAQ from "@/widgets/Desktop/DesktopFAQ/DesktopFAQ";
import { outfit } from "@/utils/fonts";

export default function FAQSection() {
  return (
    <section
      id="faq"
      className={`relative scroll-mt-6 overflow-hidden border-black/10 bg-transparent px-4 py-20 text-black sm:px-8 md:px-12`}
      aria-labelledby="faq-heading"
    >
      <div className="relative mx-auto max-w-6xl">
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
