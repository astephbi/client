import React from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { Wrap, WrapItem, Center } from '@chakra-ui/react';
import { products } from '../products.js';

const ProductScreen = () => {
  return (
    <Wrap spacing={4} justify="center" minHeight="100vh">
      {products.map((product) => (
        <WrapItem key={product._id}>
          <Center w="350px" h="750px" mb="200px">
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default ProductScreen;
