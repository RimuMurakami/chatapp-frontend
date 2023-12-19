import { LuPencilLine, LuPlus } from "react-icons/lu";

import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";

export function RightSideNav() {
  return (
    <Box m={1}>
      <Box h={"40dvh"}>
        <HStack p={2} pb={4} justify={"space-between"}>
          <Text>概要</Text>
          <LuPencilLine size="30px" />
        </HStack>
        <Box w={"100%"} h={"80%"} bgColor={"gray.100"}>
          ここに概要
        </Box>
      </Box>
      <Box h={"40dvh"}>
        <HStack p={2} pb={4} justify={"space-between"}>
          <Text>タスク</Text>
          <LuPlus size="30px" />
        </HStack>
        <Box w={"100%"} h={"100%"} bgColor={"gray.100"}>
          ここにタスク
        </Box>
      </Box>
    </Box>
  );
}
