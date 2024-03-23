"use client";

import { Grid, GridItem, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

import { Header } from "./components/header";
import { LeftSideNav } from "./components/left-sidenav";
import { RightSideNav } from "./components/right-sidenav";
import { TextInput } from "./components/text-input";
import { ChatMessage } from "./components/chat-message";

export default function ChatApp() {
  // レイアウト関係
  const [isLeftSideNavVisible, setIsLeftSideNavVisible] = useState(true);
  const [isRightSideNavVisible, setIsRightSideNavVisible] = useState(true);
  const displayRightSideNavValue = useBreakpointValue({ base: "none", lg: "block" }, { ssr: false });
  const displayLeftSideNavValue = useBreakpointValue({ base: "none", md: "block" }, { ssr: false });
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
    md: `${isLeftSideNavVisible ? "260px" : "0px"} 1fr`,
    lg: `${isLeftSideNavVisible ? "260px" : "0px"} 1fr ${isRightSideNavVisible ? "280px" : "0px"}`,
  });

  // def colorMode
  const headerBgColor = useColorModeValue("blue.600", "blue.900");
  const sideNavBgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Grid
        templateAreas={templateAreas}
        gridTemplateRows={"40px 1fr 200px"}
        gridTemplateColumns={templateColumns}
        h="100dvh"
        w="100dvw"
        // color="blackAlpha.700"
        // fontWeight="bold"`
      >
        <GridItem bg={headerBgColor} area={"header"}>
          <Header />
        </GridItem>
        <GridItem bg={sideNavBgColor} area={"leftSideNav"} display={displayLeftSideNavValue}>
          {isLeftSideNavVisible && <LeftSideNav />}
        </GridItem>
        <GridItem bg="gray.50" area={"chat-message"}>
          <ChatMessage />
        </GridItem>
        <GridItem bg="gray.100" area={"rightSideNav"} display={displayRightSideNavValue} position={"relative"}>
          {isRightSideNavVisible && <RightSideNav />}
        </GridItem>
        <GridItem bg="white" area={"textInput"}>
          <TextInput
            setIsLeftSideNavVisible={setIsLeftSideNavVisible}
            isLeftSideNavVisible={isLeftSideNavVisible}
            isRightSideNavVisible={isRightSideNavVisible}
            setIsRightSideNavVisible={setIsRightSideNavVisible}
          />
        </GridItem>
      </Grid>
    </>
  );
}
