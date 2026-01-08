import Section from "@/components/Section/Section";
import VerticalTimeLine from "../../widgets/VerticalTimeLine/VerticalTimeLine";
import { MorphingText } from "@/components/ui/morphing-text";
import { phases } from "@/assets/data/phases";
import { defaultSelection } from "@/utils/defaults";

import { motion } from "motion/react";

const texts = ["Processos", "Como funciona a criação do seu Projeto!"];

const Processes = () => {
  return (
    <Section
      id="processos"
      className={`pt-20 pb-40 ${defaultSelection}`}
      height={"auto"}
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
          className="mx-6 max-w-2xl text-center text-4xl font-bold text-white select-none sm:text-4xl md:mx-0 md:h-24 md:text-3xl lg:text-[3rem]"
        />
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 6 }}
        viewport={{ once: true }}
      >
        <VerticalTimeLine phases={phases} />
      </motion.span>
    </Section>
  );
};

export default Processes;
