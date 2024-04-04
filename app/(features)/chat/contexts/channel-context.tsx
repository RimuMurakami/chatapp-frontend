"use client";

import axios from "@/app/lib/axios";
import { Dispatch, createContext, useContext, useEffect, useReducer } from "react";

const ChannelContext = createContext<Channels>([]);
const ChannelDispatchContext = createContext<Dispatch<ChannelAction> | null>(null);

type Channel = {
  id: number;
  name: string;
  overview: string;
  users: {
    id: number;
    name: string;
  }[];
};

type Channels = Channel[];

type ChannelAction =
  | { type: "channel/init"; channels: Channel[] }
  | { type: "channel/add"; channel: Channel }
  | { type: "channel/update"; channel: Channel }
  | { type: "channel/delete"; id: number };

const channelReducer = (channels: Channels, action: ChannelAction) => {
  switch (action.type) {
    case "channel/init":
      return [...action.channels];

    case "channel/add":
      return [...channels, action.channel];

    case "channel/update":
      return channels.map((channel) => (channel.id === action.channel.id ? action.channel : channel));

    case "channel/delete":
      return channels.filter((channel) => channel.id !== action.id);

    default:
      return channels;
  }
};

const ChannelProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(channelReducer, []);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const response = await axios.get(`api/channels`);
        // console.log(response.data);
        dispatch({ type: "channel/init", channels: response.data });
      } catch (error) {
        console.error(error);
        alert("チャンネル取得エラー");
      }
    };
    fetchChannel();
  }, []);

  return (
    <ChannelContext.Provider value={state}>
      <ChannelDispatchContext.Provider value={dispatch}>{children}</ChannelDispatchContext.Provider>
    </ChannelContext.Provider>
  );
};

const useChannels = () => useContext(ChannelContext);
const useDispatchChannels = () => useContext(ChannelDispatchContext);

export { useChannels, useDispatchChannels, ChannelProvider };
