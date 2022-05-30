import { Flex, Grid } from '@chakra-ui/react'
import axios from "axios";
import React, {useState, useEffect} from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [pData, setPData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/products").then((res) => {
      // console.log(res.data);
      setPData(res.data);
    });
  }, []);
  // console.log(pData);

  return (
    <Flex>
      <AddProduct />
      <Grid>
        <Product pData={pData} />
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;

