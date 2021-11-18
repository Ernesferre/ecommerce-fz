import { Checkbox } from "@chakra-ui/checkbox";
import { Box, Text, VStack } from "@chakra-ui/layout";

const LeftBar = ({ brand, category, handleToggle }) => {
  console.log("Category:", category);
  console.log("Brand:", brand);
  // const [disable, setdisable] = useState(

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
            Filtrar por Marca
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
            {brand
              ? brand.values.map((value, index) => (
                  <Checkbox
                    key={index}
                    type="checkbox"
                    name={value}
                    onChange={() => handleToggle(value)}
                  >
                    {value}
                  </Checkbox>
                ))
              : null}
          </VStack>
        </Box>
        <Box bg="white" color="black" w="210px" h="183px" mt="4rem" mb="2rem">
          <Text
            mb="1rem"
            fontSize="18px"
            fontWeight="light"
            fontFamily="Open Sans"
          >
            Filtrar por Categoria
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
            {category
              ? category.values.map((value, index) => (
                  <Checkbox
                    key={index}
                    type="checkbox"
                    name={value}
                    onChange={() => handleToggle(value)}
                  >
                    {value}
                  </Checkbox>
                ))
              : null}
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default LeftBar;
