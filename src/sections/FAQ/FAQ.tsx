import { questions } from "@/assets/data/faq";
import QuestionBlock from "@/components/QuestionBlock/QuestionBlock";
import Section from "@/components/Section/Section";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "motion/react";

const FAQ = () => {
    return (
      <Section height="auto" id="faq">
        <motion.div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam quod, nobis natus temporibus recusandae architecto debitis laborum voluptatem quos. Velit possimus tenetur ipsum animi vero. Doloremque expedita esse aspernatur.
          </div>
          
        </motion.div>
      </Section>
    )
};

export default FAQ;
