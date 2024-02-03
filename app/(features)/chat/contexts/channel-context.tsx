"use client";

import { useAuth } from "@/app/hooks/auth";
import axios from "@/app/lib/axios";
import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useReducer } from "react";

const ChannelContext = createContext(null);
const ChannelDispatchContext = createContext(null);

const channelReducer = (channels, action) => {
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

const ChannelProvider = ({ children }) => {
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
