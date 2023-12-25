import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CreateChannel } from "../create-channel/create-channel";
import { useChannels } from "../../contexts/channel-context";

export function LeftSideNav() {
  const channels = useChannels();

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
          {channels.map((channel) => (
            <HStack gap={3} py={2} width={"100%"}>
              <Avatar size={"sm"} />
              <Text>{channel.channel_name}</Text>
            </HStack>
          ))}
        </VStack>
        {/* <VStack align={"start"} p={1} gap={4} isTruncated maxW={"250px"}>
          <HStack gap={3} py={2} width={"100%"}>
            <Avatar size={"sm"} />
            <Text>佐藤</Text>
          </HStack>
          <HStack gap={3} py={2} width={"100%"}>
            <Avatar size={"sm"} />
            <Text>田中</Text>
          </HStack>
          <HStack gap={3} py={2} width={"100%"} bgColor={"blue.100"}>
            <Avatar size={"sm"} />
            <Text>新規開発プロジェクトについて</Text>
          </HStack>
          <HStack gap={3} py={2} width={"100%"}>
            <Avatar size={"sm"} />
            <Text>山田</Text>
          </HStack>
          <HStack gap={3} py={2} width={"100%"}>
            <Avatar size={"sm"} />
            <Text>涼宮</Text>
          </HStack>
          <HStack gap={3} py={2} width={"100%"}>
            <Avatar size={"sm"} />
            <Text>中村</Text>
          </HStack>
        </VStack> */}
        <CreateChannel />
      </VStack>
    </Box>
  );
}
