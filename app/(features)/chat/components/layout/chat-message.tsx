import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useMessages, useDispatchMessages } from "../../contexts/message-context";

export function ChatMessage() {
  const messages = useMessages();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <>
      <VStack p={1} h={"calc(100dvh - 240px)"}>
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
          新規開発プロジェクトについて
        </Heading>
        {/* messages */}
        <VStack overflowY={"scroll"} gap={1} h={"100%"} align={"start"}>
          {messages ? (
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
                <Text>
                  {message.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </Text>
              </Box>
            ))
          ) : (
            <Text>読み込み中...</Text>
          )}
          <Box ref={messagesEndRef} />
        </VStack>
      </VStack>
    </>
  );
}
