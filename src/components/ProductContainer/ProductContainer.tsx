import React from "react";
import "./ProductContainer.css";
import ProductImageSection from "../ProductImageSection/ProductImageSection";
import ProductDetailsSection from "../ProductDetailsSection/ProductDetailsSection";
import ProductFooter from "../ProductFooter/ProductFooter";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const ProductContainer: React.FC = () => (
  <div className='product_page_container'>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Products</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>
          Tom Yum Chicken Keto Bone Broth
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <div className='product_section_container'>
      <ProductImageSection />
      <ProductDetailsSection />
    </div>
    <ProductFooter />
  </div>
);

export default ProductContainer;
