import Section from "@/components/Section/Section";
import Animation from "../../components/Animation/Animation";

import { motion } from "motion/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";
// import { MorphingText } from "@/components/ui/morphing-text";
import { useEffect, useState } from "react";
import { defaultSelection } from "@/utils/defaults";
import { morphTimeMath } from "../../components/ui/morphing-text";
import { ubuntu } from "@/utils/fonts";

import dynamic from "next/dynamic";

const MorphingText = dynamic(
  () => import("@/components/ui/morphing-text").then((m) => m.MorphingText),
  { ssr: false },
);

const texts = ["João Gabriel", "Elevando o padrão da sua presença online."];

export const morphTimeTransition = morphTimeMath - 10;

const Hero = () => {
  const [displayTexts, setDisplayTexts] = useState<string[]>(["", ...texts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayTexts(texts);
    }, morphTimeTransition);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      height="screen"
      className={`flex items-center justify-center ${defaultSelection} no-scrollbar`}
      id="inicio"
    >
      <div className="flex max-w-375 flex-row gap-4 py-4">
        <div className="flex flex-col items-center justify-center gap-7.5 border-2 border-white">
          <div>
            <MorphingText
              key={displayTexts.length}
              texts={displayTexts}
              className="w-2xl border-2 border-white text-center text-2xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
            />
          </div>
          <div className="flex w-2xl max-w-4xl flex-col gap-2 border-2 border-white py-1.5 text-gray-200">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-4 px-2 text-start text-[17.5px] ${ubuntu.className}`}
            >
              <AnimatedShinyText
                shimmerWidth={150}
                className="max-w-2xl border-2 border-white"
              >
                Olá! Sou{" "}
                <strong className="text-zinc-300">
                  <u>João Gabriel</u>
                </strong>
                , desenvolvedor web e freelancer. Acredito que um site vai muito
                além de linhas de código: ele é a porta de entrada para o seu
                negócio e a representação da sua marca no mundo digital.
              </AnimatedShinyText>
              <AnimatedShinyText
                shimmerWidth={150}
                className="max-w-2xl border-2 border-white"
              >
                Por isso, te ajudarei a transformar sua visão em uma presença
                online estratégica. Utilizando as melhores práticas de
                desenvolvimento, meu foco é criar um site que destaque sua marca
                da concorrência e atraia os clientes certos, unindo
                funcionalidade e resultados reais.
              </AnimatedShinyText>
            </motion.div>
          </div>
        </div>
        <Animation />
      </div>
      <GradualBlur
        target="page"
        position="bottom"
        height="8rem"
        strength={3}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </Section>
  );
};

export default Hero;
