import { Box, VStack } from "@chakra-ui/layout";
import React from "react";

const Title = () => {
  return (
    <>
      <VStack display="flex" spacing={-6}>
        <Box
          bg="white"
          w="220px"
          h="50px"
          mx="auto"
          mt="31px"
          color="brand.bgFooter"
          textAlign="center"
          fontWeight="bold"
          fontFamily="Open Sans"
          fontSize="36px"
          zIndex="1"
        >
          Productos
        </Box>

        <Box
          w="96%"
          // h="0.5px"
          mx="auto"
          borderColor="brand.gray2"
          borderWidth="0.5px"
          borderStyle="solid"
        ></Box>
      </VStack>
    </>
  );
};

export default Title;
