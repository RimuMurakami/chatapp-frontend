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

export function DeleteAlertDialog({ handleDelete, channel_id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Box as={MenuItem} onClick={onOpen}>
        削除
      </Box>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              このチャンネルを削除しますか？
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
                  handleDelete(channel_id);
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
