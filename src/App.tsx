import "./App.css";
import AnnouncementBanner from "./components/AnnouncementBanner";
import Navbar from "./components/Navbar/Navbar";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AnnouncementBanner />
      <Navbar />
      <ProductContainer />
    </ChakraProvider>
  );
}

export default App;
