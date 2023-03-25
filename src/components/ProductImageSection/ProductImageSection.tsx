import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProductImageSection.css";

const ProductImageSection = () => {
  const slideImages = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageClick, setImageClick] = useState(false);

  const handleImageClick = (index: number) => {
    setImageClick(true);
    setSelectedImage(index);
  };

  return (
    <div className='slide-container'>
      <Slide>
        {slideImages.map((each, index) => (
          <div key={index} className='each-slide'>
            {imageClick ? (
              <div
                style={{
                  backgroundImage: `url(${slideImages[selectedImage]})`,
                }}
              ></div>
            ) : (
              <div style={{ backgroundImage: `url(${each})` }}></div>
            )}
          </div>
        ))}
      </Slide>
      <div className='thumbnail-slider'>
        {slideImages.map((each, index) => (
          <div
            key={index}
            className={`thumbnail ${index === selectedImage ? "active" : ""}`}
          >
            <img
              src={each}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageSection;
