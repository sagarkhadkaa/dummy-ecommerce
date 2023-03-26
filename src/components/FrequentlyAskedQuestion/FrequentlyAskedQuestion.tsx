import { Accordion, Heading, IconButton } from "@chakra-ui/react";
import { BsQuestionSquareFill } from "react-icons/bs";
import { ImBubbles } from "react-icons/im";
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
        <div className='faq_footer_section'>
          <div className='frequently_asked_question'>
            <IconButton
              className='questions_icon_button'
              aria-label='questions'
              icon={<BsQuestionSquareFill />}
              size='sm'
              fontSize='24px'
              variant='unstyled'
              color='#ab141d'
            />
            <a href='#' style={{ textDecoration: "underline" }}>
              More Frequently Asked Question
            </a>
          </div>
          <div className='contact_us_section'>
            <IconButton
              className='chats_icon_button'
              aria-label='chats'
              icon={<ImBubbles />}
              size='sm'
              fontSize='24px'
              marginLeft='6'
              marginRight='2'
              variant='unstyled'
              color='#ab141d'
            />
            <a href='#' style={{ textDecoration: "underline" }}>
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
