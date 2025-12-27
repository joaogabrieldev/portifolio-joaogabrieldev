import Section from '@/components/Section/Section'
import { motion } from 'motion/react';
import { MorphingText } from '@/components/ui/morphing-text';
import { text } from 'stream/consumers';

import {} from "next/"

const texts = ["Orçamento", "Solicite seu orçamento agora."]

const Prices = () => {
  return (
    <Section className='' height={'screen'} id='orcamento'>
      <motion.div >
        <MorphingText texts={texts} />
      </motion.div>
    </Section>
  )
}

export default Prices