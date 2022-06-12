import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkout } from "../Components/Checkout";
import { removeCartData } from "../Redux/Cart/actions";
import { addOrderData } from "../Redux/Orders/action";

export const Cart = () => {
  const cartData = useSelector((state) => state.cartStore.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeCartData(id));
  };
  const orderHandle = () => {
    cartData && dispatch(addOrderData(cartData));
  };
  console.log(cartData);
  return (
    <Box p={4}>
      <Center>
        <Heading>Cart</Heading>
      </Center>
      {cartData.length &&
        cartData?.map((prod) => {
          return (
            <Center>
              <Box
                display="flex"
                key={prod.id}
                border="1px solid black"
                m={"3"}
                rounded={"lg"}
              >
                <Box
                  key={prod.id}
                  role={"group"}
                  p={6}
                  m={3}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) `,
                      backgroundImage: `url(${prod.image})`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      // position={"absolute"}
                      width={282}
                      objectFit={"contain"}
                      src={prod.image}
                    />
                  </Box>
                </Box>
                <Box>
                  <Stack
                    pt={10}
                    role={"group"}
                    p={6}
                    maxW={"330px"}
                    w={"400px"}
                    rounded={"lg"}
                  >
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Brand
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {prod.title}
                    </Heading>
                    <Text
                      fontWeight={800}
                      fontSize={"xl"}
                      overflow="hidden"
                      whiteSpace={"nowrap"}
                      textOverflow={"ellipsis"}
                    >
                      {prod.description}
                    </Text>
                    <Text fontWeight={800} fontSize={"xl"}>
                      ${prod.price}
                    </Text>

                    <Button
                      variant={"solid"}
                      leftIcon={<DeleteIcon />}
                      onClick={() => handleRemove(`${prod.id}`)}
                    >
                      Remove
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Center>
          );
        })}
      <Center>
        <Checkout cart={cartData} orderHandle={orderHandle} />
      </Center>
    </Box>
  );
};
