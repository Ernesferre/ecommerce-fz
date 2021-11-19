import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack, Stack } from "@chakra-ui/layout";

const LeftBar = ({ brand, category, handleToggle }) => {
  return (
    <>
      <Stack ml="1rem" flexDirection={["row", "column"]} fontFamily="Open Sans">
        <Box
          bg={["brand.bgFooter", "white"]}
          color={["white", "black"]}
          w={["150px", "210px"]}
          borderRadius="10px"
          h={["199px", "183px"]}
          mt="70px"
          pl="3px"
          mb="2rem"
        >
          <Text
            mb="1rem"
            fontSize={["16px", "18px"]}
            pt="7px"
            fontWeight="light"
            textAlign={["center", "left"]}
          >
            Filtrar por Marca
          </Text>

          <Box
            h="0.5px"
            borderColor="brand.bgWhite"
            borderWidth="0.3px"
            borderStyle="solid"
          ></Box>

          <VStack
            mt="1rem"
            alignItems="flex-start"
            fontSize="13px"
            fontWeight="light"
          >
            {brand
              ? brand.values.map((value, index) => (
                  <Checkbox
                    key={index}
                    name={value}
                    onChange={() => handleToggle(value)}
                  >
                    {value}
                  </Checkbox>
                ))
              : null}
          </VStack>
        </Box>
        <Box
          bg={["brand.bgFooter", "white"]}
          color={["white", "black"]}
          borderRadius="10px"
          w={["170px", "210px"]}
          h={["200px", "183px"]}
          position={["absolute", "relative"]}
          top={["365px", "0"]}
          left={["11rem", "0"]}
          mt={["10rem", "4rem"]}
          mb="2rem"
        >
          <Text
            mb="1rem"
            pl="2px"
            pt="6px"
            fontSize={["16px", "18px"]}
            fontWeight="light"
            textAlign={["center", "left"]}
          >
            Filtrar por Categoria
          </Text>
          <Box
            h="0.5px"
            borderColor="brand.bgWhite"
            borderWidth="0.3px"
            borderStyle="solid"
          ></Box>
          <VStack mt="1rem" pl="5px" alignItems="flex-start" fontWeight="light">
            {category
              ? category.values.map((value, index) => (
                  <Checkbox
                    key={index}
                    name={value}
                    onChange={() => handleToggle(value)}
                  >
                    {value}
                  </Checkbox>
                ))
              : null}
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default LeftBar;
