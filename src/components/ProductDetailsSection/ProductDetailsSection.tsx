import "./ProductDetailsSection.css";
import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { AiOutlineCheckCircle, AiFillStar } from "react-icons/ai";
import { Text } from "@chakra-ui/react";

const items = [
  "Perfect for sipping sa an afternoon pick-me-up",
  "Decadently dairy-free keto confort food",
  "Creamy, fat-forward, and filling",
  "Low carb, rich in collagen, no sugar, all clean ingredients",
  "Quick and convenient, ready in 5 minutes",
];
export default function ProductDetailsSection() {
  const BulletListItem = ({ children }: any) => (
    <Box display='flex' alignItems='center' padding='2'>
      <AiOutlineCheckCircle color='none' size='20px' />
      <Text style={{ marginLeft: "5px" }}>{children}</Text>
    </Box>
  );

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
      </div>
    </div>
  );
}
