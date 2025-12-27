import { Check } from "lucide-react";

interface ICheckProps {
  iconWidth: number;
}

const CheckIcon = ({ iconWidth }: ICheckProps) => {
  return <Check className="text-[#A07CFE]" width={iconWidth} />;
};

export default CheckIcon;
