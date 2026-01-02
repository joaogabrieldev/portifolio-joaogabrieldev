import { questions } from "@/assets/data/faq";
import DesktopFAQElement from "@/components/Desktop/DesktopFAQElement/DesktopFAQElement";

const DesktopFAQ = () => {
  return (
    <div className="flex items-center justify-center border-2 border-white px-8">
      <div className="grid grid-cols-3 gap-6 border-2 border-white">
        {questions.map((category, index) => {
          return category.questions.map((question, index) => {
            return (
              <DesktopFAQElement
                key={question.questionID}
                icon={question.icon}
                questionID={question.questionID}
                questionTitle={question.questionTitle}
                questionBody={question.questionBody}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default DesktopFAQ;
