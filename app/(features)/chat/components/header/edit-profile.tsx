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
} from "@chakra-ui/react";

import { useChat } from "../../contexts/chat-context";

export function EditProfile() {
  const { user } = useChat();

  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <HStack justify={"space-between"} w={"100%"}>
                <Heading size={"lg"}>{user?.name}</Heading>
                <Button>編集</Button>
              </HStack>
              <Box>email: {user?.email}</Box>
              <Box>ChatApp ID: {user?.id}</Box>
              <Divider />
              <Box>{user?.introduction}</Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              保存
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
