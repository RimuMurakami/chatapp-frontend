import { AiOutlineMore } from "react-icons/ai";
import { Menu, MenuList, MenuItem, MenuButton, Button, Box } from "@chakra-ui/react";
import { DeleteAlertDialog } from "./delete-alert-dialog";
import { useAuth } from "@/app/hooks/auth";

const MessageMenu = ({ message, handleDelete, setEditToggle }) => {
  const { user } = useAuth();
  return (
    <Menu closeOnSelect={true}>
      <MenuButton rounded={"full"} _hover={{ bg: "gray.200" }} p={1}>
        <AiOutlineMore />
      </MenuButton>
      <MenuList minW={"100%"} p={0}>
        {user.id === message.user?.id ? (
          <>
            <MenuItem onClick={() => setEditToggle(message.id)}>編集</MenuItem>
            <DeleteAlertDialog handleDelete={handleDelete} message={message} />
            {/* <MenuItem onClick={() => handleDelete(message)}>削除</MenuItem> */}
          </>
        ) : (
          <MenuItem>返信(未実装)</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export { MessageMenu };
