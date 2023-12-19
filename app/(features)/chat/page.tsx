"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import { Header } from "./components/layout/header";
import { LeftSideNav } from "./components/layout/left-sidenav";
import { RightSideNav } from "./components/layout/right-sidenav";

export default function Page() {
  return (
    <>
      <Grid
        templateAreas={`"header header header "
                  "leftSideNav main rightSideNav"
                  "leftSideNav chatBox rightSideNav"`}
        gridTemplateRows={"40px 1fr 200px"}
        gridTemplateColumns={"260px 1fr 280px"}
        h="100dvh"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="blue.800" area={"header"}>
          <Header />
        </GridItem>
        <GridItem bg="gray.50" area={"leftSideNav"}>
          <LeftSideNav />
        </GridItem>
        <GridItem bg="green.300" area={"main"}>
          Main
        </GridItem>
        <GridItem bg="gray.50" area={"rightSideNav"}>
          <RightSideNav />
        </GridItem>
        <GridItem bg="blue.300" area={"chatBox"}>
          ChatBox
        </GridItem>
      </Grid>
    </>
  );
}
