import { Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { fetchUsers } from "../../api/data";

export function ChatMessage() {
  const users = fetchUsers();
  console.log(users);

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
          size={"lg"}
          bgColor={"white"}
          borderBottom={"1px solid"}
          borderColor={"gray.400"}
        >
          Bobとのチャンネル
        </Heading>
        <Text>chat message here!</Text>
        <Text>chat message here!</Text>
        <Text>chat message here!</Text>
        <Text>chat message here!</Text>
      </VStack>
    </>
  );
}
