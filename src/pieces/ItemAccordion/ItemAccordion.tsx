import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export interface IAccordaionItemProps {
  questionID: number;
  questionTitle: string;
  questionBody: string;
}

import { defaultSelection } from "@/utils/defaults";

const ItemAccordion = ({
  questionID,
  questionBody,
  questionTitle,
}: IAccordaionItemProps) => {
  return (
    <AccordionItem value={`item-${questionID}`}>
      <AccordionTrigger className="text-xl text-white select-none">
        {questionTitle}
      </AccordionTrigger>
      <AccordionContent className="flex justify-center border-r border-b border-l border-gray-200 px-2 shadow-md shadow-gray-500">
        <p
          className={`text-center text-[16px] font-semibold text-white ${defaultSelection} py-4`}
        >
          {questionBody}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ItemAccordion;
