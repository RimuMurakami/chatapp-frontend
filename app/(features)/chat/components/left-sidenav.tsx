import { IoHomeOutline } from "react-icons/io5";
import { Avatar, Box, Button, Flex, HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { CreateChannel } from "./left-sidenav/create-channel";
import { useChannels, useDispatchChannels } from "../contexts/channel-context";
import { Link } from "@chakra-ui/next-js";
import { FilterChannels } from "./left-sidenav/filter-channels";
import { useParams } from "next/navigation";
import { useChat } from "../contexts/chat-context";
import { CreateChannelMenulist } from "./left-sidenav/create-channel-menulist";
import { useEffect } from "react";
import axios from "@/app/lib/axios";

export function LeftSideNav() {
  // const { channels } = useChat();
  const channels = useChannels();
  // console.log(channels);

  let { id: channel_id } = useParams();
  const paramId = channel_id ?? 0;

  const bgColor = useColorModeValue("blue.100", "blue.800");
  const hoverColor = useColorModeValue("blue.200", "blue.600");

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"} overflowY={"scroll"}>
      {/* nav title */}
      <HStack pl={"10px"} h={12} borderBottom={"1px solid"} borderColor={"gray.400"}>
        <Link href={"/chat"} _hover={{ bg: "blue.100" }}>
          <IoHomeOutline size="28px" />
        </Link>
        <FilterChannels />
      </HStack>
      {/* channel title */}
      <VStack pt={4} justify={"space-between"} align={"start"} h={"calc(100dvh - 40px - 64px)"}>
        <VStack align={"start"} gap={0}>
          {channels?.length > 0 ? (
            channels?.map((channel) => {
              return (
                <Link
                  href={`/chat/${channel.id}`}
                  key={channel.id}
                  _hover={{ textDecoration: "none", bg: hoverColor }}
                  bg={paramId == channel.id ? bgColor : "null"}
                  border={paramId == channel.channel_id ? "2px solid" : "null"}
                  // border={"2px solid"}
                  borderColor={paramId == channel.id ? "blue.200" : "transparent"}
                  rounded={"md"}
                >
                  <HStack gap={3} p={2} py={3} width={"240px"} title={channel.name}>
                    <Avatar size={"sm"} src="" />
                    <Text isTruncated>{channel.name}</Text>
                  </HStack>
                </Link>
              );
            })
          ) : (
            <h1>チャンネルなし</h1>
          )}
        </VStack>
        <CreateChannelMenulist />
      </VStack>
    </Box>
  );
}
