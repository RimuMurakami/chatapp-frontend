import { useAuth } from "@/app/hooks/auth";
import axios from "@/app/lib/axios";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function NewTask({ setToggleCreateTask, tasks, setTasks }) {
  const [task, setTask] = useState("");

  const { user } = useAuth();
  const { id: channel_id } = useParams();

  function handleCancel() {
    setTask("");
    setToggleCreateTask(false);
  }

  function handleCreate() {
    const newTask = {
      channel_id: parseInt(channel_id),
      user_id: user?.id,
      task: task,
    };
    // console.log(newTask);

    axios
      .post("api/tasks", newTask)
      .then((res) => {
        setTasks([...tasks, res.data]);
        setTask("");
        setToggleCreateTask(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Box bg={"white"}>
        <Input
          border={"none"}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="ここにタスクを入力"
        />
        <HStack justify={"end"} mt={2}>
          <Button size={"sm"} onClick={() => handleCancel()}>
            キャンセル
          </Button>
          <Button size={"sm"} onClick={() => handleCreate()} colorScheme={"twitter"}>
            作成する
          </Button>
        </HStack>
      </Box>
    </>
  );
}
