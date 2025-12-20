import TextType from "@/components/ReactBits/TextType/TextType";
// import Animation from "./components/Animation/Animation";
const Hero = () => {
  const cursor = "_";
  const defaultTypeTextCSS = `text-5xl font-semibold text-white`;

  return (
    <section className="relative border-2 border-white">
      <div className="mx-auto flex w-xl flex-col border-2 border-white px-4 py-8 pl-6">
        {/* <Animation /> */}
        <div>
          <span className="mb-4 font-semibold text-zinc-500">
            Desenvolvedor Full Stack com atuação focada no Front-end
          </span>
        </div>
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
    </section>
  );
};

export default Hero;
