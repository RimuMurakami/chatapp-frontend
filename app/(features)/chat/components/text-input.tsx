import { CiVideoOn } from "react-icons/ci";
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

import { useDispatchMessages } from "../contexts/message-context";
import { StampMenu } from "./text-input/stamp-menu";
import { FileInput } from "./text-input/file-input";
import { useParams } from "next/navigation";
import axios from "@/app/lib/axios";
import { Websockets } from "../lib/websockets";
import { useAuth } from "@/app/hooks/auth";

type TextInputProps = {
  isLeftSideNavVisible: boolean;
  setIsLeftSideNavVisible: (value: boolean) => void;
  isRightSideNavVisible: boolean;
  setIsRightSideNavVisible: (value: boolean) => void;
};

export function TextInput({
  isLeftSideNavVisible,
  setIsLeftSideNavVisible,
  isRightSideNavVisible,
  setIsRightSideNavVisible,
}: TextInputProps) {
  const [isEnterToSend, setIsEnterToSend] = useState(false);

  const dispatch = useDispatchMessages();
  const [enteredMessage, setEnteredMessage] = useState("");

  const { user } = useAuth();
  const user_id = user?.id;

  const { id: channel_id } = useParams();

  function sendMessage(e: React.FormEvent | React.KeyboardEvent): void {
    e.preventDefault();
    if (!enteredMessage) {
      return;
    }

    const newMessage = {
      channel_id: channel_id,
      user_id: user_id,
      message: enteredMessage,
      type: "text",
    };

    axios
      .post("api/messages", newMessage)
      .then((response) => {
        // BUG: websocketのブロードキャストで自身を除外できない。X-Socket-IDが問題と思われる。取り急ぎ下記をコメントアウトでカバー。
        // dispatch({ type: "message/add", message: response.data });
        setEnteredMessage("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const templateColumns = useBreakpointValue({
    base: "0px 1fr 0px",
    md: `20px 1fr 0px`,
    lg: "20px 1fr 20px",
  });

  return (
    <>
      <Websockets />
      <Grid
        templateAreas={`"leftArrow top rightArrow "
                  "leftArrow textInput rightArrow"`}
        gridTemplateRows={"40px 1fr"}
        // gridTemplateColumns={"20px 1fr 20px"}
        gridTemplateColumns={templateColumns}
        h="100%"
        color="blackAlpha.700"
        fontWeight="bold"
        borderTop={"1px solid"}
        borderColor={"gray.400"}
      >
        {/* left arrow */}
        <GridItem bg="gray.50" area={"leftArrow"}>
          <Flex
            h={"100%"}
            align={"center"}
            _hover={{ bgColor: "blue.50" }}
            onClick={() => setIsLeftSideNavVisible(!isLeftSideNavVisible)}
            cursor={"pointer"}
          >
            {isLeftSideNavVisible ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
          </Flex>
        </GridItem>
        {/* nav buttons */}
        <GridItem bg="gray.50" area={"top"}>
          <HStack h={"100%"} align={"center"}>
            <HStack gap={3}>
              <StampMenu />
              {/* <FileInput /> */}
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
          <Flex
            h={"100%"}
            align={"center"}
            _hover={{ bgColor: "blue.50" }}
            onClick={() => setIsRightSideNavVisible(!isRightSideNavVisible)}
            cursor={"pointer"}
          >
            {isRightSideNavVisible ? <MdKeyboardDoubleArrowRight /> : <MdKeyboardDoubleArrowLeft />}
          </Flex>
        </GridItem>
        {/* input message */}
        <GridItem area={"textInput"}>
          <FormControl h={"100%"}>
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
