import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  question: string;
  ans: string;
}

export default function FaqAccordion(props: Props) {
  return (
    <>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as='span'
                  flex='1'
                  textAlign='left'
                  className='question_text'
                >
                  {props.question}
                </Box>
                {isExpanded ? (
                  <AiOutlineMinus fontSize='24px' color='#ab141d' />
                ) : (
                  <AiOutlinePlus fontSize='24px' color='#ab141d' />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left'>
              {props.ans}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  );
}
