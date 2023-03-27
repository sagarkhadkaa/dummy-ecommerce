import { Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { Text } from "@chakra-ui/react";
import BulletListItem from "../BulletListItem/BulletListItem";
import "./ProductDetailsSection.css";
import BuyingOptions from "../BuyingOptions/BuyingOptions";
import QuantityBoxs from "../QuantityBoxs/QuantityBoxs";
import { Button } from "antd";
import { productDescriptionBullets } from "../../data/productDescriptionBullets";
import CartAndPricing from "../CartAndPricing/CartAndPricing";

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
            {productDescriptionBullets.map((item, index) => (
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
          <BuyingOptions />
          <Text color='#555147' mt='4'>
            <strong>QUANTITY</strong>
          </Text>
          <QuantityBoxs />
        </div>

        <CartAndPricing />
      </div>
    </div>
  );
}
