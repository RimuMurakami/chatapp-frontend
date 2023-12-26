import { IoHomeOutline } from "react-icons/io5";
import { Avatar, Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CreateChannel } from "./left-sidenav/create-channel";
import { useChannels } from "../contexts/channel-context";
import { Link } from "@chakra-ui/next-js";
import { ChannelMenuList } from "./left-sidenav/channel-menu-list";

export function LeftSideNav() {
  const channels = useChannels();

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      {/* nav title */}
      <HStack px={1} h={12} borderBottom={"1px solid"} borderColor={"gray.400"}>
        <IoHomeOutline size="32px" />
        <ChannelMenuList />
      </HStack>
      {/* channel title */}
      <VStack pt={4} justify={"space-between"} align={"start"} h={"calc(100dvh - 40px - 64px)"}>
        <VStack align={"start"} p={1} gap={4}>
          {channels.map((channel) => (
            <Link href={`/chat/${channel.channel_id}`} key={channel.channel_id}>
              <HStack gap={3} py={2} width={"240px"} title={channel.channel_name}>
                <Avatar size={"sm"} src="/profile-icon/bob.svg" />
                <Text isTruncated>{channel.channel_name}</Text>
              </HStack>
            </Link>
          ))}
        </VStack>
        <CreateChannel />
      </VStack>
    </Box>
  );
}
