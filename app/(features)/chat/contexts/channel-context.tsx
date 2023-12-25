"use client";

import { createContext, useContext, useReducer } from "react";

const ChannelContext = createContext(null);
const ChannelDispatchContext = createContext(null);

const sampleData = [
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "佐藤",
    overview: "",
  },
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "田中",
    overview: "",
  },
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "新規開発プロジェクトについて",
    overview: "頑張りましょう",
  },
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "山田",
    overview: "",
  },
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "涼宮",
    overview: "",
  },
  {
    channel_id: Math.floor(Math.random() * 1e10),
    channel_name: "中村",
    overview: "",
  },
];

const channelReducer = (channels, action) => {
  switch (action.type) {
    // case "channel/init":
    //   return [...action.channels];

    case "channel/add":
      return [...channels, action.channel];

    default:
      return channels;
  }
};

const ChannelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(channelReducer, sampleData);
  return (
    <ChannelContext.Provider value={state}>
      <ChannelDispatchContext.Provider value={dispatch}>{children}</ChannelDispatchContext.Provider>
    </ChannelContext.Provider>
  );
};

const useChannels = () => useContext(ChannelContext);
const useDispatchChannels = () => useContext(ChannelDispatchContext);

export { useChannels, useDispatchChannels, ChannelProvider };
