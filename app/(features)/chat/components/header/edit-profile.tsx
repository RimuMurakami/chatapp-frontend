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

export function EditProfile() {
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
        <ModalContent maxW={"64dvw"}>
          <ModalHeader p={2}>プロフィール</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0} px={1}>
            <Box w={"100%"} h={40} bgColor={"blue.600"}>
              <Avatar
                name="Rechard Meatball"
                src="/profile-icon/rechard.svg"
                size={"xl"}
                ml={3}
                mt={3}
                border={"3px solid white"}
              />
            </Box>
            <VStack h={"25rem"} align={"start"} p={4} gap={4}>
              <HStack justify={"space-between"} w={"100%"}>
                <Heading size={"lg"}>Richard Meatball</Heading>
                <Button>編集</Button>
              </HStack>
              <Box>株式会社みとぼ</Box>
              <Box>ChatApp ID: 123456</Box>
              <Divider />
              <Box>よろしくお願いします。</Box>
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
