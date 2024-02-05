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
  Avatar,
  Text,
  Box,
  VStack,
  Divider,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useChat } from "../../contexts/chat-context";
import { useEffect, useState } from "react";
import axios from "@/app/lib/axios";

export function EditProfile() {
  const { user } = useChat();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [toggleEdit, setToggleEdit] = useState(false);
  const [username, setUsername] = useState(user?.name);
  const [introduction, setIntroduction] = useState(user?.introduction);

  function handleSave() {
    const newUserProfile = {
      name: username,
      introduction: introduction,
    };
    axios
      .put(`api/users/${user.id}`, newUserProfile)
      .then((res) => {
        console.log(res.data);
        setUsername(res.data.name);
        setIntroduction(res.data.introduction);
        setToggleEdit(false);
        // onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCancel() {
    setToggleEdit(false);
    setUsername(user?.name);
    setIntroduction(user?.introduction);
    // onClose();
  }

  useEffect(() => {
    setUsername(user?.name);
    setIntroduction(user?.introduction);
  }, [user?.name, user?.introduction]);

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
        ユーザープロフィール
      </Text>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100dvw", md: "64dvw" }}>
          <ModalHeader p={2}>プロフィール</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} px={1}>
            <Box w={"100%"} h={40} bgColor={"blue.600"}>
              <Avatar name={user?.name} src={""} size={"xl"} ml={3} mt={3} border={"3px solid white"} />
            </Box>
            <VStack h={"25rem"} align={"start"} p={4} gap={4}>
              <Button
                size={"sm"}
                alignSelf={"end"}
                onClick={() => setToggleEdit(true)}
                colorScheme={toggleEdit ? "red" : "twitter"}
              >
                {toggleEdit ? "編集中" : "ユーザプロフィールを編集"}
              </Button>
              {toggleEdit ? (
                <>
                  <HStack justify={"space-between"} w={"100%"}>
                    <Input size={"lg"} value={username} onChange={(e) => setUsername(e.target.value)} />
                  </HStack>
                  <Box>ChatApp ID: {user?.id}</Box>
                  <Divider />
                  <Input value={introduction} onChange={(e) => setIntroduction(e.target.value)} />
                </>
              ) : (
                <>
                  <HStack justify={"space-between"} w={"100%"}>
                    <Heading size={"lg"}>{username}</Heading>
                  </HStack>
                  <Box>ChatApp ID: {user?.id}</Box>
                  <Divider />
                  <Box>{introduction}</Box>
                </>
              )}
            </VStack>
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
