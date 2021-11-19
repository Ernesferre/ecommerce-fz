import { Box, Link, Text, VStack, HStack } from "@chakra-ui/layout";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";

const MobileFooter = () => {
  return (
    <VStack
      bg="brand.bgFooter"
      color="white"
      h="300px"
      w="full"
      pt="30px"
      spacing="50px"
    >
      <VStack>
        <HStack spacing={6} position="absolute" cursor="pointer">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
        </HStack>
      </VStack>

      <HStack mt="10px" spacing="2px">
        <VStack>
          <Box>
            <Text
              textAlign="left"
              mb="5px"
              fontWeight="bold"
              fontSize="10px"
              letterSpacing="1px"
            >
              PRODUCTOS
            </Text>

            <hr />

            <VStack
              w="90px"
              h="140px"
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
        </VStack>

        <VStack>
          <Box>
            <Text
              textAlign="left"
              mb="5px"
              fontWeight="bold"
              fontSize="10px"
              letterSpacing="1px"
            >
              MI CUENTA
            </Text>

            <hr />

            <VStack
              w="90px"
              h="140px"
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
        </VStack>

        <VStack>
          <Box>
            <Text
              textAlign="left"
              mb="5px"
              fontWeight="bold"
              fontSize="10px"
              letterSpacing="1px"
            >
              CONTACTANOS
            </Text>

            <hr />

            <VStack
              w="90px"
              h="140px"
              alignItems="flex-start"
              mt="20px"
              fontWeight="light"
              fontSize="12px"
            >
              <Link href="#?">Nuestras Sucursales</Link>
              <Link href="#?">Horarios y Teléfonos</Link>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MobileFooter;
