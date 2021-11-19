import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Card from "./Card";

const ProductList = ({ Checked }) => {
  const [products, setProducts] = useState([]);
  const [renderProducts, setRenderProducts] = useState([]);

  useEffect(() => {
    fetch("http://remote.fizzmod.com/body.json")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  useEffect(() => {
    if (Checked.length !== 0) {
      let articulosFiltrados = [];
      for (let value of Checked) {
        const MarcaFiltrada = products.filter(
          (product) => product.attributes[0].value === value
        );
        const CategoriaFiltrada = products.filter(
          (product) => product.attributes[1].value === value
        );
        articulosFiltrados = [
          ...articulosFiltrados,
          ...MarcaFiltrada,
          ...CategoriaFiltrada,
        ];
      }
      setRenderProducts(articulosFiltrados);
    } else {
      fetch("http://remote.fizzmod.com/body.json")
        .then((res) => res.json())
        .then((res) => setRenderProducts(res.products));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Checked]);

  const ProductsToRender = () => {
    let output = renderProducts.length ? renderProducts : products;

    return output.map((product) => (
      <Flex key={product.id} my="5" mx="auto" mt="0">
        <Card
          title={product.title}
          image={product.image.slice(0, -4)}
          listPrice={product.price.listPrice}
          sellingPrice={product.price.sellingPrice}
          href={product.href}
        />
      </Flex>
    ));
  };

  return (
    <Box w={["360px", "992px"]} h={["360px", "800px"]} position="relative">
      <Flex
        flexWrap="wrap"
        flexDirection={["column", "row"]}
        mt={["10px", "70px"]}
        justifyContent="space-around"
      >
        {ProductsToRender()}
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProductList;
