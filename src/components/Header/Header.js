import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Img } from "@chakra-ui/image";
import {
  Box,
  ListItem,
  UnorderedList,
  Grid,
  GridItem,
  Text,
  HStack,
  Link,
} from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import logo from "../../../src/assets/Logo/logo.svg";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://remote.fizzmod.com/menu.json")
      .then((res) => res.json())
      .then((res) => setCategory(res.menu.categories));
  }, []);

  return (
    <>
      {/* DESKTOP LAYOUT */}

      <Box
        display={["none", "flex"]}
        flexDirection="column"
        justifyContent="space-between"
        w={["360px", "1280px"]}
        h="146px"
      >
        <Grid
          h="90px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem
            d="flex"
            rowSpan={3}
            colSpan={1}
            bg="brand.gray1"
            justifyContent="center"
            alignItems="center"
          >
            <Img src={logo} alt="logo" />
          </GridItem>

          <GridItem colSpan={3} />
          <GridItem colSpan={1}>
            <HStack
              color="brand.bgCategory"
              justifyContent="space-around"
              fontFamily="open sans"
              fontSize="13px"
              // fontWeight="bold"
              py="5px"
            >
              <Link to="#">Ayuda</Link>
              <Link to="#">Mis pedidos</Link>
              <Link to="#">Mi cuenta</Link>
            </HStack>
          </GridItem>
          <GridItem
            colSpan={3}
            rowSpan={2}
            borderTop="1px"
            borderColor="brand.gray1"
          >
            <HStack ml={4} pt="14px" color="brand.gray2">
              <BiSearch size="26px" w="22.03px" h="22.96px" />
              <Text w="202px" fontSize="20px">
                Buscar un producto...
              </Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2} bg="brand.bgFooter">
            <HStack
              spacing={4}
              mx="auto"
              pt="30px"
              w="132px"
              h="25px"
              color="white"
            >
              <AiOutlineShoppingCart w="24.77px" h="24.2px" size="25px" />
              <Text
                w="89px"
                h="20px"
                fontSize="15px"
                fontWeight="bold"
                fontFamily="open sans"
              >
                MI CARRITO
              </Text>
            </HStack>
          </GridItem>
        </Grid>

        <Box bg="brand.bgCategory" h="56px">
          <UnorderedList
            display="flex"
            justifyContent="space-around"
            listStyleType="none"
            color="white"
            fontFamily="open sans"
            fontWeight="bold"
            fontSize="14px"
            pt="18px"
          >
            {category.map((cat, index) => (
              <ListItem key={index} as="a" href={cat.href}>
                {cat.title}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>

      {/* MOBILE LAYOUT */}

      <Box display={["flex", "none"]} color="black">
        <MobileHeader category={category} />
      </Box>
    </>
  );
};

export default Header;
