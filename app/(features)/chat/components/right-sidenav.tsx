import { LuPencilLine, LuPlus } from "react-icons/lu";

import { useState, useRef, useEffect } from "react";
import { Badge, Box, Button, HStack, Text, Textarea } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useChannels } from "../contexts/channel-context";
import { ColorModeSwitcher } from "./right-sidenav/color-mode-switch";
import axios from "@/app/lib/axios";
import { NewTask } from "./right-sidenav/NewTask";
import { useAuth } from "@/app/hooks/auth";
import { TaskCompleteToast } from "./right-sidenav/TaskCompleteToast";

export function RightSideNav() {
  const channels = useChannels();
  const { id: channel_id } = useParams();
  const channel = channels?.find((channel) => channel.id == channel_id);

  const [overview, setOverview] = useState(channel?.overview);
  const [tempOverview, setTempOverview] = useState(channel?.overview);
  const [toggleOverview, setToggleOverview] = useState(false);

  function handleUpdateOverview() {
    const fetchOverview = async () => {
      try {
        const updateOverview = { overview: tempOverview };
        const response = await axios.put(`api/channels/${channel_id}`, updateOverview);
        setOverview(response.data.overview);
      } catch (error) {
        console.error(error);
        alert("更新失敗");
      }
    };
    fetchOverview();
    setToggleOverview(false);
  }

  const overviewRef = useRef(null);
  useEffect(() => {
    toggleOverview
      ? setTimeout(() => {
          overviewRef.current?.focus();
        }, 0)
      : "";
  }, [toggleOverview]);

  useEffect(() => {
    setOverview(channel?.overview);
    setTempOverview(channel?.overview);
  }, [channel?.overview]);

  const rows = overview?.split("\n").length;

  const [toggleCreateTask, setToggleCreateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(`api/tasks/${channel_id}`)
      .then((res) => {
        // console.log(res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [channel_id]);

  const { user } = useAuth();

  function handleComplete(task_id) {
    axios
      .delete(`api/tasks/${task_id}`)
      .then((res) => {
        setTasks(tasks.filter((task) => task.id !== task_id));
      })
      .catch((err) => {
        console.error(err);
      });
    // alert("タスク完了");
  }

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"} overflowY={"scroll"}>
      <Box>
        <HStack p={1} h={"12"} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>概要</Text>
          <Button
            p={0}
            onClick={() => {
              setToggleOverview(true);
            }}
          >
            <LuPencilLine size="24px" />
          </Button>
        </HStack>
        <Box pt={4}>
          {toggleOverview ? (
            // 編集中
            <>
              <Textarea
                bgColor={"white"}
                value={tempOverview}
                p={1}
                rows={rows}
                minH={"200px"}
                ref={overviewRef}
                onChange={(e) => setTempOverview(e.target.value)}
                resize={"none"}
              />
              <HStack justifyContent={"end"} pr={2} pt={1}>
                <Button
                  size={"sm"}
                  colorScheme={"gray"}
                  onClick={() => {
                    setToggleOverview(false);
                    setTempOverview(overview);
                  }}
                >
                  キャンセル
                </Button>
                <Button size={"sm"} colorScheme={"twitter"} onClick={() => handleUpdateOverview()}>
                  保存する
                </Button>
              </HStack>
            </>
          ) : (
            // 通常時
            // <Text pl={2}>{overview}</Text>
            <Text pl={2}>
              {overview?.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Text>
          )}
        </Box>
      </Box>
      <Box>
        <HStack p={1} mt={8} h={12} justify={"space-between"} borderTop={"1px solid"} borderColor={"gray.300"}>
          <Text>タスク</Text>
          <Button p={0} onClick={() => setToggleCreateTask(true)}>
            <LuPlus size="24px" />
          </Button>
        </HStack>
        {toggleCreateTask ? (
          <NewTask setToggleCreateTask={setToggleCreateTask} tasks={tasks} setTasks={setTasks} />
        ) : (
          ""
        )}
        {tasks.map((task) => (
          <Box bgColor={"white"} my={2} key={task.id}>
            <Badge
              colorScheme={user.id === task.user?.id ? "teal" : "purple"}
              variant={user.id === task.user?.id ? "solid" : "outline"}
            >
              {task.user.name} のタスク
            </Badge>
            <HStack p={3} pl={2} mt={2}>
              <Box w={"100%"} overflow={"auto"}>
                {task.task}
              </Box>
              {user.id === task.user?.id ? (
                <>
                  <Button colorScheme={"blue"} variant={"outline"} size={"xs"} onClick={() => handleComplete(task.id)}>
                    <TaskCompleteToast />
                  </Button>
                </>
              ) : (
                <></>
              )}
            </HStack>
          </Box>
        ))}
      </Box>
      <ColorModeSwitcher />
    </Box>
  );
}
