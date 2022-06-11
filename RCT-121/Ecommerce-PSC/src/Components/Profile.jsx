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
          <MenuItem>Cart</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
