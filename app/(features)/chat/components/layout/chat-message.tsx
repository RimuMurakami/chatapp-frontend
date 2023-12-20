import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { fetchUsers, fetchMessages } from "../../api/data";



export function ChatMessage() {
  // TODO: モックAPIからデータを取得し、仮の会話画面を作成
  // TODO: 画面内の各ボタンのイベント時画面作成
  const users = fetchMessages();


  
  // if (users.data && Array.isArray(users.data)) {
  //   users.data.map(user => console.log(user));
  // }

  return (
    <>
      <VStack p={1}>
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
        <VStack>
  {users.data && Array.isArray(users.data) && users.data.map(user => `<Text>${user.text}</Text>`)}
</VStack>
      </VStack>
    </>
  );
}
