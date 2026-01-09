import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";
import { plans } from "@/assets/data/plans";
import PlanCard from "@/components/PlanCard/PlanCard";
import { defaultSelection } from "@/utils/defaults";
import TextType from "@/components/ReactBits/TextType/TextType";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";

const texts = ["Planos", "Solicite seu orçamento agora!"];

const NonDesktopPlans = () => {
  return (
    <NonDesktopSection className="px-4" height={"auto"} id="mobile-planos">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        viewport={{ once: true }}
        className="mx-6 flex h-20 items-center justify-center text-center text-3xl font-semibold text-white"
      >
        <TextType text={texts} className="select-none" />
      </motion.span>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 2.5 }}
        className={`my-2 mt-5 flex max-w-4xl justify-self-center text-center font-semibold text-gray-500 min-[557px]:mt-3 md:-mt-2 ${defaultSelection}`}
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
        <div className="mx-8 flex flex-col items-center justify-center gap-y-4 min-[1435px]:grid-cols-3 md:grid lg:items-start lg:gap-x-10">
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
    </NonDesktopSection>
  );
};

export default NonDesktopPlans;
