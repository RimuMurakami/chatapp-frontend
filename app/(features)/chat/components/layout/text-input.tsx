import { AiOutlineSmile } from "react-icons/ai";
import { CiFileOn, CiVideoOn } from "react-icons/ci";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { Box, Divider, Flex, Grid, GridItem, HStack, Textarea } from "@chakra-ui/react";

export function TextInput() {
  return (
    <>
      <Grid
        templateAreas={`"leftArrow top rightArrow "
                  "leftArrow textInput rightArrow"`}
        gridTemplateRows={"40px 1fr"}
        gridTemplateColumns={"20px 1fr 20px"}
        h="100%"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem bg="gray.50" area={"leftArrow"}>
          <Flex h={"100%"} align={"center"}>
            <MdKeyboardDoubleArrowLeft />
          </Flex>
        </GridItem>
        <GridItem bg="gray.50" area={"top"} borderTop={"1px solid"} borderColor={"gray.400"}>
          <HStack h={"100%"} align={"center"} px={4}>
            <AiOutlineSmile size={"32px"} />
            <CiFileOn size={"32px"} />
            <CiVideoOn size={"32px"} />
            <Divider />
            <Box w={"10rem"} fontWeight={"normal"} fontSize={"sm"}>
              <label>
                <input type="checkbox" name="" id="" />
                Enterで送信
              </label>
            </Box>
            <BsSend size={"28px"} />
          </HStack>
        </GridItem>
        <GridItem bg="gray.50" area={"rightArrow"}>
          <Flex h={"100%"} align={"center"}>
            <MdKeyboardDoubleArrowRight />
          </Flex>
        </GridItem>
        <GridItem area={"textInput"}>
          <Flex h={"100%"} direction={"column"}>
            <Textarea
              border="1px"
              borderColor="gray.200"
              placeholder={`ここにメッセージ内容を入力\n(Shift + Enterキーで送信)`}
              flex={1}
              resize={"none"}
              _placeholder={{ color: "gray.500" }}
            />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}
