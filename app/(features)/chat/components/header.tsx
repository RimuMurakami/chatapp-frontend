import { Avatar, Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import { MdOutlineSearch } from "react-icons/md";
import { UserMenuList } from "./header/user-menu-list";
import { Link } from "@chakra-ui/next-js";

export function Header() {
  return (
    <>
      <Box color={"white"}>
        <HStack justify={"space-between"}>
          {/* Desktop */}
          <HStack>
            <Link href={"/chat"} _hover={{ textDecoration: "none" }}>
              <Text
                textAlign={{ base: "start", md: "center" }}
                ml={{ base: 4, md: "0" }}
                fontSize={"x-large"}
                w={"260px"}
              >
                Chat App
              </Text>
            </Link>
            <HStack display={{ base: "none", md: "Flex" }}>
              <MdOutlineSearch size="30px" />
              <Input h={"30px"} w={"300px"} placeholder="チャット名、メッセージ内容を検索" />
            </HStack>
          </HStack>
          <UserMenuList />
        </HStack>
      </Box>
    </>
  );
}
