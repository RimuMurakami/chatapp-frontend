"use client";
import { Grid, GridItem } from "@chakra-ui/react";

import { Header } from "./components/layout/header";
import { LeftSideNav } from "./components/layout/left-sidenav";
import { RightSideNav } from "./components/layout/right-sidenav";
import { TextInput } from "./components/layout/text-input";
import { ChatMessage } from "./components/layout/chat-message";

export default function Page() {
  return (
    <>
      <Grid
        templateAreas={`"header header header "
                  "leftSideNav chat-message rightSideNav"
                  "leftSideNav textInput rightSideNav"`}
        gridTemplateRows={"40px 1fr 200px"}
        gridTemplateColumns={"260px 1fr 280px"}
        h="100dvh"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="blue.800" area={"header"}>
          <Header />
        </GridItem>
        <GridItem bg="gray.100" area={"leftSideNav"}>
          <LeftSideNav />
        </GridItem>
        <GridItem bg="gray.50" area={"chat-message"}>
          <ChatMessage />
        </GridItem>
        <GridItem bg="gray.100" area={"rightSideNav"}>
          <RightSideNav />
        </GridItem>
        <GridItem bg="white" area={"textInput"}>
          <TextInput />
        </GridItem>
      </Grid>
    </>
  );
}
