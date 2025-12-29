import GradualBlur from "@/components/ReactBits/GradualBlur/GradualBlur";
import Section from "@/components/Section/Section";
import { MorphingText, morphTimeMath } from "@/components/ui/morphing-text";

import PhotoSpace from "../../components/PhotoSpace/PhotoSpace";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { defaultSelection } from "@/utils/defaults";
import CharCard from "../../components/CharCard/CharCard";
import { characteristics } from "@/assets/characteristics";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ubuntu } from "@/utils/fonts";

const texts = ["Sobre Mim", "Sobre o Desenvolvedor"];

const About = () => {
  return (
    <Section
      className={`z-10 ${defaultSelection} pb-20`}
      id="sobre"
      height={"auto"}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-14 flex justify-center"
      >
        <MorphingText
          texts={texts}
          className="mt-8 w-xl border-2 border-white text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
        />
      </motion.div>
      <div className="flex flex-row justify-around px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 3 }}
          className="flex flex-row items-center gap-28 border-2 border-white"
        >
          <div
            className={`mb-4 flex flex-col gap-2 border-2 border-white ${ubuntu.className}`}
          >
            <span className="text-center font-semibold text-zinc-500 select-none">
              Desenvolvedor Full Stack com atuação focada no Front-end
            </span>
            <AnimatedShinyText
              shimmerWidth={150}
              className="max-w-3xl text-center text-lg text-[17.5px] text-gray-300"
            >
              <span>
                Meu trabalho consiste em traduzir sua necessidade em uma
                interface funcional, moderna e atraente. Atuo combinando técnica
                e criatividade para entregar soluções sob medida, seja para quem
                busca criar uma presença online do zero ou para empresas que
                precisam de reforço técnico qualificado.
              </span>
            </AnimatedShinyText>
            <AnimatedShinyText
              shimmerWidth={150}
              className="max-w-3xl px-2 text-center text-lg text-[17.5px] text-gray-300"
            >
              <span>
                Encaro cada novo desafio como uma oportunidade de aplicar as
                melhores práticas de desenvolvimento, garantindo um resultado
                que une performance e estética. Mais do que apenas entregar
                linhas de código, busco construir parcerias de confiança.
                Comigo, você terá um profissional atento aos mínimos detalhes e
                focado em resolver problemas de forma ágil e transparente.
              </span>
            </AnimatedShinyText>
          </div>
          <PhotoSpace />
        </motion.div>
      </div>
      <div
        className={`my-8 max-w-3xl justify-self-center text-center text-lg font-semibold text-zinc-400`}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 8 }}
        >
          Para garantir a melhor entrega possível, baseio meu trabalho em três
          pilares inegociáveis:
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 12 }}
        className="flex flex-row justify-center gap-8"
      >
        {characteristics.map((item, index) => {
          return (
            <CharCard
              key={index}
              title={item.title}
              icon={item.icon}
              description={item.description}
            />
          );
        })}
      </motion.div>
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

export default About;
