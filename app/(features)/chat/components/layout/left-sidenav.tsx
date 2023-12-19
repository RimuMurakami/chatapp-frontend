import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

export function LeftSideNav() {
  return (
    <Box m={1}>
      <HStack p={2} pb={4}>
        <IoHomeOutline size="30px" />
        <Text>全てのチャンネル</Text>
        <MdKeyboardArrowDown />
      </HStack>
      <VStack>
        <VStack align={"flex-start"} p={1}>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名だよおおおおおお</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
        </VStack>
        <VStack align={"flex-start"} p={1}>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名だよおおおおおお</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
        </VStack>
        <Button colorScheme={"blue"}>新しいチャンネルを追加</Button>
      </VStack>
    </Box>
  );
}
