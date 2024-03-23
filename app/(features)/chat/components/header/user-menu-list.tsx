import { IoSettingsOutline } from "react-icons/io5";
import { Menu, MenuButton, Button, MenuList, MenuItem, Avatar, HStack, Text, Box } from "@chakra-ui/react";

import { EditProfile } from "./edit-profile";
import { AppSetting } from "./app-setting";

import { useAuth } from "@/app/hooks/auth";

export function UserMenuList() {
  const { user, logout } = useAuth();

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
          <Avatar name={user?.name} src="" size={"sm"} />
          <Text display={{ base: "none", lg: "Flex" }}>{user?.name}</Text>
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
          <Box onClick={logout} flex={1}>
            ログアウト
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
