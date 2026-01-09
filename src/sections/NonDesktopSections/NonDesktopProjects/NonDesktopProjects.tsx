import MobileProjects from "@/components/Mobile/MobileProjects/MobileProjects";
import NonDesktopSection from "@/components/Mobile/NonDesktopSection/NonDesktopSection";
import TextType from "@/components/ReactBits/TextType/TextType";
import { useWindowSize } from "@/hooks/useWindowSize";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const texts = ["Projetos", "Uma seleção dos meus trabalhos recentes."];

const NonDesktopProjects = () => {
  const { width } = useWindowSize();

  const isMobileButton =
    width > 1200
      ? "rounded-md border-3 border-[#7c7abf99] px-6 py-2 transition duration-200 ease-out hover:bg-[#7c7abf99]"
      : "rounded-md border-2 border-[#7c7abf99] bg-[#7c7abf99] px-6 py-2";

  return (
    <NonDesktopSection height={"auto"} id="mobile-projetos" className="">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        viewport={{ once: true }}
        className="mx-6 flex h-20 items-center justify-center text-center text-3xl font-semibold text-white"
      >
        <TextType text={texts} className="select-none" />
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        viewport={{ once: true }}
        className="select-none"
      >
        <MobileProjects />
      </motion.div>
      <div className="flex items-center justify-center py-4">
        <Link
          href={"/projetos"}
          className={`${isMobileButton} text-lg font-semibold`}
        >
          Ver todos os Projetos!
        </Link>
      </div>
    </NonDesktopSection>
  );
};

export default NonDesktopProjects;
