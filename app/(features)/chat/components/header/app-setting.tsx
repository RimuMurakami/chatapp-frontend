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
  Text,
  Box,
} from "@chakra-ui/react";

export function AppSetting() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Box
        // p={0}
        // bgColor={"transparent"}
        onClick={onOpen}
        display={"flex"}
        flex={1}
        // color={"white"}
        // fontWeight={"normal"}
        // _hover={{ bgColor: "gray" }}
      >
        アプリ設定
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100dvw", md: "64dvw" }}>
          <ModalHeader>環境設定</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box h={8} borderBottom={"2px solid"}>
              <Text>通知設定</Text>
            </Box>
            <Box w={"100%"} h={"500px"} pt={8}>
              <label htmlFor="noti">
                <input type="checkbox" name="noti" id="noti" />
                デスクトップ通知を表示
              </label>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              保存する
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
