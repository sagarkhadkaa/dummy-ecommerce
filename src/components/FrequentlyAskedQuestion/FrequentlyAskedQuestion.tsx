import { Accordion, Heading } from "@chakra-ui/react";
import { faqArray } from "../../data/faq";
import FaqAccordion from "../FaqAccordion/FaqAccordion";
import "./FrequentlyAskedQuestion.css";

export default function FrequentlyAskedQuestion() {
  return (
    <div className='faq_container'>
      <div className='faq_content'>
        <Heading>Frequently Asked Questions</Heading>
        <div className='faq_questions_accordin'>
          <Accordion allowMultiple defaultIndex={0}>
            {faqArray?.map((item: any, index: number) => (
              <FaqAccordion
                key={item.id}
                question={item.question}
                ans={item.ans}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
