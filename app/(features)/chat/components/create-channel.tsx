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
} from "@chakra-ui/react";

export function CreateChannel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button>Open Modal</Button> */}
      <Button display={"flex"} alignSelf={"center"} my={3} colorScheme={"blue"} variant={"outline"} onClick={onOpen}>
        新しいチャンネルを追加
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>チャンネルに参加するユーザを選択</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>アイコン　名前</div>
            <div>アイコン　名前</div>
            <div>アイコン　名前</div>
            <div>アイコン　名前</div>
            <div>アイコン　名前</div>
            <div>アイコン　名前</div>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme="blue" mr={3}>
              次へ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
