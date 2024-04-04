"use client";

import { Box, Button, Stack } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <>
      <Stack h={"100dvh"} justify={"center"} align={"center"}>
        <Box fontSize={"larger"}>404</Box>
        <Box fontSize={"larger"}>not found</Box>
      </Stack>
    </>
  );
};

export default NotFoundPage;
