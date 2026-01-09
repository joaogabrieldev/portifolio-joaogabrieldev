import Section from "@/components/Section/Section";
import Animation from "../../../components/Animation/Animation";

import "./Hero.css";

import { motion } from "motion/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";
// import { MorphingText } from "@/components/ui/morphing-text";
import { useEffect, useState } from "react";
import { defaultSelection } from "@/utils/defaults";
import { morphTimeMath } from "../../../components/ui/morphing-text";
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
      className={`hero-section flex items-center justify-center ${defaultSelection} no-scrollbar`}
      id="inicio"
    >
      <div className="hero-main-wrapper">
        <div className="hero-content-column">
          <div className="hero-title-wrapper">
            <MorphingText
              key={displayTexts.length}
              texts={displayTexts}
              className="hero-title"
            />
          </div>
          <div
            id="hero-description-container"
            className="hero-description-container"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
              className={`hero-description ${ubuntu.className} max-w-full max-md:w-full`}
            >
              <AnimatedShinyText shimmerWidth={150} className="md:max-w-4xl">
                Olá! Sou{" "}
                <strong className="text-zinc-300">
                  <u>João Gabriel</u>
                </strong>
                , desenvolvedor web e freelancer. Acredito que um site vai muito
                além de linhas de código: ele é a porta de entrada para o seu
                negócio e a representação da sua marca no mundo digital.
              </AnimatedShinyText>
              <AnimatedShinyText shimmerWidth={150} className="md:max-w-4xl">
                Por isso, te ajudarei a transformar sua visão em uma presença
                online estratégica. Utilizando as melhores práticas de
                desenvolvimento, meu foco é criar um site que destaque sua marca
                da concorrência e atraia os clientes certos, unindo
                funcionalidade e resultados reais.
              </AnimatedShinyText>
            </motion.div>
          </div>
        </div>
        <div className="hero-visual-section hidden w-full max-w-2xl items-center justify-center max-[1300px]:w-240 max-[1300px]:max-w-xl md:mt-0 md:flex lg:max-w-50 xl:max-w-none">
          <Animation />
        </div>
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
