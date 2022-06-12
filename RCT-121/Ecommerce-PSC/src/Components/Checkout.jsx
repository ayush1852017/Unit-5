import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

export const Checkout = ({ cart, orderHandle }) => {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  console.log(cart);

  return (
    <>
      <Button
        rounded={"none"}
        w={"full"}
        mt={8}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Checkout
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Confirm Purchase</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart &&
              cart.map((prod) => {
                return (
                  <Box key={prod.id}>
                    <Flex m={3}>
                      <Box>
                        <Image
                          rounded={"lg"}
                          objectFit={"contain"}
                          src={prod.image}
                          boxSize={"100px"}
                          border={"1px solid black"}
                        />
                      </Box>
                      <Box maxW={"250px"} ml={3}>
                        <Text>{prod.title}</Text>
                        <Text>${prod.price}</Text>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button onClick={orderHandle} mr={3}>
              Order
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
