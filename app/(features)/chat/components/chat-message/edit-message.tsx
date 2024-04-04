import axios from "@/app/lib/axios";
import { Box, Button, HStack, Spacer, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Message, useDispatchMessages } from "../../contexts/message-context";

type EditMessageProps = {
  message: Message;
  setEditToggle: (id: number) => void;
};

export function EditMessage({ message, setEditToggle }: EditMessageProps) {
  const [editMessage, setEditMessage] = useState(message.message);

  // editMessageの行数を計算
  const rows = editMessage.split("\n").length;

  const dispatch = useDispatchMessages();

  async function handleUpdateMessage(message: Message) {
    try {
      const updateMessage = { ...message, message: editMessage };
      const response = await axios.put(`api/messages/${message.id}`, updateMessage);
      dispatch ? dispatch({ type: "message/update", message: response.data }) : "";
      setEditToggle(0);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Box bg={"white"} mt={2}>
        <Textarea
          value={editMessage}
          resize={"none"}
          border={"none"}
          rows={rows}
          onChange={(e) => setEditMessage(e.target.value)}
        />
        <HStack pr={"2"}>
          <Spacer />
          <Button onClick={() => setEditToggle(0)} size={"sm"}>
            キャンセル
          </Button>
          <Button onClick={() => handleUpdateMessage(message)} size={"sm"} colorScheme={"twitter"}>
            保存する
          </Button>
        </HStack>
      </Box>
    </>
  );
}
