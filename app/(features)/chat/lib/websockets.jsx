"use client";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { useEffect } from "react";
import { useDispatchMessages } from "../contexts/message-context";

export function Websockets() {
  const dispatch = useDispatchMessages();
  useEffect(() => {
    window.Pusher = Pusher;

    window.Echo = new Echo({
      broadcaster: process.env.BROADCASTER,
      key: process.env.PUSHER_KEY,
      cluster: process.env.PUSHER_CLUSTER,
      forceTLS: process.env.PUSHER_FORCETLS,
    });

    const channel = window.Echo.channel("my-channel");
    channel.listen("StoreMessage", function (data) {
      // console.log(JSON.stringify(data));
      // console.log(data.message);
      dispatch({ type: "message/add", message: data.message });
    });

    return () => {
      window.Echo.leaveChannel("my-channel");
    };
  }, []);

  return <></>;
}
