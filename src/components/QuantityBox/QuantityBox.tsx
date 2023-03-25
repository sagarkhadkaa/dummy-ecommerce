import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./QuantityBox.css";
interface Props {
  text: string;
  price: string;
  index: number;
}
export default function QuantityBox(props: Props) {
  const [selectedBox, setSelectedBox] = useState(0);
  const [quantityOptionClick, setQuantityOptionClick] = useState(false);

  const handleBoxClick = (index: any) => {
    setSelectedBox(index);
    setQuantityOptionClick(true);
  };
  return (
    <div>
      <Box
        width={{
          //   base: "50px",
          //   sm: "120px",
          md: "80px",
          lg: "100px",
          xl: "150px",
        }}
        padding='2'
        margin='2'
        backgroundColor='white'
        boxShadow='lg'
        borderRadius='md'
        textAlign='center'
        color='black'
        className={`quantity_option_container ${
          props.index === selectedBox ? "active" : ""
        }`}
        onClick={() => handleBoxClick(props.index)}
      >
        <Text className='quantity_option_text'>
          <strong>{props.text}</strong>
        </Text>
        <Text className='quantity_option_price'>
          <strong>{props.price}</strong>
        </Text>
      </Box>
    </div>
  );
}
