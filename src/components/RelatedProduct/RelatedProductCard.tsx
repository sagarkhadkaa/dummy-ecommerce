import { Heading } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import "./RelatedProductCard.css";

interface Props {
  imageUrl: string;
  rating: number;
  title: string;
}
function RelatedProductCard(props: Props) {
  return (
    <div className='related_product_item_container'>
      <img src={props.imageUrl} alt='product' className='product_image' />
      <div className='star_section'>
        <div>
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} color='#f7a217' />
          ))}
        </div>
      </div>
      <span className='product_review'>75551 Reviews</span>
      <Heading size='xs'>
        <strong className='product_name'>{props.title}</strong>
      </Heading>
    </div>
  );
}

export default RelatedProductCard;
