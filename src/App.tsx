import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import { ChakraProvider } from "@chakra-ui/react";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";
import "../src/assets/fonts.css";
import RelatedProduct from "./components/RelatedProduct/RelatedProduct";
import FrequentlyAskedQuestion from "./components/FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import CustomerFeedbackSection from "./components/CustomerFeedbackSection/CustomerFeedbackSection";
import RecipesSection from "./components/RecipesSection/RecipesSection";

function App() {
  return (
    <ChakraProvider>
      <AnnouncementBanner />
      <Navbar />
      <ProductContainer />
      <RelatedProduct />
      <FrequentlyAskedQuestion />
      <CustomerFeedbackSection />
      <RecipesSection />
    </ChakraProvider>
  );
}

export default App;
