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
        className={`relative inline-grid place-items-center contain-[layout] ${epilogue.className}`}
      >
        <span className="col-start-1 row-start-1 text-[10px] font-semibold tracking-[0.2em] text-white/30 uppercase transition-opacity duration-700 ease-[cubic-bezier(0.2,0.9,0.2,1)] group-hover:opacity-0 motion-reduce:opacity-100 motion-reduce:group-hover:opacity-100 motion-reduce:transition-none">
          {index}
        </span>
        <span
          aria-hidden
          className="col-start-1 row-start-1 text-[10px] font-semibold tracking-[0.2em] uppercase transition-opacity duration-700 ease-[cubic-bezier(0.2,0.9,0.2,1)] group-hover:opacity-100 bg-linear-to-r from-violet-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent opacity-0 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-0 motion-reduce:transition-none"
        >
          {index}
        </span>
      </span>
    </header>
  );
};

export default CardHeader;
