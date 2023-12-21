import { Avatar, Box, HStack, Input, Text } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export function Header() {
  return (
    <>
      <Box color={"white"}>
        <HStack justify={"space-between"}>
          {/* Desktop */}
          <HStack>
            <Text textAlign={"center"} fontSize={"x-large"} w={"260px"}>
              Chat App
            </Text>
            <HStack display={{ base: "none", md: "Flex" }}>
              <MdOutlineSearch size="30px" />
              <Input h={"30px"} w={"300px"} placeholder="チャット名、メッセージ内容を検索" />
            </HStack>
          </HStack>
          <HStack mr={"2"}>
            <Avatar name="Rechard Meatball" src="" size={"sm"} />
            <Text display={{ base: "none", lg: "Flex" }}>Richard Meatball</Text>
            <IoSettingsOutline size="30px" />
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
