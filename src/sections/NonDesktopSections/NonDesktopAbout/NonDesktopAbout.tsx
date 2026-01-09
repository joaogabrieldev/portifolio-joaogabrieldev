import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";
import TextType from "@/components/ReactBits/TextType/TextType";
import React from "react";
import { motion } from "motion/react";

import Image from "next/image";

import ProfilePic from "@/assets/images/profile-pic.jpg";

import "./NonDesktopAbout.css";
import { ubuntu } from "@/utils/fonts";
import { characteristics } from "@/assets/data/characteristics";
import CharCard from "@/components/CharCard/CharCard";

const texts = ["Sobre Mim", "Sobre o Desenvolvedor"];

const NonDesktopAbout = () => {
  return (
    <NonDesktopSection height={"auto"} id="mobile-sobre" className="pb-50">
      <div className="mx-2 flex justify-center text-center text-3xl font-semibold text-white">
        <TextType text={texts} className="select-none" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <Image
          src={ProfilePic}
          alt={"profile pic"}
          className="NonDesktopPhotoSpace mx-2 my-4 rounded-2xl border border-gray-500"
          width={330}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <span className="text-centee mx-6 mt-4 mb-7 text-center font-semibold text-zinc-500 select-none">
          Desenvolvedor Full Stack com atuação focada no Front-end
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-2.5 px-2 text-center text-neutral-300/70"
      >
        <p className={`${ubuntu.className}`}>
          Meu trabalho consiste em traduzir sua necessidade em uma interface
          funcional, moderna e atraente. Atuo combinando técnica e criatividade
          para entregar soluções sob medida, seja para quem busca criar uma
          presença online do zero ou para empresas que precisam de reforço
          técnico qualificado.
        </p>
        <p className={`${ubuntu.className}`}>
          Encaro cada novo desafio como uma oportunidade de aplicar as melhores
          práticas de desenvolvimento, garantindo um resultado que une
          performance e estética. Mais do que apenas entregar linhas de código,
          busco construir parcerias de confiança. Comigo, você terá um
          profissional atento aos mínimos detalhes e focado em resolver
          problemas de forma ágil e transparente.
        </p>
      </motion.div>
      <div
        className={`mt-4 mb-8 max-w-3xl justify-self-center text-center text-lg font-semibold text-zinc-400`}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2 }}
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
        className="flex flex-col items-center justify-center gap-8 px-6 lg:flex-row"
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
    </NonDesktopSection>
  );
};

export default NonDesktopAbout;
