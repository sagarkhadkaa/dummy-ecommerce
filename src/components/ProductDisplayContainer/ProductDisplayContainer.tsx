import React from "react";
import { Breadcrumb } from "antd";
import "./ProductDisplayContainer.css";
import ProductImageSection from "../ProductImageSection/ProductImageSection";
import ProductDetailsSection from "../ProductDetailsSection/ProductDetailsSection";

const ProductDisplayContainer: React.FC = () => (
  <div className='product_page_container'>
    <Breadcrumb
      items={[
        {
          title: "Home",
        },
        {
          title: "Products",
        },
        {
          title: "Tom Yum Chicken Keto Bone Broth",
        },
      ]}
      className='breadcrumb_section'
    />
    <div className='product_section_container'>
      <ProductImageSection />
      <ProductDetailsSection />
    </div>
  </div>
);

export default ProductDisplayContainer;
