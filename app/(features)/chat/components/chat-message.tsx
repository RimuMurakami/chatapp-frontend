"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useMessages, useDispatchMessages } from "@/app/(features)/chat/contexts/message-context";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useChannels } from "../contexts/channel-context";
import { useUsers } from "../contexts/user-context";
import { useChat } from "../contexts/chat-context";
import axios from "@/app/lib/axios";
import { useAuth } from "@/app/hooks/auth";
import { MessageMenu } from "./chat-message/message-menu";
import { EditMessage } from "./chat-message/edit-message";

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let formattedDate = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
  let formattedTime = date.getHours() + "時" + date.getMinutes() + "分";
  return formattedDate + " " + formattedTime;
}

export function ChatMessage() {
  // const { channels } = useChat();
  // const { id: channel_id } = useParams();
  // const channel = channels?.find((channel) => channel.id == channel_id);
  // const [messages, setMessages] = useState(channel?.messages);

  const { user } = useAuth();

  const messages = useMessages();
  const channel = messages[0]?.channel;

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  const dispatch = useDispatchMessages();

  const [editToggle, setEditToggle] = useState(null);

  function handleDelete(message) {
    const deleteMessage = async () => {
      try {
        const response = await axios.delete(`api/messages/${message.id}`);
        dispatch({ type: "message/delete", id: response.data.id });
      } catch (error) {
        console.error(error);
      }
    };
    deleteMessage();
  }

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
          {channel?.name}
        </Heading>
        {/* messages */}
        <VStack overflowY={"scroll"} gap={1} h={"100%"} w={"100%"}>
          <Box marginTop={"auto"} w={"100%"}>
            {messages?.length > 0 ? (
              messages.map((message) => {
                return (
                  <Box
                    key={message.id}
                    border={"1px solid"}
                    borderColor={"gray.100"}
                    rounded={"xl"}
                    bgColor={editToggle === message?.id ? "blue.300" : ""}
                    _hover={{ bg: "blue.50", borderColor: "blue.100" }}
                    transition={"all 0.4s normal"}
                  >
                    <HStack p={2} pb={0}>
                      <Avatar size={"sm"} name={message.user?.name ?? user.name} />
                      <Box>{message.user?.name ?? user.name}</Box>
                      <Spacer />
                      <Box>{formatDate(message.created_at)}</Box>
                      <MessageMenu handleDelete={handleDelete} message={message} setEditToggle={setEditToggle} />
                    </HStack>
                    {/* message_text */}
                    {editToggle !== message.id ? (
                      <Box p={4}>
                        {message.type === "text" ? (
                          <Text>
                            {message.message.split("\n").map((line, i) => (
                              <span key={i}>
                                {line}
                                <br />
                              </span>
                            ))}
                          </Text>
                        ) : message.type === "stamp" ? (
                          <Image src={message.text} alt="stamp" width={100} height={100} />
                        ) : (
                          <Text>{message.message}</Text>
                        )}
                      </Box>
                    ) : (
                      <EditMessage message={message} setEditToggle={setEditToggle} />
                    )}
                  </Box>
                );
              })
            ) : (
              <Flex justify={"center"}>まだメッセージがありません...</Flex>
            )}
            <Box ref={messagesEndRef} />
          </Box>
        </VStack>
      </VStack>
    </>
  );
}
