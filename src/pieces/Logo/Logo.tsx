import { Sparkles } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="ml-20 flex w-full flex-row gap-2 select-none lg:ml-50">
      {/* <Sparkles stroke="white" />
      <h1 className="font-semibold text-white select-none">Minha Logo</h1> */}
      <Image src={logo} alt={"logo"} width={100} height={100} />
    </div>
  );
};

export default Logo;
