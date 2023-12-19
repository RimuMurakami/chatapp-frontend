import { Avatar, Box, HStack, Input, Text } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export function Header() {
  return (
    <>
      <Box color={"white"}>
        <HStack justify={"space-between"}>
          <Text textAlign={"center"} fontSize={"x-large"} w={"200px"}>
            Chat App
          </Text>
          <HStack>
            <MdOutlineSearch size="30px" />
            <Input w={"30rem"} placeholder="チャット名、メッセージ内容を検索" />
          </HStack>
          <HStack mr={"2"}>
            <Avatar name="Rechard Meatball" src="" size={"sm"} />
            <Text>Rechard Meatball</Text>
            <IoSettingsOutline size="30px" />
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
