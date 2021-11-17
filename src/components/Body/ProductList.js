import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const ProductList = ({ Checked }) => {
  const [products, setProducts] = useState([]);
  const [renderProducts, setRenderProducts] = useState([]);

  useEffect(() => {
    fetch("http://remote.fizzmod.com/body.json")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`http://remote.fizzmod.com/menu.json`)
  //     .then((res) => setProducts(res.menu.products));
  // }, []);

  useEffect(() => {
    if (Checked.length !== 0) {
      console.log(Checked.length);
      console.log("Entra en el if");
      let articulosFiltrados = [];
      for (let value of Checked) {
        console.log(value);
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
      console.log("Articulos filtrados:", renderProducts);
    } else {
      fetch("http://remote.fizzmod.com/body.json")
        .then((res) => res.json())
        .then((res) => setRenderProducts(res.products))
        .then(() => console.log("paso por aca:", products));
    }
  }, [Checked]);

  console.log(products);
  console.log(Checked);

  const ProductsToRender = () => {
    let output = renderProducts.length ? renderProducts : products;

    return output.map((product) => (
      <Flex key={product.id} my="5" mt="0">
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
    <Box bg="" w="992px" h="800px">
      <Flex flexWrap="wrap" mt="70px" justifyContent="space-around">
        {ProductsToRender()}
      </Flex>
    </Box>
  );
};

export default ProductList;
