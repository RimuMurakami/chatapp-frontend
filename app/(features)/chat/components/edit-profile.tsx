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
} from "@chakra-ui/react";

import { IoSettingsOutline } from "react-icons/io5";

export function EditProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Button p={0} bgColor={"transparent"} onClick={onOpen} color={"white"} fontWeight={"normal"} _hover={{bgColor: "gray"}}>
        <HStack mr={"2"}>
          <Avatar name="Rechard Meatball" src="" size={"sm"} />
          <Text display={{ base: "none", lg: "Flex" }}>Richard Meatball</Text>
          <IoSettingsOutline size="30px" />
        </HStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>プロフィール</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>アイコン</div>
            <div>バナー</div>
            その他
          </ModalBody>

          <ModalFooter>
            {/* <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" mr={3}>
              次へ
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
