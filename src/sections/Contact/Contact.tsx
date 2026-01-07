import React from "react";
import Section from "@/components/Section/Section";
import { motion } from "motion/react";
import { MorphingText } from "@/components/ui/morphing-text";
import Link from "next/link";

import { SiWhatsapp, SiLinkedin } from "react-icons/si";
import { Phone } from "lucide-react";
import { defaultSelection } from "@/utils/defaults";
import MobileContactButtons from "./../../components/Mobile/MobileContactButtons/MobileContactButtons";
import { useWindowSize } from "@/hooks/useWindowSize";
import DxtopContactButtons from "@/components/Desktop/DxtopContactButtons/DxtopContactButtons";
import InformationFooter from "@/components/InformationFooter/InformationFooter";

const texts = ["Contato", "Vamos conversar sobre o seu projeto?"];

const Contact = () => {
  const { width } = useWindowSize();
  return (
    <Section
      height={"screen"}
      id="contato"
      className="text-white max-[700px]:-mt-28"
    >
      <div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <MorphingText
            texts={texts}
            className="mt-8 w-xl border-2 text-center text-4xl font-bold text-white select-none sm:text-4xl md:h-24 md:text-4xl lg:text-[3rem]"
          />
        </motion.span>
      </div>
      <div className="mx-4 mt-4 flex items-center justify-center text-center">
        <p className="mt-2 max-w-2xl font-semibold text-gray-500">
          Vamos tirar seu projeto do papel? Entre em contato e tenha uma
          presença digital estratégica, feita para converter visitantes em
          clientes.
        </p>
      </div>
      <div>
        {width > 1200 ? <DxtopContactButtons /> : <MobileContactButtons />}
        <div className="mt-6 flex items-center justify-center">
          <div className="rounded-lg border-2 border-[#7c7abf7c] bg-[#7c7abf]/5 px-16 py-10">
            <div
              className={`flex flex-row gap-1 text-gray-500 ${defaultSelection}`}
            >
              <Phone />
              <span className="font-semibold">
                <span className="select-none">Telefone:</span> (61) 98447-3234
              </span>
            </div>
          </div>
        </div>
      </div>
      <InformationFooter />
    </Section>
  );
};

export default Contact;
