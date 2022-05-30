import {
  Box,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Product = ({ pData }) => {
  console.log(pData);
  return (
    <div>
      {Object.keys(pData).map((key, value) => (
        <Stack data-cy="product">
          <Image data-cy="product-image" />
          <Text data-cy="product-category">{key[value]}</Text>
          <Tag>
            <TagLabel data-cy="product-gender"></TagLabel>
          </Tag>
          <Heading data-cy="product-title"></Heading>
          <Box data-cy="product-price"></Box>
        </Stack>
      ))}
    </div>
  );
};

export default Product;