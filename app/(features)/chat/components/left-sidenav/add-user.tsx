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
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export function AddUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mailAddress, setMailAddress] = useState("");
  const inputRef = useRef(null);

  function handleAddUser() {}

  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Box p={"0"} onClick={onOpen} w={"100%"}>
        ユーザーを追加 🔍
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100dvw", md: "50dvw" }}>
          <ModalHeader>ユーザーを追加</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <div>メールアドレス</div>
              <Input
                type="text"
                placeholder={"メールアドレスを入力"}
                value={""}
                onChange={(e) => setMailAddress(e.target.value)}
                ref={inputRef}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleAddUser}>
              追加
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
