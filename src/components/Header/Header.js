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

  console.log(category);

  return (
    <>
      {/* DESKTOP LAYOUT */}

      <Box
        display={["none", "flex"]}
        flexDirection="column"
        justifyContent="space-between"
        w="1280px"
        h="146px"
        bg="white"
        color="black"
        textAlign="center"
      >
        <Grid
          h="90px"
          color="gray"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={0}
        >
          <GridItem
            rowSpan={3}
            colSpan={1}
            bg="brand.gray1"
            alignItems="center"
            textAlign="center"
            pt="20px"
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Img src={logo} alt="logo" />
            </Box>
          </GridItem>

          <GridItem colSpan={3} bg="white" />
          <GridItem colSpan={1} bg="white">
            <HStack
              spacing={4}
              color="brand.bgCategory"
              justifyContent="space-around"
              fontFamily="open sans"
              fontSize="13px"
              fontWeight="bold"
              py="5px"
            >
              <Link to="#" h="18px">
                Ayuda
              </Link>
              <Link to="#">Mis pedidos</Link>
              <Link to="#">Mi cuenta</Link>
            </HStack>
          </GridItem>
          <GridItem
            colSpan={3}
            rowSpan={2}
            bg="white"
            borderTop="1px"
            borderColor="brand.gray1"
          >
            <HStack
              spacing={2}
              ml={4}
              pt="12px"
              alignItems="flex-end"
              color="brand.gray2"
            >
              <BiSearch size="26px" w="22.03px" h="22.96px" />
              <Text w="202px" fontSize="20px" color="brand.gray2">
                Buscar un producto...
              </Text>
            </HStack>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2} bg="brand.bgFooter">
            <HStack
              spacing={4}
              mx="auto"
              alignItems="center"
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

        <Box bg="brand.bgCategory" h="56px" pt="16px">
          <UnorderedList
            display="flex"
            justifyContent="space-around"
            listStyleType="none"
            color="white"
            fontFamily="open sans"
            fontWeight="bold"
            fontSize="14px"
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
