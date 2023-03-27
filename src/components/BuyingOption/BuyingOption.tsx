import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./BuyingOption.css";
interface Props {
  text: string;
  price: string;
  index: number;
}
export default function BuyingOption(props: Props) {
  const [selectedBox, setSelectedBox] = useState(0);
  const [buyingOptionClick, setBuyingOptionClick] = useState(false);

  const handleBoxClick = (index: any) => {
    setSelectedBox(index);
    setBuyingOptionClick(true);
  };
  return (
    <div>
      <Box
        width={{
          md: "180px",
          lg: "220px",
          xl: "300px",
        }}
        padding='4'
        margin='2'
        backgroundColor='white'
        boxShadow='lg'
        borderRadius='md'
        textAlign='center'
        color='black'
        className={`buying_option_container ${
          props.index === selectedBox ? "active" : ""
        }`}
        onClick={() => handleBoxClick(props.index)}
      >
        <Text className='buying_option_text'>
          <strong>{props.text}</strong>
        </Text>
        <Text className='buying_option_price'>
          <strong>{props.price}</strong>
        </Text>
      </Box>
    </div>
  );
}
