import { IoHomeOutline } from "react-icons/io5";
import { Avatar, AvatarGroup, Box, HStack, Spacer, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { useChannels } from "../contexts/channel-context";
import { Link } from "@chakra-ui/next-js";
import { FilterChannels } from "./left-sidenav/filter-channels";
import { useParams } from "next/navigation";
import { CreateChannelMenulist } from "./left-sidenav/create-channel-menulist";
import { ChannelMenu } from "./left-sidenav/channel-menu";

export function LeftSideNav() {
  const channels = useChannels();

  let { id: channel_id } = useParams();
  const paramId = Number(channel_id ?? 0);

  const bgColor = useColorModeValue("blue.100", "blue.800");
  const hoverColor = useColorModeValue("blue.200", "blue.600");

  return (
    <Box m={0} maxH={"calc(100dvh - 40px)"}>
      {/* nav title */}
      <HStack pl={"10px"} h={12} borderBottom={"1px solid"} borderColor={"gray.400"}>
        <Link href={"/chat"} _hover={{ bg: "blue.100" }}>
          <IoHomeOutline size="28px" />
        </Link>
        <FilterChannels />
      </HStack>
      {/* channel title */}
      <VStack pt={4} pl={1} justify={"space-between"} align={"start"} h={"calc(100dvh - 40px - 64px)"}>
        {/* <VStack align={"start"} gap={0} overflowY={"scroll"}>
         */}
        <VStack
          align={"space-between"}
          gap={0}
          overflowY={"scroll"}
          sx={{
            "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari用
            scrollbarWidth: "none", // Firefox用
            msOverflowStyle: "none", // IE、Edge用
          }}
        >
          {channels?.length > 0 ? (
            channels?.map((channel) => {
              return (
                <HStack key={channel.id}>
                  <Link
                    href={`/chat/${channel.id}`}
                    _hover={{ textDecoration: "none", bg: hoverColor }}
                    bg={paramId == channel.id ? bgColor : ""}
                    border={paramId == channel.id ? "2px solid" : ""}
                    borderColor={paramId == channel.id ? "blue.200" : "transparent"}
                    rounded={"md"}
                  >
                    <HStack gap={1} py={3} width={"220px"} title={channel.name}>
                      <AvatarGroup size={"sm"} max={2} spacing={"-1.3rem"} minW={"54.4px"}>
                        {channel.users?.map((user) => (
                          <Avatar key={user.id} name={user.name} src={""} />
                        ))}
                      </AvatarGroup>
                      <Text isTruncated>{channel.name}</Text>
                      <Spacer />
                    </HStack>
                  </Link>
                  <ChannelMenu channel_id={channel.id} channel_users={channel.users} channel_name={channel.name} />
                </HStack>
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
