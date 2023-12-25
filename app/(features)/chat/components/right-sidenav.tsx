import { LuPencilLine, LuPlus } from "react-icons/lu";

import { useState, useRef } from "react";
import { Avatar, Box, Button, Flex, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";

export function RightSideNav() {
  const [overview, setOverview] = useState("概要を入力");
  const [toggleOverview, setToggleOverview] = useState(false);

  // BUG: 正しくテキストエリアをフォーカスしない
  const overviewRef = useRef(null);

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      <Box h={"40dvh"}>
        <HStack p={1} h={"12"} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>概要</Text>
          <Button color={"blackalpha.700"} p={0} onClick={() => {setToggleOverview(!toggleOverview);
          if (overviewRef.current){ overviewRef.current.focus();}}}>
            <LuPencilLine size="24px" />
          </Button>
        </HStack>
        <Flex pt={4} w={"100%"} h={"80%"} bgColor={"green.100"}>
          <Box flex={1}>
          {toggleOverview ? (
            // `編集中`
            <Textarea bgColor={"white"} value={overview} p={1} ref={overviewRef}/>
            ) : (
              <Text>
              {overview}
            </Text>
          )}
          </Box>
        </Flex>
      </Box>
      <Box>
        <HStack p={1} h={12} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>タスク</Text>
          <LuPlus size="24px" />
        </HStack>
        <Box pt={4} w={"100%"} h={"100%"} bgColor={"green.100"}>
          ここにタスク
        </Box>
      </Box>
    </Box>
  );
}
