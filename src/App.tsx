import "./App.css";
import AnnouncementBanner from "./components/AnnouncementBanner";
import Navbar from "./components/Navbar/Navbar";
import ProductDisplaySection from "./components/ProductDisplayContainer/ProductDisplayContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AnnouncementBanner />
      <Navbar />
      <ProductDisplaySection />
    </ChakraProvider>
  );
}

export default App;
