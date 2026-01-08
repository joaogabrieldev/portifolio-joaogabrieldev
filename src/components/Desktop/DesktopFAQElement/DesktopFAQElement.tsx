import { Question } from "@/assets/data/types/assets.types";
import { ubuntu } from "@/utils/fonts";

const DesktopFAQElement = ({
  questionID,
  questionTitle,
  questionBody,
  icon,
}: Question) => {
  const svgIconSize: number = 31;

  return (
    <div className="w-full max-w-130">
      <div className="mt-8 mb-1 flex items-center justify-center select-none">
        <div className="rounded-[10px] border border-gray-600 bg-[#0C0E12] p-2">
          <span
            className={`[&>svg]:text-red [&>svg]:h-[${svgIconSize}px] [&>svg]:w-[${svgIconSize}px]`}
          >
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
