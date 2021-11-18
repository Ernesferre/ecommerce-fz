import { Box, HStack, VStack, Link, Text, Spacer } from "@chakra-ui/layout";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box
      h="320px"
      pt="55px"
      pl="230px"
      bg="brand.bgFooter"
      color="white"
      position="relative"
      alignContent="center"
      fontFamily="Open Sans"
    >
      <HStack spacing="83px" alignItems="flex-start">
        <Box>
          <Text
            textAlign="left"
            mb="5px"
            fontWeight="bold"
            fontSize="12px"
            letterSpacing="1px"
          >
            PRODUCTOS
          </Text>

          <hr />

          <VStack
            w="127px"
            h="117px"
            alignItems="flex-start"
            mt="20px"
            fontWeight="light"
            fontSize="12px"
          >
            <Link href="#?">Compre junto</Link>
            <Link href="#?">Kit look</Link>
            <Link href="#?">Completa tu compra</Link>
            <Link href="#?">Shop the look</Link>
            <Link href="#?">Sin Stock</Link>
          </VStack>
        </Box>
        <Box>
          <Text
            textAlign="left"
            mb="5px"
            fontWeight="bold"
            fontSize="12px"
            letterSpacing="1px"
          >
            MI CUENTA
          </Text>

          <hr />

          <VStack
            w="127px"
            h="117px"
            alignItems="flex-start"
            mt="20px"
            fontWeight="light"
            fontSize="12px"
          >
            <Link href="#?">Mis pedidos</Link>
            <Link href="#?">Wishlist</Link>
            <Link href="#?">Productos frecuentes</Link>
            <Link href="#?">Mis listas</Link>
            <Link href="#?">Mis recetas</Link>
          </VStack>
        </Box>
        <Box>
          <Text
            textAlign="left"
            mb="5px"
            fontWeight="bold"
            fontSize="12px"
            letterSpacing="1px"
          >
            CONTACTANOS
          </Text>

          <hr />

          <VStack
            w="127px"
            h="117px"
            alignItems="flex-start"
            mt="20px"
            fontWeight="light"
            fontSize="12px"
          >
            <Link href="#?">Nuestras Sucursales</Link>
            <Link href="#?">Horarios y Teléfonos</Link>
          </VStack>
        </Box>

        <Spacer></Spacer>

        <HStack spacing={6} position="absolute" right="230px" cursor="pointer">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
