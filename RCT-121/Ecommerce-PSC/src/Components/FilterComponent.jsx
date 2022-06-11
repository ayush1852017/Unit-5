import { Checkbox, CheckboxGroup, Heading } from "@chakra-ui/react";
import { Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.getAll("category") || []
  );
  useEffect(() => {
    if (categoryFilter) {
      setSearchParams({ category: categoryFilter });
    }
  }, [categoryFilter, setCategoryFilter]);
  const handleFilter = (value) => {
    // console.log(value);
    setCategoryFilter(value);
  };

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Heading as="h2" size="sm">
          Filter
        </Heading>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryFilter}
          onChange={handleFilter}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="jewelery">Jewelery</Checkbox>
            <Checkbox value="men's clothing">Men Clothing</Checkbox>
            <Checkbox value="women's clothing">Women Clothing</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};
