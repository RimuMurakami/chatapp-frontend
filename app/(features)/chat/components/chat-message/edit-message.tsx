import axios from "@/app/lib/axios";
import { Box, Button, HStack, Spacer, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatchMessages } from "../../contexts/message-context";

export function EditMessage({ message, setEditToggle }) {
  const [editMessage, setEditMessage] = useState(message.message);

  // editMessageの行数を計算
  const rows = editMessage.split("\n").length;

  const dispatch = useDispatchMessages();
  //   function handleUpdateMessage(message) {
  //     const fetchMessage = async () => {
  //       try {
  //         const updateMessage = { ...message, message: editMessage };
  //         const response = await axios.put(`api/messages/${message.id}`, updateMessage);
  //         dispatch({ type: "message/update", message: response.data });
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchMessage();
  //     setEditToggle(false);
  //   }
  async function handleUpdateMessage(message) {
    try {
      const updateMessage = { ...message, message: editMessage };
      const response = await axios.put(`api/messages/${message.id}`, updateMessage);
      dispatch({ type: "message/update", message: response.data });
      setEditToggle(false);
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
          <Button onClick={() => setEditToggle(false)} size={"sm"}>
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
