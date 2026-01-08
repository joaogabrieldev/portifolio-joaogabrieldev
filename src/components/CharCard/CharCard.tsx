import { Characteristics } from "@/assets/data/characteristics";

import "./CharCard.css";
import { BorderBeam } from "./../ui/border-beam";
import { ubuntu } from "@/utils/fonts";

const CharCard = ({ icon, title, description }: Characteristics) => {
  return (
    <div id="Card" className="relative w-xs max-w-xs px-6 py-4 text-white">
      <div className="flex flex-row items-center gap-2">
        <span className="text-lg font-bold text-gray-300">{icon}</span>
        <span className="text-lg font-semibold text-gray-300 select-none">
          {title}
        </span>
      </div>
      <p className={`mt-3 text-[16px] text-gray-300 ${ubuntu.className} `}>
        {description}
      </p>
      <BorderBeam
        duration={6}
        colorFrom={"#342E59"}
        size={120}
        colorTo={"#887CDE"}
        borderWidth={2}
      />
    </div>
  );
};

export default CharCard;
