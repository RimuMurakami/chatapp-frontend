import { IoSettingsOutline } from "react-icons/io5";

import { Menu, MenuButton, Button, MenuList, MenuItem, Avatar, HStack, Text, Box } from "@chakra-ui/react";
import { EditProfile } from "./edit-profile";
import { AppSetting } from "./app-setting";
import { Link } from "@chakra-ui/next-js";

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
        <MenuItem>
          <AppSetting />
        </MenuItem>
        <MenuItem>
          <Link href={"/"} flex={1}>
            ログアウト
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
