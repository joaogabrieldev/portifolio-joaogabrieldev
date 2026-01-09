import MobileContactButtons from "@/components/Mobile/MobileContactButtons/MobileContactButtons";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";
import TextType from "@/components/ReactBits/TextType/TextType";
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
      </motion.div>
    </NonDesktopSection>
  );
};

export default NonDesktopContact;
