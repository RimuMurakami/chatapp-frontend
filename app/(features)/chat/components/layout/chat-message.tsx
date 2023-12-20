import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { jsonServerInstance } from "@/app/(features)/chat/api/axios";

export function ChatMessage() {
  // TODO: モックAPIからデータを取得し、仮の会話画面を作成
  // TODO: 画面内の各ボタンのイベント時画面作成
  const axios = jsonServerInstance;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/messages");
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, []);

  // if (messages.length > 0) {
  //   console.log(messages);
  // }

  return (
    <>
      <VStack p={1} h={"calc(100dvh - 240px)"}>
        {/* <Heading w={"100%"} textAlign={"center"} bgColor={"white"}> */}
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
                <Text>{message.text}</Text>
              </Box>
            ))
          ) : (
            <Text>読み込み中...</Text>
          )}
        </VStack>
      </VStack>
    </>
  );
}
