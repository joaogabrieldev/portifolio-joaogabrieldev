import Section from "@/components/Section/Section";
import { MorphingText } from "@/components/ui/morphing-text";


const texts = ["Sobre Mim", "About Me"]

const About = () => {
  return (
    <Section className="z-10">
      <div className="flex justify-center ">
        <MorphingText texts={texts} className="text-white text-xl border-2 border-white w-xl mt-8"/>
      </div>
      <div>
        
      </div>
    </Section>
  );
};

export default About;
