import { questions } from "@/assets/data/faq";
import QuestionBlock from "@/components/QuestionBlock/QuestionBlock";
import { Accordion } from "@radix-ui/react-accordion";
import React from "react";

const NonDesktopFAQ = () => {
  return (
    <div className="mx-auto block max-w-7xl pt-10 pb-30">
      <Accordion type="single">
        {questions.map((item, index) => {
          return (
            <QuestionBlock
              key={index}
              title={item.title!}
              questions={item.questions}
              index={index}
            />
          );
        })}
      </Accordion>
    </div>
  );
};

export default NonDesktopFAQ;
