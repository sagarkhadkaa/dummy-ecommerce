import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { AiFillCheckCircle, AiFillStar } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";
import "./CustomerFeedback.css";

interface Props {
  rating: number;
  feedback: string;
  customerName: string;
}
export default function CustomerFeedback(props: Props) {
  return (
    <div className='customer_feedback_item'>
      <div className='star_section'>
        <div>
          {[...Array(Math.round(props.rating))].map((_, index) => (
            <AiFillStar key={index} color='#f7a217' />
          ))}
        </div>
      </div>
      <Box>
        <Text>{props.feedback}</Text>
      </Box>
      <Box mt='5'>
        <Text>&mdash;{props.customerName}</Text>
      </Box>
      <Flex
        alignItems='center'
        justifyContent='center'
        className='verified_buyer_section'
      >
        <IconButton
          className='verified_icon_button'
          aria-label='verified'
          icon={<AiFillCheckCircle color='#159954' />}
          size='sm'
          fontSize='16px'
          variant='ghost'
        />
        <Text fontSize='xs' color='#159954'>
          Verified Buyer
        </Text>
      </Flex>
    </div>
  );
}
