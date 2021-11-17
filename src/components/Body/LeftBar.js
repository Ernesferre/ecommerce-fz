import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack } from "@chakra-ui/layout";

const LeftBar = ({ brand, category, handleToggle }) => {
  console.log("Category:", category);
  console.log("Brand:", brand);

  return (
    <>
      <VStack ml="1rem">
        <Box bg="" color="black" w="210px" h="183px" mt="70px" mb="2rem">
          <Text
            mb="1rem"
            fontSize="18px"
            fontWeight="light"
            fontFamily="Open Sans"
          >
            Filtrar por {brand.title}
          </Text>

          <Box
            w="210"
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
            {brand.values.map((value, index) => (
              <Checkbox
                key={index}
                type="checkbox"
                name={value}
                onChange={() => handleToggle(value)}
              >
                {value}
              </Checkbox>
            ))}
          </VStack>
        </Box>
        <Box
          bg="white"
          color="black"
          w="210px"
          h="183px"
          // ml="1rem"
          mt="4rem"
          mb="2rem"
        >
          <Text
            mb="1rem"
            fontSize="18px"
            fontWeight="light"
            fontFamily="Open Sans"
          >
            Filtrar por {category.title}
          </Text>
          <Box
            w="210"
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
            {category.values.map((value, index) => (
              <Checkbox
                key={index}
                type="checkbox"
                name={value}
                onChange={() => handleToggle(value)}
              >
                {value}
              </Checkbox>
            ))}
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default LeftBar;

{
  /* <Box bg="white" color="black" w="210px" h="183px" ml="2rem" mt="6rem">
          <Text mb="1rem" fontSize="18px" fontWeight="light">
            {" "}
            Filtrar por Categoria{" "}
          </Text>
          <hr color="brand.gray1" />
          <VStack
            mt="1rem"
            alignItems="flex-start"
            fontSize="13px"
            fontWeight="light"
          >
            <Checkbox>Almacen</Checkbox>
            <Checkbox>Verduleria</Checkbox>
            <Checkbox>Lácteos</Checkbox>
          </VStack>
        </Box> */
}
