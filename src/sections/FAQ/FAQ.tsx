import { questions } from "@/assets/data/faq";
import NonDesktopFAQ from "@/components/Mobile/NonDesktopFAQ/NonDesktopFAQ";
import QuestionBlock from "@/components/QuestionBlock/QuestionBlock";
import Section from "@/components/Section/Section";
import { Accordion } from "@/components/ui/accordion";
import { MorphingText } from "@/components/ui/morphing-text";
import { useWindowSize } from "@/hooks/useWindowSize";
import { defaultSelection } from "@/utils/defaults";
import DesktopFAQ from "@/widgets/DesktopFAQ/DesktopFAQ";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const texts = ["Perguntas Frequentes", "Ficou com alguma dúvida?"];

const FAQ = () => {
  const { width } = useWindowSize();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted((prev) => !prev);
  }, []);

  if (!isMounted) {
    return (
      <Section height={"auto"} id="projetos" className="pb-10">
        <div className="opacity-0">Carregando FAQ...</div>
      </Section>
    );
  }

  return (
    <Section
      height="auto"
      id="faq"
      className={`pt-20 pb-10 ${defaultSelection}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <MorphingText
          texts={texts}
          className="w-xl border-2 text-center text-4xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
        />
      </motion.span>
      <div>{width > 700 ? <DesktopFAQ /> : <NonDesktopFAQ />}</div>
    </Section>
  );
};

export default FAQ;
