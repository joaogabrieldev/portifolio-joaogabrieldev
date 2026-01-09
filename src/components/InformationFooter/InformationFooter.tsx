import React, { useRef } from "react";
import "./InformationFooter.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ubuntu } from "@/utils/fonts";
import Link from "next/link";
import { urlGithub, urlLinkedin } from "@/utils/linksToGo";
import { motion } from "motion/react";

const InformationFooter = () => {
  const linkedinRef = useRef<Window | null>(null);
  const githubWindowRef = useRef<Window | null>(null);

  const handleLinkedinClick = () => {
    if (linkedinRef.current && !linkedinRef.current.closed) {
      linkedinRef.current.focus();
    } else {
      linkedinRef.current = window.open(urlLinkedin, "linkedinWindow");
    }
  };

  const handleGithubClick = () => {
    if (githubWindowRef.current && !githubWindowRef.current.closed) {
      githubWindowRef.current.focus();
    } else {
      githubWindowRef.current = window.open(urlGithub, "githubWindow");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3 }}
      viewport={{ once: true }}
      className="static mt-8 flex w-full max-w-full flex-col border-t border-t-gray-500 bg-gray-600/15 pb-40 max-[1200px]:pb-32 min-[1200px]:flex-row lg:mt-50 lg:bg-gray-600/5"
    >
      <div className="flex w-full flex-col md:flex-row">
        <div className="mt-2 flex flex-col select-none">
          <span className="footer-title -ml-12 px-6 text-center text-4xl text-white md:ml-0 md:text-start">
            Joao
          </span>
          <span className="footer-title pl-8 text-center text-4xl text-white md:pl-12">
            Gabriel
          </span>
        </div>
        <div className="w-full">
          <h2
            className={`${ubuntu.className} px-2 pt-0 text-center text-lg text-white select-none md:pt-7`}
          >
            &copy; 2025, João Gabriel R. Rocha. Todos os direitos reservados.
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 px-14 py-2 text-4xl text-gray-500 min-[1200px]:pt-7 md:pb-0">
        <span>
          <Link href={urlGithub} target="_blank" onClick={handleGithubClick}>
            <SiGithub className="cursor-pointer hover:text-[#948ad5]" />
          </Link>
        </span>
        <span>
          <Link
            href={urlLinkedin}
            target="_blank"
            onClick={handleLinkedinClick}
          >
            <SiLinkedin className="cursor-pointer hover:text-[#948ad5]" />
          </Link>
        </span>
      </div>
    </motion.div>
  );
};

export default InformationFooter;
