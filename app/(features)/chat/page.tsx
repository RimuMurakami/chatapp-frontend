"use client";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "./components/header";
import { LeftSideNav } from "./components/left-sidenav";
import { RightSideNav } from "./components/right-sidenav";
import { TextInput } from "./components/text-input";
import { ChatMessage } from "./components/chat-message";
import { usePathname } from "next/navigation";
import { DefaultChatMessage } from "./components/chat-message/default-chat-message";

export default function Page() {
  const pathname = usePathname();

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
          <ChatMessage />
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

// TODO: 全体のタスク
// 画面内の各ボタンのイベント時画面作成
