import NonDesktopFAQ from "@/components/Mobile/NonDesktopFAQ/NonDesktopFAQ";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";
import TextType from "@/components/ReactBits/TextType/TextType";
import { motion } from "motion/react";

const texts = ["Perguntas Frequentes", "Ficou com alguma dúvida?"];

const NonDesktopFAQSection = () => {
  return (
    <NonDesktopSection height={"auto"} id="mobile-faq">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="mx-6 mt-4 flex h-20 items-center justify-center text-center text-3xl font-semibold text-white"
      >
        <TextType text={texts} className="select-none" />
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
      >
        <NonDesktopFAQ />
      </motion.div>
    </NonDesktopSection>
  );
};

export default NonDesktopFAQSection;
