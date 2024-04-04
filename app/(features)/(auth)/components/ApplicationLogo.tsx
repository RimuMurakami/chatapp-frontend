"use client";

import { Heading, Image } from "@chakra-ui/react";

const ApplicationLogo = () => (
  <>
    <Image src={"/chatapp-icon.png"} alt="チャットアプリのアイコン" />
    <Heading textAlign={"center"} fontWeight={"normal"}>
      Chat App
    </Heading>
  </>
);

export default ApplicationLogo;
