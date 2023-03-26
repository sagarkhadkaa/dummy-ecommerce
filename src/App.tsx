import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import { ChakraProvider } from "@chakra-ui/react";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";
import "../src/assets/fonts.css";
import RelatedProduct from "./components/RelatedProduct/RelatedProduct";

function App() {
  return (
    <ChakraProvider>
      <AnnouncementBanner />
      <Navbar />
      <ProductContainer />
      <RelatedProduct />
    </ChakraProvider>
  );
}

export default App;
