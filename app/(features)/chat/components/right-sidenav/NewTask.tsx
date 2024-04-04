import { useAuth } from "@/app/hooks/auth";
import axios from "@/app/lib/axios";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Tasks } from "../right-sidenav";

type NewTaskProps = {
  setToggleCreateTask: (bool: boolean) => void;
  tasks: Tasks;
  setTasks: (tasks: Tasks) => void;
};

export function NewTask({ setToggleCreateTask, tasks, setTasks }: NewTaskProps) {
  const [task, setTask] = useState("");

  const { user } = useAuth();
  const { id } = useParams();
  const channel_id = Number(id);

  function handleCancel() {
    setTask("");
    setToggleCreateTask(false);
  }

  function handleCreate() {
    const newTask = {
      channel_id: channel_id,
      user_id: user?.id,
      task: task,
    };

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
