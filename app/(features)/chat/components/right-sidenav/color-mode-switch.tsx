"use client";

import { Button, useColorMode } from "@chakra-ui/react";

export function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} position={"absolute"} bottom={0} right={0} colorScheme={"blackAlpha"}>
      {colorMode === "light" ? "Light" : "Dark"}
    </Button>
  );
}
