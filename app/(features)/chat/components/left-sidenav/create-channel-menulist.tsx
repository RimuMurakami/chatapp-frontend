import { Menu, MenuList, MenuItem, MenuButton, Button, Box } from "@chakra-ui/react";
import { CreateChannel } from "./create-channel";
import { AddUser } from "./add-user";

const CreateChannelMenulist = () => {
  return (
    <Menu closeOnSelect={true}>
      <MenuButton as={Button} display={"flex"} alignSelf={"center"} my={3} colorScheme={"blue"}>
        新しいチャンネルを作成
      </MenuButton>
      <MenuList minW={"100%"} p={0}>
        <MenuItem>
          <CreateChannel />
        </MenuItem>
        <MenuItem>
          <AddUser />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export { CreateChannelMenulist };
