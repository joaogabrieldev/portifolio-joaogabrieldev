import { questions } from "@/assets/data/faq";
import QuestionBlock from "@/components/QuestionBlock/QuestionBlock";
import Section from "@/components/Section/Section";
import { Accordion } from "@/components/ui/accordion";
import { MorphingText } from "@/components/ui/morphing-text";
import { defaultSelection } from "@/utils/defaults";
import DesktopFAQ from "@/widgets/DesktopFAQ/DesktopFAQ";
import { motion } from "motion/react";

const texts = ["Perguntas Frequentes", "Ficou com alguma dúvida?"];

const FAQ = () => {
  return (
    <Section
      height="auto"
      id="faq"
      className={`pt-20 pb-40 ${defaultSelection}`}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
      >
        <MorphingText
          texts={texts}
          className="max-w-2xl text-center text-2xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
        />
      </motion.span>
      <div>
        <DesktopFAQ />
      </div>
    </Section>
  );
};

export default FAQ;
