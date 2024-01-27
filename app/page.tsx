"use client";

import { Link } from "@chakra-ui/next-js";
import { Heading, Stack } from "@chakra-ui/react";

import LoginLinks from "@/app/LoginLinks";
import { useAuth } from "./hooks/auth";

export default function Home() {
  return (
    <>
      <LoginLinks />
      <Stack justify={"center"} align={"center"} h={"100dvh"}>
        <Heading>
          <Link href="/login">ENTER CHAT APP</Link>
        </Heading>
      </Stack>
    </>
  );
}
