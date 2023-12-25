"use client";

import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useMessages, useDispatchMessages } from "@/app/(features)/chat/contexts/message-context";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useChannels } from "../../contexts/channel-context";
import { channel } from "diagnostics_channel";

export default function Page() {
  const { id } = useParams();
  const messages = useMessages().filter((message) => message.channel_id === parseInt(id[0]));
  const messagesEndRef = useRef(null);

  // const { channel_name } = useChannels().filter((channel) => channel.channel_id === parseInt(id[0]));
  const { channel_name } = useChannels().filter((channel) => channel.channel_id === parseInt(id[0]))[0];
  console.log(channel_name);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <VStack p={1} h={"calc(100dvh - 240px)"} color={"black"}>
        {/* channel title */}
        <Heading
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          h={"12"}
          size={"md"}
          bgColor={"white"}
          borderBottom={"1px solid"}
          borderColor={"gray.400"}
        >
          {channel_name}
        </Heading>
        {/* messages */}
        <VStack overflowY={"scroll"} gap={1} h={"100%"}>
          <Box marginTop={"auto"}>
            {messages.length > 0 ? (
              messages.map((message) => (
                <Box
                  key={message.message_id}
                  border={"1px solid"}
                  borderColor={"gray.300"}
                  p={6}
                  w={"100%"}
                  rounded={"xl"}
                  bgColor={"blue.50"}
                >
                  {message.message_type === "text" ? (
                    <Text>
                      {message.text.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </Text>
                  ) : (
                    <Image src={message.text} alt="stamp" width={100} height={100} />
                  )}
                </Box>
              ))
            ) : (
              <h1>読み込み中...</h1>
            )}
            <Box ref={messagesEndRef} />
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
