import { IoHomeOutline } from "react-icons/io5";
import { Avatar, Box, Button, Flex, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { CreateChannel } from "./left-sidenav/create-channel";
import { useChannels } from "../contexts/channel-context";
import { Link } from "@chakra-ui/next-js";
import { ChannelMenuList } from "./left-sidenav/channel-menu-list";
import { useParams } from "next/navigation";
import { useChat } from "../contexts/chat-context";

export function LeftSideNav() {
  const { channels } = useChat();

  let { id } = useParams();
  const paramId = (id ?? "0")[0];

  // const channels = useChannels();

  const bgColor = useColorModeValue("blue.100", "blue.800");

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      {/* nav title */}
      <HStack px={1} h={12} borderBottom={"1px solid"} borderColor={"gray.400"}>
        <Link href={"/chat"} _hover={{ bg: "blue.100" }}>
          <IoHomeOutline size="32px" />
        </Link>
        <ChannelMenuList />
      </HStack>
      {/* channel title */}
      <VStack pt={4} justify={"space-between"} align={"start"} h={"calc(100dvh - 40px - 64px)"}>
        <VStack align={"start"} gap={0}>
          {channels?.map((channel) => {
            return (
              <Link
                href={`/chat/${channel.id}`}
                key={channel.id}
                _hover={{ textDecoration: "none", bg: bgColor }}
                bg={parseInt(paramId) === channel.id ? bgColor : "null"}
                border={parseInt(paramId) === channel.channel_id ? "2px solid" : "null"}
                // border={"2px solid"}
                borderColor={parseInt(paramId) === channel.id ? "blue.200" : "transparent"}
                rounded={"md"}
              >
                <HStack gap={3} p={2} py={3} width={"240px"} title={channel.name}>
                  <Avatar size={"sm"} src="" />
                  <Text isTruncated>{channel.name}</Text>
                </HStack>
              </Link>
            );
          })}
        </VStack>
        <CreateChannel />
      </VStack>
    </Box>
  );
}
