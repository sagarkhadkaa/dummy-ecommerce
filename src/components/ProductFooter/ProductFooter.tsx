import { Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./ProductFooter.css";
export default function ProductFooter() {
  return (
    <div className='product_footer_box'>
      <Flex className='guarantee_box'>
        <IconButton
          className='check_circle_icon_button'
          aria-label='check-circle'
          icon={<AiOutlineCheckCircle />}
          size='lg'
          fontSize='32px'
          paddingLeft='2'
          variant='unstyled'
        />
        <div>
          <Heading size='md' fontFamily='Sagona'>
            100% guarantee
          </Heading>
          <Text fontSize='sm' fontFamily='Sana Sans Regular'>
            Don't like it? Get a full refund.
          </Text>
        </div>
      </Flex>
      <Flex className='fast_free_shipping_box'>
        <IconButton
          className='check_circle_icon_button'
          aria-label='check-circle'
          icon={<AiOutlineCheckCircle />}
          size='lg'
          fontSize='32px'
          paddingLeft='2'
          variant='unstyled'
        />
        <div>
          <Heading size='md' fontFamily='Sagona'>
            Fast & free shipping
          </Heading>
          <Text fontSize='sm' fontFamily='Sana Sans Regular'>
            Arrives in 2-5 business days.
          </Text>
        </div>
      </Flex>
    </div>
  );
}
