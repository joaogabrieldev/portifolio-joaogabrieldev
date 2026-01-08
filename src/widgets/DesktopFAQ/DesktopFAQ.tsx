import { questions } from "@/assets/data/faq";
import DesktopFAQElement from "@/components/Desktop/DesktopFAQElement/DesktopFAQElement";

const DesktopFAQ = () => {
  return (
    <div className="flex items-center justify-center px-8">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
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
