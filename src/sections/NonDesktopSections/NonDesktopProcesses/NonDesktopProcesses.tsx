import Section from "@/components/Section/Section";
import VerticalTimeLine from "../../../widgets/VerticalTimeLine/VerticalTimeLine";
import { MorphingText } from "@/components/ui/morphing-text";
import { phases } from "@/assets/data/phases";
import { defaultSelection } from "@/utils/defaults";

import { motion } from "motion/react";
import TextType from "@/components/ReactBits/TextType/TextType";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";

const texts = ["Processos", "Como funciona a criação do seu Projeto!"];

const NonDesktopProcesses = () => {
  return (
    <NonDesktopSection
      id="mobile-processos"
      className={`pt-20 pb-40 ${defaultSelection}`}
      height={"auto"}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="mx-6 flex h-20 items-center justify-center text-center text-3xl font-semibold text-white"
      >
        <TextType text={texts} className="select-none" />
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 6 }}
        viewport={{ once: true }}
      >
        <VerticalTimeLine phases={phases} />
      </motion.span>
    </NonDesktopSection>
  );
};

export default NonDesktopProcesses;
