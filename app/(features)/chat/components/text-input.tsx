import { CiVideoOn } from "react-icons/ci";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatchMessages } from "../contexts/message-context";
import { StampMenu } from "./text-input/stamp-menu";
import { FileInput } from "./text-input/file-input";

export function TextInput() {
  const [isEnterToSend, setIsEnterToSend] = useState(false);

  const dispatch = useDispatchMessages();
  const [enteredMessage, setEnteredMessage] = useState("");
  function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (!enteredMessage) {
      return;
    }

    const newMessage = {
      message_id: Math.floor(Math.random() * 1e10),
      channel_id: 0,
      user_id: 1,
      text: enteredMessage,
      timestamp: new Date().toLocaleString(),
      message_type: "text",
    };

    console.log(newMessage);

    dispatch({ type: "message/add", message: newMessage });
    setEnteredMessage("");
  }

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
        {/* left arrow */}
        <GridItem bg="gray.50" area={"leftArrow"}>
          <Flex h={"100%"} align={"center"}>
            <MdKeyboardDoubleArrowLeft />
          </Flex>
        </GridItem>
        {/* nav buttons */}
        <GridItem bg="gray.50" area={"top"} borderTop={"1px solid"} borderColor={"gray.400"}>
          <HStack h={"100%"} align={"center"}>
            <HStack gap={3}>
              <StampMenu />
              <FileInput />
              {/* <CiVideoOn size={"28px"} /> */}
            </HStack>
            <Spacer />
            <Flex pr={1} gap={1} fontWeight={"normal"} fontSize={"sm"}>
              <Checkbox onChange={(e) => setIsEnterToSend(e.target.checked)}>Enterで送信</Checkbox>
            </Flex>
            <Button color={"gray"} onClick={sendMessage} p={0} bgColor={"transparent"} _hover={{ bgColor: "blue.100" }}>
              <BsSend size={"28px"} />
            </Button>
          </HStack>
        </GridItem>
        {/* right arrow */}
        <GridItem bg="gray.50" area={"rightArrow"}>
          <Flex h={"100%"} align={"center"}>
            <MdKeyboardDoubleArrowRight />
          </Flex>
        </GridItem>
        {/* input message */}
        <GridItem area={"textInput"}>
          <FormControl h={"100%"} onSubmit={sendMessage}>
            <Flex h={"100%"} direction={"column"}>
              <Textarea
                border="1px"
                borderColor="gray.200"
                placeholder={`ここにメッセージ内容を入力\n(Shift + Enterキーで${isEnterToSend ? "改行" : "送信"})`}
                resize={"none"}
                flex={1}
                _placeholder={{ color: "gray.500" }}
                value={enteredMessage}
                onChange={(e) => setEnteredMessage(e.target.value)}
                onKeyDown={(e) => {
                  // BUG: isEnterToSendがTrue時にAlt + Enterで改行されない
                  const isEnterPressed = e.key === "Enter";
                  const isComposing = e.nativeEvent.isComposing;
                  const isShiftPressed = e.shiftKey;
                  const isAltPressed = e.altKey;

                  if (isEnterPressed && !isComposing) {
                    if (isEnterToSend && !isShiftPressed && !isAltPressed) {
                      sendMessage(e);
                    } else if (!isEnterToSend && isShiftPressed) {
                      sendMessage(e);
                    }
                  }
                }}
              />
            </Flex>
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
}
