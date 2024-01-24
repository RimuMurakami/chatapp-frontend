"use client";

import { Avatar, Box, Divider, HStack, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useMessages, useDispatchMessages } from "@/app/(features)/chat/contexts/message-context";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useChannels } from "../contexts/channel-context";
import { useUsers } from "../contexts/user-context";

export function ChatMessage() {
  let channel_name = "sample";
  let messages = [
    {
      message_id: 0,
      channel_id: 0,
      user_id: 0,
      text: "自分用のチャットdayo\nうおお",
      timestamp: "2023-08-01T09:00:00",
      message_type: "text",
    },
  ];
  let user = { name: "test name" };

  // let { id } = useParams();
  // id = id ?? "0";
  // const messages = useMessages().filter((message) => message.channel_id === parseInt(id[0]));
  const messagesEndRef = useRef(null);

  // const { channel_name } = useChannels().filter((channel) => channel.channel_id === parseInt(id[0]))[0];

  // const user = useUsers();

  // console.log(user);

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
        <VStack overflowY={"scroll"} gap={1} h={"100%"} w={"100%"}>
          <Box marginTop={"auto"} w={"100%"}>
            {messages.length > 0 ? (
              messages.map((message, i) => {
                // const user = users.find((user) => user.user_id === message.user_id);
                return (
                  <Box key={i} border={"1px solid"} borderColor={"gray.300"} rounded={"xl"} bgColor={"blue.50"}>
                    <HStack p={2} pb={0}>
                      <Avatar size={"sm"} />
                      <Box>{user?.name}</Box>
                      <Spacer />
                      <Box>{message.timestamp}</Box>
                    </HStack>
                    {/* message_text */}
                    <Box p={4}>
                      {message.message_type === "text" ? (
                        <Text>
                          {message.text.split("\n").map((line, i) => (
                            <span key={line}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </Text>
                      ) : message.message_type === "stamp" ? (
                        <Image src={message.text} alt="stamp" width={100} height={100} />
                      ) : (
                        <Text>{message.text}</Text>
                      )}
                    </Box>
                  </Box>
                );
              })
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
