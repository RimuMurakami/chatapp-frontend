"use client";

import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "./header";
import { LeftSideNav } from "./left-sidenav";
import { RightSideNav } from "./right-sidenav";
import { TextInput } from "./text-input";
import { useState } from "react";

export default function ChatGrid({ children }) {
  const [isLeftSideNavVisible, setIsLeftSideNavVisible] = useState(true);
  const [isRightSideNavVisible, setIsRightSideNavVisible] = useState(true);
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
    md: `${isLeftSideNavVisible ? "260px" : "0px"} 1fr`,
    lg: `${isLeftSideNavVisible ? "260px" : "0px"} 1fr ${isRightSideNavVisible ? "280px" : "0px"}`,
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
          {isLeftSideNavVisible && <LeftSideNav />}
        </GridItem>
        <GridItem bg="gray.50" area={"chat-message"}>
          {children}
        </GridItem>
        <GridItem bg="gray.100" area={"rightSideNav"} display={displayRightSideNavValue}>
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
