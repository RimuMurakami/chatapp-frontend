import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  HStack,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import axios from "@/app/lib/axios";
import { useDispatchChannels } from "../../contexts/channel-context";

type EditChannelProps = {
  channel_name: string;
  channel_id: number;
};

export function EditChannel({ channel_name, channel_id }: EditChannelProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [channelName, setChannelName] = useState(channel_name);
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatchChannels();

  function handleSave() {
    const updateChannelName = {
      name: channelName,
    };
    axios
      .put(`api/channels/${channel_id}`, updateChannelName)
      .then((res) => {
        // console.log(res.data);
        dispatch ? dispatch({ type: "channel/update", channel: res.data }) : "";
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCancel() {
    onClose();
  }

  useEffect(() => {
    inputRef.current?.focus();
    setChannelName(channel_name);
  }, [isOpen, channel_name]);

  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Text
        // p={0}
        // bgColor={"transparent"}
        onClick={onOpen}
        display={"flex"}
        flex={1}
        // color={"white"}
        // fontWeight={"normal"}
        // _hover={{ bgColor: "gray" }}
      >
        編集
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100dvw", md: "64dvw" }}>
          <ModalHeader p={2}>チャンネル編集</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} px={1}>
            <HStack m={6}>
              <Box minW={"100px"}>チャンネル名：</Box>
              <Input value={channelName} onChange={(e) => setChannelName(e.target.value)} ref={inputRef} />
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleCancel}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={() => handleSave()}>
              保存する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
