import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box d={"flex"} textAlign="center">
      <Box p={"1rem 0 2rem 0"}>
        <Heading as="h2">Home</Heading>
      </Box>
      <Box>
        <Link to="/products" style={{ textDecoration: "none", color: "#000" }}>
          <Heading as="h2" fontSize="1.5rem">
            See All Products
          </Heading>
        </Link>
      </Box>
    </Box>
  );
};
