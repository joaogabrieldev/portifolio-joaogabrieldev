import React from "react";
import TextType from "@/components/ReactBits/TextType/TextType";
import { motion } from "motion/react";
import { ubuntu } from "@/utils/fonts";
import { defaultSelection } from "@/utils/defaults";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";

const texts = ["João Gabriel", "Elevando o padrão da sua presença online."];

const NonDesktopHero = () => {
  return (
    <NonDesktopSection
      className="flex h-auto flex-col items-center pb-40"
      id="mobile-inicio"
      height={"auto"}
    >
      <div className="mx-2 flex h-20 justify-center text-center text-3xl font-semibold text-white">
        <TextType text={texts} className="select-none" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className={`${ubuntu.className} mt-8 flex w-xs max-w-lg flex-col items-center justify-center gap-2 px-4 md:w-full`}
      >
        <p
          className={`px-2 text-center text-neutral-300/70 md:w-full md:max-w-2xl`}
        >
          Olá! Sou{" "}
          <strong className="text-zinc-300">
            <u>João Gabriel</u>
          </strong>
          , desenvolvedor web e freelancer. Acredito que um site vai muito além
          de linhas de código: ele é a porta de entrada para o seu negócio e a
          representação da sua marca no mundo digital.
        </p>
        <p className="px-2 text-center text-neutral-300/70 md:w-full md:max-w-2xl">
          Por isso, te ajudarei a transformar sua visão em uma presença online
          estratégica. Utilizando as melhores práticas de desenvolvimento, meu
          foco é criar um site que destaque sua marca da concorrência e atraia
          os clientes certos, unindo funcionalidade e resultados reais.
        </p>
      </motion.div>
    </NonDesktopSection>
  );
};

export default NonDesktopHero;
