import { IoSettingsOutline } from "react-icons/io5";

import { Menu, MenuButton, Button, MenuList, MenuItem, Avatar, HStack, Text } from "@chakra-ui/react";
import { EditProfile } from "./edit-profile";

export function UserMenuList() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        p={0}
        bgColor={"transparent"}
        color={"white"}
        fontWeight={"normal"}
        _hover={{ bgColor: "gray" }}
      >
        <HStack mr={"2"}>
          <Avatar name="Rechard Meatball" src="/profile-icon/rechard.svg" size={"sm"} />
          <Text display={{ base: "none", lg: "Flex" }}>Richard Meatball</Text>
          <IoSettingsOutline size="30px" />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <EditProfile />
        </MenuItem>
        <MenuItem>アプリ設定</MenuItem>
        <MenuItem>ログアウト</MenuItem>
      </MenuList>
    </Menu>
  );
}
