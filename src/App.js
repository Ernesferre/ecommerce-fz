import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import BannerSlide from "./components/Body/BannerSlide";
import Header from "./components/Header/Header";
import LeftBar from "./components/Body/LeftBar";
import ProductList from "./components/Body/ProductList";
import { theme } from "./resources/theme/index";
import { Box, Stack } from "@chakra-ui/react";
import Title from "./components/Body/Title";

function App() {
  const [filters, setFilters] = useState([]);
  const [Checked, setChecked] = useState([]);

  useEffect(() => {
    fetch("http://remote.fizzmod.com/body.json")
      .then((res) => res.json())
      .then((res) => setFilters(res.filters))
      .catch((err) => console.log(err));
  }, []);

  const [brand, category] = filters;

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

  return (
    <ChakraProvider theme={theme}>
      <Box mx="auto" w={["360px", "1280px"]}>
        <Header />
        <BannerSlide />
        <Title />
        <Stack
          justifyContent="space-between"
          alignItems="flex-start"
          flexDirection={["column", "row"]}
        >
          <LeftBar
            brand={brand}
            category={category}
            handleToggle={handleToggle}
          />
          <ProductList Checked={Checked} />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
