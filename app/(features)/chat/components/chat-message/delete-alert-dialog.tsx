import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  MenuItem,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Message } from "../../contexts/message-context";

type DeleteAlertDialogProps = {
  message: Message;
  handleDelete(message: { id: number }): void;
};

export function DeleteAlertDialog({ handleDelete, message }: DeleteAlertDialogProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box as={MenuItem} onClick={onOpen}>
        削除
      </Box>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              このメッセージを削除しますか？
            </AlertDialogHeader>

            {/* <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody> */}

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                キャンセル
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  onClose();
                  handleDelete(message);
                }}
                ml={3}
              >
                削除
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
