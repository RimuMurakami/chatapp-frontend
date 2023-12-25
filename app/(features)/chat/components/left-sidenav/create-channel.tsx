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
  Box,
  VStack,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatchChannels } from "../../contexts/channel-context";

export function CreateChannel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [channelName, setChannelName] = useState("");
  const [channelOverview, setChannelOverview] = useState("");

  const dispatch = useDispatchChannels();
  const handleCreateChannel = () => {
    const newChannel = {
      channel_id: Math.floor(Math.random() * 1e10),
      channel_name: channelName,
      overview: channelOverview,
    };

    dispatch({ type: "channel/add", channel: newChannel });
    setChannelName("");
    setChannelOverview("");
    console.log(newChannel);
    onClose();
  };

  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Button display={"flex"} alignSelf={"center"} my={3} colorScheme={"blue"} variant={"outline"} onClick={onOpen}>
        新しいチャンネルを作成
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新しいチャンネルを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <div>チャンネル名</div>
              <Input
                type="text"
                placeholder={"チャンネル名を入力"}
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
              <div>概要</div>
              <Textarea
                placeholder="概要を入力"
                value={channelOverview}
                onChange={(e) => setChannelOverview(e.target.value)}
              />
              <Box border={"1px solid"} w={"100%"} p={4}>
                <div>アイコン　名前</div>
                <div>アイコン　名前</div>
                <div>アイコン　名前</div>
                <div>アイコン　名前</div>
                <div>アイコン　名前</div>
                <div>アイコン　名前</div>
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleCreateChannel}>
              作成
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
