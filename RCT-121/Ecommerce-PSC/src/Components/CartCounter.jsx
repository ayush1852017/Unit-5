import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../Redux/Cart/actions";

export const CartCounter = () => {
  const cart = useSelector((state) => state?.cartStore?.cart);
  console.log(cart && cart.length);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCartData());
    }
  }, []);

  return (
    <Box
      backgroundColor="#000"
      color="#fff"
      padding="0 0 22px 6px"
      position="absolute"
      right="2px"
      borderRadius="50%"
      width="21px"
      height="5px"
    >
      {cart ? cart.length : 0}
    </Box>
  );
};
