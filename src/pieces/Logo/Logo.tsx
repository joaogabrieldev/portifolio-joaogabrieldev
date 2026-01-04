import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex w-full flex-row gap-2">
      <Sparkles stroke="white" />
      <h1 className="font-semibold text-white select-none">Minha Logo</h1>
    </div>
  );
};

export default Logo;
