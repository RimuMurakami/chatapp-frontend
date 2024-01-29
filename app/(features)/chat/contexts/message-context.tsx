"use client";

import axios from "@/app/lib/axios";
import { useParams } from "next/navigation";

import { createContext, useContext, useEffect, useReducer } from "react";

const MessageContext = createContext(null);
const MessageDispatchContext = createContext(null);

const messageReducer = (messages, action) => {
  switch (action.type) {
    case "message/init":
      return [...action.messages];

    case "message/add":
      return [...messages, action.message];

    case "message/update":
      return messages.map((message) => (message.id === action.message.id ? action.message : message));

    case "message/delete":
      return messages.filter((message) => message.id !== action.id);

    default:
      return messages;
  }
};

const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, "");

  const { id: channel_id } = useParams();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`api/messages/${channel_id}`);
        // console.log(response);
        dispatch({ type: "message/init", messages: response.data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, [channel_id]);

  return (
    <MessageContext.Provider value={state}>
      <MessageDispatchContext.Provider value={dispatch}>{children}</MessageDispatchContext.Provider>
    </MessageContext.Provider>
  );
};

const useMessages = () => useContext(MessageContext);
const useDispatchMessages = () => useContext(MessageDispatchContext);

export { useMessages, useDispatchMessages, MessageProvider };
