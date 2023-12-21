import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CreateChannel } from "../create-channel";

export function LeftSideNav() {
  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      {/* nav title */}
      <HStack px={1} h={12} borderBottom={"1px solid"} borderColor={"gray.400"}>
        <IoHomeOutline size="32px" />
        <HStack pl={2}>
          <Text>すべてのチャンネル</Text>
          <MdKeyboardArrowDown />
        </HStack>
      </HStack>
      {/* channel title */}
      <VStack pt={4} justify={"space-between"} align={"start"} h={"calc(100dvh - 40px - 64px)"}>
        {/* TODO: チャンネルMockデータ作成後map処理 */}
        <VStack align={"start"} p={1} gap={4} isTruncated maxW={"250px"}>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>新規開発プロジェクトについて</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名あええええええええええ</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名だよ</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名うおおおおおおおおおおおおおおおおお</Text>
          </HStack>
          <HStack gap={3}>
            <Avatar size={"sm"} />
            <Text>チャンネル名</Text>
          </HStack>
        </VStack>
        <CreateChannel />
      </VStack>
    </Box>
  );
}
