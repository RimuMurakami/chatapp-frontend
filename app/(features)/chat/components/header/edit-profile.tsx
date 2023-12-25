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
} from "@chakra-ui/react";

import { IoSettingsOutline } from "react-icons/io5";

export function EditProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Text
        // p={0}
        // bgColor={"transparent"}
        onClick={onOpen}
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
          <ModalBody p={2}>
            <Box w={"100%"} h={40} bgColor={"blue.300"}>
              <Avatar
                name="Rechard Meatball"
                src="/profile-icon/rechard.svg"
                size={"xl"}
                ml={3}
                mt={3}
                border={"3px solid white"}
              />
            </Box>
            <Box w={"100%"} h={"500px"} bgColor={"blue.50"}>
              名前
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue">保存</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
