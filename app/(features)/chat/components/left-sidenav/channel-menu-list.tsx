import { MdKeyboardArrowDown } from "react-icons/md";

import { Menu, MenuButton, Button, MenuList, MenuItem, Avatar, HStack, Text, Box } from "@chakra-ui/react";

export function ChannelMenuList() {
  return (
    <Menu>
      <MenuButton p={0} fontWeight={"normal"}>
        <HStack pl={2}>
          <Text>すべてのチャンネル</Text>
          <MdKeyboardArrowDown />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>チャンネル一覧</MenuItem>
        <MenuItem>チャンネル一覧</MenuItem>
        <MenuItem>フィルタ等</MenuItem>
        <MenuItem>フィルタ等</MenuItem>
      </MenuList>
    </Menu>
  );
}
