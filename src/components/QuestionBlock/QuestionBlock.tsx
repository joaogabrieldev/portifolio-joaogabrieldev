import ItemAccordion from "@/pieces/ItemAccordion/ItemAccordion";
import type { IQuestionBlockProps } from "@/assets/data/faq";

const QuestionBlock = ({ title, questions, index }: IQuestionBlockProps) => {
  const isFirst = index == 0 ? "rounded-t-2xl" : "";

  const isLast = index == 2 ? "rounded-b-2xl " : "";

  return (
    <div
      className={`flex flex-col justify-center gap-4 border border-x-0 border-y border-slate-700 ${isFirst} ${isLast}`}
    >
      <div className="border-b-slate-700 py-4 text-center">
        <span className={`text-2xl font-bold text-white select-none`}>
          {title}
        </span>
      </div>
      <div className="px-12 py-4">
        {questions.map((item) => {
          return (
            <ItemAccordion
              key={item.questionID}
              questionID={item.questionID}
              questionTitle={item.questionTitle}
              questionBody={item.questionBody}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBlock;
