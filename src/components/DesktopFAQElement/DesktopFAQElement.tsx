import { Question } from "@/assets/data/types/assets.types";
import { ubuntu } from "@/utils/fonts";

const DesktopFAQElement = ({
  questionID,
  questionTitle,
  questionBody,
  icon,
}: Question) => {
  return (
    <div className="w-full max-w-130 border-2 border-white">
      <div className="mt-4 mb-1 flex items-center justify-center border-2 border-white select-none">
        <div className="rounded-[10px] border border-gray-600 bg-[#0C0E12] p-2">
          <span className="[&>svg]:text-red [&>svg]:h-[31px] [&>svg]:w-[31px]">
            {icon}
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-center text-lg font-semibold">{questionTitle}</h2>
      </div>
      <div>
        <p className={`px-2 text-center text-gray-400 ${ubuntu.className}`}>
          {questionBody}
        </p>
      </div>
    </div>
  );
};

export default DesktopFAQElement;
