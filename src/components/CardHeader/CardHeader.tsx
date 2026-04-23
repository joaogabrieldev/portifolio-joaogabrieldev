import { epilogue } from "@/utils/fonts";

type CardIndex = "02" | "03" | "04" | "05";

const CardHeader = ({ title, index }: { title: string; index: CardIndex }) => {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h3
        className={`text-xs font-semibold tracking-[0.2em] text-violet-300/90 uppercase ${epilogue.className}`}
      >
        {title}
      </h3>
      <span
        className={`text-[10px] tracking-[0.2em] text-white/30 uppercase ${epilogue.className}`}
      >
        {index}
      </span>
    </header>
  );
};

export default CardHeader;
