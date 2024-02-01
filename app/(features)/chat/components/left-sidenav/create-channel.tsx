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
  Avatar,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatchChannels } from "../../contexts/channel-context";
import axios from "@/app/lib/axios";
import { useAuth } from "@/app/hooks/auth";
import { useRouter } from "next/navigation";

export function CreateChannel() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get("api/users");
      setUsers(response.data);
    };
    fetchUserData();
  }, []);

  const { user } = useAuth();
  const myUserId = user?.id;

  const { isOpen, onOpen, onClose: close } = useDisclosure();

  const [channelName, setChannelName] = useState("");
  const [channelOverview, setChannelOverview] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isOpen]);

  const router = useRouter();

  const dispatch = useDispatchChannels();
  const handleCreateChannel = () => {
    const newChannel = {
      name: channelName,
      overview: channelOverview,
      type: "private",
      users: selectedUserIds,
    };

    const fetchChannel = async () => {
      try {
        const response = await axios.post(`api/channels`, newChannel);
        dispatch({ type: "channel/add", channel: response.data });
        setChannelName("");
        setChannelOverview("");
        // console.log(response.data.id);
        onClose();
        router.push(`/chat/${response.data.id}`);
      } catch (error) {
        console.error(error);
        alert("チャンネル作成失敗");
      }
    };
    fetchChannel();
  };

  const [selectedUserIds, setSelectedUserIds] = useState([]);
  function handleUserClick(user_id) {
    setSelectedUserIds((prev) => {
      if (prev.includes(user_id)) {
        // user.idがすでに存在する場合、それを取り除く
        return prev.filter((id) => id !== user_id);
      } else {
        // user.idが存在しない場合、それを追加する
        return [...prev, user_id];
      }
    });
  }

  useEffect(() => {
    setSelectedUserIds([myUserId]);
  }, [myUserId]);

  function onClose() {
    setSelectedUserIds([myUserId]);
    close();
  }

  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Box onClick={onOpen}>新しいチャンネルを作成 ＋</Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100dvw", md: "50dvw" }}>
          <ModalHeader>新しいチャンネルを作成</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Box>チャンネル名</Box>
              <Input
                type="text"
                placeholder={"チャンネル名を入力"}
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                ref={inputRef}
              />
              <Box>概要</Box>
              <Textarea
                placeholder="概要を入力"
                resize={"none"}
                value={channelOverview}
                onChange={(e) => setChannelOverview(e.target.value)}
              />
              <Box alignSelf={"start"} pl={2}>
                ユーザーを選択
              </Box>
              <Box border={"1px solid"} borderColor={"gray.300"} w={"100%"} overflowY={"scroll"} maxH={"300px"}>
                {users
                  .filter((user) => user.id !== myUserId)
                  .map((user) => {
                    return (
                      <HStack
                        key={user.id}
                        py={4}
                        px={4}
                        gap={6}
                        borderBottom={"1px solid"}
                        borderColor={"gray.200"}
                        bg={selectedUserIds.includes(user.id) ? "blue.100" : null}
                        onClick={() => handleUserClick(user.id)}
                      >
                        <Avatar size={"sm"} name={user.name} />
                        <Box>{user.name}</Box>
                        <Spacer />
                        <Box fontSize={"sm"}>{user.email}</Box>
                      </HStack>
                    );
                  })}
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
