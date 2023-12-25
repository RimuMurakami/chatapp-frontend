"use client";

import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "./header";
import { LeftSideNav } from "./left-sidenav";
import { RightSideNav } from "./right-sidenav";
import { TextInput } from "./text-input";
import { useParams } from "next/navigation";
import { useMessages } from "../contexts/message-context";
import { useChannels } from "../contexts/channel-context";

export default function ChatGrid({ children }) {
  const displayRightSideNavValue = useBreakpointValue({ base: "none", lg: "block" });
  const displayLeftSideNavValue = useBreakpointValue({ base: "none", md: "block" });
  const templateAreas = useBreakpointValue({
    base: `"header header header "
           "chat-message chat-message chat-message"
           "textInput textInput textInput"`,
    md: `"header header header "
         "leftSideNav chat-message chat-message"
         "leftSideNav textInput textInput"`,
    lg: `"header header header "
         "leftSideNav chat-message rightSideNav"
         "leftSideNav textInput rightSideNav"`,
  });

  const templateColumns = useBreakpointValue({
    base: "1fr",
    md: "260px 1fr",
    lg: "260px 1fr 280px",
  });

  // let { id } = useParams();
  // id = id ?? "0";
  // const messages = useMessages().filter((message) => message.channel_id === parseInt(id[0]));
  // const { channel_name } = useChannels().filter((channel) => channel.channel_id === parseInt(id[0]))[0];

  // console.log(id);

  return (
    <>
      <Grid
        templateAreas={templateAreas}
        gridTemplateRows={"40px 1fr 200px"}
        gridTemplateColumns={templateColumns}
        h="100dvh"
        w="100dvw"
        color="blackAlpha.700"
        // fontWeight="bold"
      >
        <GridItem bg="blue.800" area={"header"}>
          <Header />
        </GridItem>
        <GridItem bg="gray.100" area={"leftSideNav"} display={displayLeftSideNavValue}>
          <LeftSideNav />
        </GridItem>
        <GridItem bg="gray.50" area={"chat-message"}>
          {children}
        </GridItem>
        <GridItem bg="gray.100" area={"rightSideNav"} display={displayRightSideNavValue}>
          <RightSideNav />
        </GridItem>
        <GridItem bg="white" area={"textInput"}>
          <TextInput />
        </GridItem>
      </Grid>
    </>
  );
}
