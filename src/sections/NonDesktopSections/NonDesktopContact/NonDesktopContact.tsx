import MobileContactButtons from "@/components/Mobile/MobileContactButtons/MobileContactButtons";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";
import TextType from "@/components/ReactBits/TextType/TextType";
import CurriculumButton from "@/pieces/CurriculumButton/CurriculumButton";
import { defaultSelection } from "@/utils/defaults";
import { Phone } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const texts = ["Contato", "Vamos conversar sobre o seu projeto?"];

const NonDesktopContact = () => {
  return (
    <NonDesktopSection height={"auto"} id="mobile-contato">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="mx-6 mt-4 flex h-20 items-center justify-center text-center text-3xl font-semibold text-white"
      >
        <TextType text={texts} className="select-none" />
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
      >
        <MobileContactButtons />
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
        <div className="my-6 flex items-center justify-center">
          <CurriculumButton />
        </div>
      </motion.div>
    </NonDesktopSection>
  );
};

export default NonDesktopContact;
