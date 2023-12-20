import { LuPencilLine, LuPlus } from "react-icons/lu";

import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";

export function RightSideNav() {
  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      <Box h={"40dvh"}>
        <HStack p={1} h={"12"} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>概要</Text>
          <LuPencilLine size="24px" />
        </HStack>
        <Box pt={4} w={"100%"} h={"80%"} bgColor={"gray.100"}>
          ここに概要
        </Box>
      </Box>
      <Box>
        <HStack p={1} h={12} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>タスク</Text>
          <LuPlus size="24px" />
        </HStack>
        <Box pt={4} w={"100%"} h={"100%"} bgColor={"gray.100"}>
          ここにタスク
        </Box>
      </Box>
    </Box>
  );
}
