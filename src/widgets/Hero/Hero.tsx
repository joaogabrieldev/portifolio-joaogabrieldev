import TextType from "@/components/ReactBits/TextType/TextType";
import Section from "@/components/Section/Section";
// import Animation from "./components/Animation/Animation";
const Hero = () => {
  const cursor = "_";
  const defaultTypeTextCSS = `text-8xl font-semibold text-white`;

  return (
    <Section className="flex items-center justify-center">
      <div className="mx-auto flex w-5xl flex-col border-2 border-white px-4 py-8 pl-6">
        <div>
          <span className="mb-4 font-semibold text-zinc-500 select-none">
            Desenvolvedor Full Stack com atuação focada no Front-end
          </span>
        </div>
        {/* <Animation /> */}
        <div className="flex flex-col gap-y-3">
          <TextType
            text={["UI/UX Design"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter={cursor}
            className={`${defaultTypeTextCSS}`}
            initialDelay={1000}
          />
          <TextType
            text={["Web Full-Stack"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter={cursor}
            className={`${defaultTypeTextCSS}`}
            initialDelay={1000}
          />
          <TextType
            text={["Software Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter={cursor}
            className={`${defaultTypeTextCSS}`}
            initialDelay={1000}
          />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
