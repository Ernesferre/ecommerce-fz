import { Img } from "@chakra-ui/image";
import { Box, Link, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import atun from "../../assets/imgProductos/atun.jpg";
import cebolla from "../../assets/imgProductos/cebolla.jpg";
import galletitas from "../../assets/imgProductos/galletitas.jpg";
import manteca from "../../assets/imgProductos/manteca.jpg";

const Card = ({ title, image, listPrice, sellingPrice, href }) => {
  return (
    <Link href={href} h="312px" w="210px" bg="white">
      {(sellingPrice / listPrice - 1) * 100 < 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
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
        <Img
          src={atun}
          alt="imagen"
          w="210px"
          h="210px"
          pt="18.58px"
          pb="19.52px"
          pl="20.44px"
          pr="17.66px"
        />
      ) : image === "cebolla" ? (
        <Img
          src={cebolla}
          alt="imagen"
          w="210px"
          h="210px"
          pt="18.58px"
          pb="19.52px"
          pl="20.44px"
          pr="17.66px"
        />
      ) : image === "galletitas" ? (
        <Img
          src={galletitas}
          alt="imagen"
          w="210px"
          h="210px"
          pt="18.58px"
          pb="19.52px"
          pl="20.44px"
          pr="17.66px"
        />
      ) : image === "manteca" ? (
        <Img
          src={manteca}
          alt="imagen"
          w="210px"
          h="210px"
          pt="18.58px"
          pb="19.52px"
          pl="20.44px"
          pr="17.66px"
        />
      ) : null}

      <Text
        color="black"
        textAlign="center"
        mx="auto"
        fontFamily="Open Sans"
        fontSize="14px"
        h="11.42px"
      >
        {title}
      </Text>

      <VStack display="flex" spacing={3}>
        {listPrice === sellingPrice ? (
          <Text h="9.28px" mt="30px">
            {" "}
          </Text>
        ) : (
          <Text
            as="s"
            textAlign="center"
            color="brand.gray2"
            fontFamily="open sans"
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
          textAlign="center"
          mx="auto"
          fontFamily="open sans"
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
