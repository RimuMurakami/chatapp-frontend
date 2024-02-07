import { AiOutlineMore } from "react-icons/ai";
import { Menu, MenuList, MenuItem, MenuButton, Button, Box } from "@chakra-ui/react";
import { DeleteAlertDialog } from "./delete-alert-dialog";
import { useAuth } from "@/app/hooks/auth";
import axios from "@/app/lib/axios";
import { useDispatchChannels } from "../../contexts/channel-context";
import { EditChannel } from "./edit-channel";
import { useParams, useRouter } from "next/navigation";

const ChannelMenu = ({ channel_id, channel_users, channel_name }) => {
  const { user } = useAuth();
  const dispatch = useDispatchChannels();

  const isUserOwner = channel_users?.some(
    (channel_user) => channel_user.id === user.id && channel_user.pivot.role === "owner"
  );

  const { id: params_id } = useParams();
  const router = useRouter();

  function handleDelete(channel_id) {
    axios
      .delete(`api/channels/${channel_id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "channel/delete", id: res.data.id });
        if (params_id == channel_id) {
          router.push(`/chat`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <Menu closeOnSelect={true}>
      <MenuButton rounded={"full"} _hover={{ bg: "gray.200" }} p={1}>
        <AiOutlineMore />
      </MenuButton>
      <MenuList minW={"100%"} p={0}>
        {isUserOwner ? (
          <>
            <MenuItem>
              <EditChannel channel_name={channel_name} channel_id={channel_id} />
            </MenuItem>

            <DeleteAlertDialog handleDelete={handleDelete} channel_id={channel_id} />
            <MenuItem>追加</MenuItem>
          </>
        ) : (
          <MenuItem>編集</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export { ChannelMenu };
