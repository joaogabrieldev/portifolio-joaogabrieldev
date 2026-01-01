import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";
import { plans } from "@/assets/data/plans";
import PlanCard from "@/components/PlanCard/PlanCard";
import { defaultSelection } from "@/utils/defaults";

const texts = ["Planos", "Solicite seu orçamento agora!"];

const Plans = () => {
  return (
    <Section className="px-4" height={"auto"} id="planos">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        viewport={{ once: true }}
      >
        <MorphingText
          texts={texts}
          className="mt-20 -mb-6 w-3xl text-center text-2xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 2.5 }}
        className={`my-1.5 flex max-w-4xl justify-self-center text-center font-semibold text-gray-500 ${defaultSelection}`}
      >
        Encontre a solução perfeita para alavancar seu negócio. Nossos pacotes
        garantem excelência técnica, layout moderno e uma estrutura pensada para
        gerar crescimento e credibilidade.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 4 }}
        viewport={{ once: true }}
        className="flex justify-center py-8"
      >
        <div className="grid grid-cols-3 items-start gap-x-6">
          {plans.map((item, index) => {
            return (
              <PlanCard
                key={index}
                title={item.title}
                price={item.price}
                emphasis={item.emphasis}
                description={item.description}
                recommendation={item.recommendation}
                beneficts={item.beneficts}
              />
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

export default Plans;
