import React from "react";
import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
export const Profile = () => {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded="full"
          variend="link"
          cursor="pointer"
          minW="0"
        >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList>
          <RouteLink to="/cart">
            <MenuItem>Cart</MenuItem>
          </RouteLink>
          <MenuItem>Your Orders</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
