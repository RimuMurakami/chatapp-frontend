"use client";
import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "./components/layout/header";
import { LeftSideNav } from "./components/layout/left-sidenav";
import { RightSideNav } from "./components/layout/right-sidenav";
import { TextInput } from "./components/layout/text-input";
import { ChatMessage } from "./components/layout/chat-message";

export default function Page() {
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