import React from "react";
import { Breadcrumb } from "antd";
import "./ProductDisplayContainer.css";

const ProductDisplayContainer: React.FC = () => (
  <div className='product_display_container'>
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
    />
  </div>
);

export default ProductDisplayContainer;
