import Section from "@/components/Section/Section";
import Animation from "../../components/Animation/Animation";
const Hero = () => {
  return (
    <Section className="flex items-center justify-center">
      <div className="mx-auto flex w-6xl flex-col border-2 border-white px-4 py-8 pl-6">
        <div className="mb-4 border-2 border-white">
          <span className="font-semibold text-zinc-500 select-none">
            Desenvolvedor Full Stack com atuação focada no Front-end
          </span>
        </div>
        <Animation />
      </div>
    </Section>
  );
};

export default Hero;
