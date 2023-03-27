import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { quantityArray } from "../../data/quantityArray";
import "./QuantityBoxs.css";

export default function QuantityBox() {
  interface Props {
    boxNumber: number;
    text: string;
    price: number;
  }

  function QuantityBoxItem(props: Props) {
    const [border, setBorder] = useState("");
    const [color, setColor] = useState("black");

    useEffect(() => {
      // Set the border of the first box by default
      if (props.boxNumber === 0) {
        setBorder("2px solid #935158");
        setColor("#ab141d");
      }
    }, [props.boxNumber]);

    const handleClick = () => {
      const boxes = document.querySelectorAll(".box");
      let selectedBox: any = null;

      boxes.forEach((box: any) => {
        if (box.id === `box-${props.boxNumber}`) {
          selectedBox = box;
          box.style.color = "#ab141d";
        } else {
          box.style.border = "";
          box.style.color = "black";
        }
      });

      if (selectedBox.style.border !== "2px solid #935158") {
        selectedBox.style.border = "2px solid #935158";
        selectedBox.style.cursor = "default";
        setColor("#ab141d");
      }
      setBorder(selectedBox.style.border);
    };

    return (
      <Box
        width={{
          md: "80px",
          lg: "100px",
          xl: "150px",
        }}
        padding='1'
        margin='1'
        backgroundColor='white'
        boxShadow='lg'
        borderRadius='md'
        textAlign='center'
        color={color}
        id={`box-${props.boxNumber}`}
        className='box'
        style={{ border }}
        onClick={handleClick}
        onMouseEnter={(e: any) => (e.target.style.cursor = "pointer")}
        onMouseLeave={(e: any) => (e.target.style.cursor = "default")}
      >
        <Text className='quantity_option_text' color='#000'>
          <strong>{props.text}</strong>
        </Text>
        <Text className='quantity_option_price'>
          <strong>${props.price}/carton</strong>
        </Text>
      </Box>
    );
  }

  return (
    <Flex>
      {quantityArray.map((item, index) => (
        <QuantityBoxItem
          key={index}
          boxNumber={index}
          text={item.text}
          price={item.price}
        />
      ))}
    </Flex>
  );
}
