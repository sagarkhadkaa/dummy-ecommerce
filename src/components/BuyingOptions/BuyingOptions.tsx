import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { buyingOptionArray } from "../../data/buyingOptionArray";
import "./BuyingOptions.css";

export default function BuyingOptions() {
  interface Props {
    boxNumber: number;
    text: string;
    price: number;
  }

  function BuyingBoxItem(props: Props) {
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
      const boxes = document.querySelectorAll(".buying-box");
      let selectedBox: any = null;

      boxes.forEach((box: any) => {
        if (box.id === `buying-box-${props.boxNumber}`) {
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
          color={color}
          id={`buying-box-${props.boxNumber}`}
          className='buying-box'
          style={{ border }}
          onClick={handleClick}
          onMouseEnter={(e: any) => (e.target.style.cursor = "pointer")}
          onMouseLeave={(e: any) => (e.target.style.cursor = "default")}
        >
          <Text className='buying_option_text' color='#000'>
            <strong>{props.text}</strong>
          </Text>
          <Text className='buying_option_price'>
            <strong>${props.price}</strong>
          </Text>
        </Box>
      </div>
    );
  }

  return (
    <Flex>
      {buyingOptionArray.map((item, index) => (
        <BuyingBoxItem
          key={index}
          boxNumber={index}
          text={item.text}
          price={item.price}
        />
      ))}
    </Flex>
  );
}
