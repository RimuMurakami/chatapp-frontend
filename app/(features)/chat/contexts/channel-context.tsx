"use client";

import { createContext, useContext, useReducer } from "react";

const ChannelContext = createContext(null);
const ChannelDispatchContext = createContext(null);

const sampleData = [
  {
    channel_id: 0,
    channel_name: "マイチャンネル",
    overview: "",
  },
  {
    channel_id: 1,
    channel_name: "佐藤のチャンネル",
    overview: "さとー",
  },
  {
    channel_id: 2,
    channel_name: "田中 悟",
    overview: "たなかの島",
  },
  {
    channel_id: 3,
    channel_name: "新規開発プロジェクトについて",
    overview: "頑張りましょう",
  },
  {
    channel_id: 4,
    channel_name: "山田",
    overview: "",
  },
  {
    channel_id: 5,
    channel_name: "涼宮",
    overview: "",
  },
  {
    channel_id: 6,
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
