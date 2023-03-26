import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RelatedProductCard from "./RelatedProductCard";
import "./RelatedProduct.css";

export default function RelatedProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 8)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex direction='column' paddingTop='20'>
      <Heading display='flex' justifyContent='center' fontFamily='Sagona'>
        Related Product
      </Heading>
      <div className='products_container'>
        {products?.map((item: any, index: number) => (
          <RelatedProductCard
            key={index}
            imageUrl={item.thumbnail}
            rating={item.rating}
            title={item.title}
          />
        ))}
      </div>
    </Flex>
  );
}
