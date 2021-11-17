import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import BannerSlide from "./components/Body/BannerSlide";
import Header from "./components/Header/Header";
import LeftBar from "./components/Body/LeftBar";
import ProductList from "./components/Body/ProductList";
import Footer from "./components/Footer/Footer";
import { theme } from "./resources/theme/index";
import { Box, HStack } from "@chakra-ui/react";
import Title from "./components/Body/Title";

function App() {
  const [filters, setFilters] = useState([]);
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    fetch("http://remote.fizzmod.com/body.json")
      .then((res) => res.json())
      .then((res) => setFilters(res.filters));
  }, []);

  console.log(filters);

  const [brand, category] = filters;

  return (
    <ChakraProvider theme={theme}>
      <Box mx="auto" w="1280px">
        <Header />
        <BannerSlide />
        <Title />
        <HStack justifyContent="space-between" alignItems="flex-start" bg="">
          <LeftBar
            brand={brand}
            category={category}
            handleToggle={handleToggle}
          />
          <ProductList Checked={Checked} />
        </HStack>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
