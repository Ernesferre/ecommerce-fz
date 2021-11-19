import { Img } from "@chakra-ui/image";
import { Box, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import atun from "../../assets/imgProductos/atun.jpg";
import cebolla from "../../assets/imgProductos/cebolla.jpg";
import galletitas from "../../assets/imgProductos/galletitas.jpg";
import manteca from "../../assets/imgProductos/manteca.jpg";

const Card = ({ title, image, listPrice, sellingPrice, href }) => {
  return (
    <Link
      href={href}
      h="312px"
      w="210px"
      color="black"
      _hover={{
        color: "brand.bgCategory",
        fontWeight: "bold",
      }}
    >
      {(sellingPrice / listPrice - 1) * 100 < 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="white"
          w="46px"
          h="46px"
          borderRadius="full"
          textAlign="center"
          bg="brand.bgBlue"
          position="absolute"
          fontSize="15px"
          fontWeight="bold"
        >
          {((sellingPrice / listPrice - 1) * 100).toFixed(0)}%
        </Box>
      ) : null}

      {image === "atun" ? (
        <Img src={atun} w="210px" h="210px" p="18px 17px 19px 18px" />
      ) : image === "cebolla" ? (
        <Img src={cebolla} w="210px" h="210px" p="18px 17px 19px 18px" />
      ) : image === "galletitas" ? (
        <Img src={galletitas} w="210px" h="210px" p="18px 17px 19px 18px" />
      ) : image === "manteca" ? (
        <Img src={manteca} w="210px" h="210px" p="18px 17px 19px 18px" />
      ) : null}

      <Text
        textAlign="center"
        mx="auto"
        fontFamily="Open Sans"
        fontSize="14px"
        h="11.42px"
      >
        {title}
      </Text>

      <VStack
        display="flex"
        spacing={3}
        textAlign="center"
        fontFamily="open sans"
      >
        {listPrice === sellingPrice ? (
          <Text h="9.28px" mt="30px">
            {" "}
          </Text>
        ) : (
          <Text
            as="s"
            color="brand.gray2"
            fontSize="13px"
            w="37px"
            h="9.28px"
            mt="30px"
          >
            $ {listPrice}
          </Text>
        )}

        <Text
          color="brand.bgCategory"
          mx="auto"
          fontWeight="bold"
          fontSize="18px"
          w="51px"
          h="12.85px"
        >
          $ {sellingPrice}
        </Text>
      </VStack>
    </Link>
  );
};

export default Card;
