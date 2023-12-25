import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useMessages, useDispatchMessages } from "@/app/(features)/chat/contexts/message-context";
import Image from "next/image";

export function Page() {
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
        </VStack>
      </VStack>
    </>
  );
}
