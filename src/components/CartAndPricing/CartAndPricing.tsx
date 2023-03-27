import { Button, Text } from "@chakra-ui/react";
import "./CartAndPricing.css";
export default function CartAndPricing() {
  return (
    <div className='cart_pricing_container'>
      <Text sx={{ fontSize: 24 }}>
        <strong>$47.94</strong>
      </Text>
      <Button className='cart_button' fontFamily='Sana'>
        Add to Cart
      </Button>
    </div>
  );
}
