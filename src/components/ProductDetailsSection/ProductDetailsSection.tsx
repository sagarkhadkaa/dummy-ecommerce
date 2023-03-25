import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
import BulletListItem from "../BulletListItem/BulletListItem";
import "./ProductDetailsSection.css";
import BuyingOption from "../BuyingOption/BuyingOption";

const items = [
  "Perfect for sipping sa an afternoon pick-me-up",
  "Decadently dairy-free keto confort food",
  "Creamy, fat-forward, and filling",
  "Low carb, rich in collagen, no sugar, all clean ingredients",
  "Quick and convenient, ready in 5 minutes",
];
const BuyingOptionArray = [
  {
    text: "ONE TIME PURCHASE",
    price: "$47.94",
  },
  {
    text: "SUBSCRIBE & SAVE",
    price: "$38.34",
  },
];
export default function ProductDetailsSection() {
  return (
    <div className='product_detail_container'>
      <div className='product_title_section'>
        <span style={{ color: "#9d998d" }}>16.9 fl oz</span>
        <Heading style={{ fontFamily: "Sagona" }}>
          Tom Yum Chicken Keto Bone Broth
        </Heading>
        <div className='review_section'>
          <div>
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} color='#f7a217' />
            ))}
          </div>
          <span>196 Reviews</span>
        </div>
        <div className='product_description'>
          <Text>
            Fragrant hints of ginger and lemongrass elevate classic chicken bone
            broth, beautifully balanced with mild chiles and slightly sweet
            coconut.
          </Text>
          <UnorderedList styleType='none' ml='0'>
            {items.map((item, index) => (
              <ListItem key={index}>
                <BulletListItem>{item}</BulletListItem>
              </ListItem>
            ))}
          </UnorderedList>
        </div>
        <div className='purchase_section'>
          <Text color='#555147'>
            <strong>BUYING OPTIONS</strong>
          </Text>
          <Flex className='buying_option_box'>
            {BuyingOptionArray.map((item, index) => (
              <div>
                <BuyingOption
                  text={item.text}
                  price={item.price}
                  index={index}
                />
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </div>
  );
}
