import { Img } from "@chakra-ui/image";
import {
  Box,
  HStack,
  Link,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/Logo/logo.svg";
import React, { useState } from "react";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";

const MobileHeader = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack bg="" spacing="0px" alignItems="stretch">
      <HStack d="flex" h="50px">
        <Img
          src={logo}
          alt="logo"
          bg="brand.gray1"
          p="10px"
          w="120px"
          h="100%"
          borderRadius="5px"
        />
        <HStack
          fontSize="12px"
          fontWeight="bold"
          w="220px"
          d="flex"
          justify="space-around"
          color="brand.bgCategory"
        >
          <Link to="#">Ayuda</Link>
          <Link to="#">Mis pedidos</Link>
          <Link to="#">Mi cuenta</Link>
        </HStack>
      </HStack>
      <Stack
        w="full"
        textAlign="center"
        h="40px"
        color="brand.gray2"
        spacing="0"
      >
        <InputGroup color="black">
          <InputLeftAddon bg="">
            <BiSearch />
          </InputLeftAddon>
          <Input
            color="black"
            type="text"
            // value="Buscar un producto..."
            placeholder="Buscar un producto..."
          />
        </InputGroup>
      </Stack>
      <HStack
        justify="space-between"
        p="10px"
        h="50px"
        color="white"
        bg="brand.bgCategory"
        w="360px"
        textAlign="center"
      >
        <GiHamburgerMenu size="25px" onClick={handleOpen} />
        {isOpen && (
          <Box
            w="250px"
            h="300px"
            color="black"
            bg="brand.bgWhite"
            position="absolute"
            top="100px"
            left="0px"
            zIndex="2"
          >
            <Box p="10px" mb="15px">
              <AiOutlineClose onClick={handleOpen} size="25px" />
            </Box>

            <UnorderedList
              listStyleType="none"
              fontWeight="bold"
              textAlign="left"
            >
              {category.map((cat, index) => (
                <VStack d="flex" alignItems="flex-start">
                  <ListItem key={index} as="a" href={cat.href} mb="20px">
                    {cat.title}
                  </ListItem>
                </VStack>
              ))}
            </UnorderedList>
          </Box>
        )}
        <AiOutlineShoppingCart size="25px" />
      </HStack>
    </VStack>
  );
};

export default MobileHeader;
