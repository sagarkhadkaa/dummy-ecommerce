import { Heading } from "@chakra-ui/react";
import "./CustomerFeedbackSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { customerFeedback } from "../../data/customerFeedback";
import CustomerFeedback from "../CustomerFeedback/CustomerFeedback";
import "../../assets/fonts.css";

export default function CustomerFeedbackSection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='customer_feedback_container'>
      <Heading className='feedback_heading'>418,929+ Happy Customers</Heading>

      <Carousel
        arrows={false}
        showDots={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}
        infinite={true}
        transitionDuration={1000}
        customDot={null}
        renderDotsOutside={true}
        dotListClass='custom-dot-list'
        itemClass='custom-item'
        containerClass='carousel-container'
      >
        {customerFeedback?.map((item: any, index: number) => (
          <CustomerFeedback
            key={index}
            rating={item.rating}
            feedback={item.feedback}
            customerName={item.customerName}
          />
        ))}
      </Carousel>
    </div>
  );
}
