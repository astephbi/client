import React from 'react';
import {
  Box,
  Image,
  Card,
  Stack,
  ButtonGroup,
  Heading,
  Text,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3px"
      minW="240px"
      h="450px"
      rounded="lg"
      shadow="lg"
    >
      <Card maxW="sm">
        <CardBody>
          <Image
            src={product.image}
            alt={product.image}
            height="300px"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.name}</Heading>

            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Box flex="1" maxH="S" alignItems="baseline"></Box>
    </Stack>
  );
};

export default ProductCard;
