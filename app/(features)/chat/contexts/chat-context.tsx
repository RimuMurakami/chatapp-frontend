"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "@/app/lib/axios";
import { redirect } from "next/navigation";

const ChatContext = createContext(null);
const ChatDispatchContext = createContext(null);

const initialChat = [];

const chatReducer = (chat, action) => {
  switch (action.type) {
    case "chat/init":
      return action.chat;

    default:
      return chat;
  }
};

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialChat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/chats");
        dispatch({ type: "chat/init", chat: response.data });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ChatContext.Provider value={state}>
      <ChatDispatchContext.Provider value={dispatch}>{children}</ChatDispatchContext.Provider>
    </ChatContext.Provider>
  );
};

const useChat = () => useContext(ChatContext);
const useDispatchChat = () => useContext(ChatDispatchContext);

export { useChat, useDispatchChat, ChatProvider };
