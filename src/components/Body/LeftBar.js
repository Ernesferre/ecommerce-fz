import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack, Stack } from "@chakra-ui/layout";

const LeftBar = ({ brand, category, handleToggle }) => {
  // console.log("Category:", category);
  // console.log("Brand:", brand);

  return (
    <>
      <Stack ml="1rem" flexDirection={["row", "column"]} fontFamily="Open Sans">
        <Box
          bg={["gray.200", "white"]}
          color="black"
          w={["150px", "210px"]}
          borderRadius="10px"
          h={["190px", "183px"]}
          mt="70px"
          pl="3px"
          mb="2rem"
        >
          <Text mb="1rem" fontSize="18px" pt="7px" pl="4px" fontWeight="light">
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
          bg={["gray.200", "white"]}
          color="black"
          borderRadius="10px"
          w={["170px", "210px"]}
          h={["190px", "183px"]}
          position={["absolute", "relative"]}
          top={["24rem", "0"]}
          left={["11rem", "0"]}
          mt={["10rem", "4rem"]}
          mb="2rem"
        >
          <Text mb="1rem" pl="2px" pt="6px" fontSize="18px" fontWeight="light">
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
