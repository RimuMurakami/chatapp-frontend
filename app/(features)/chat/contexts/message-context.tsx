"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import { jsonServerInstance } from "../api/axios";

const axios = jsonServerInstance;

const MessageContext = createContext(null);
const MessageDispatchContext = createContext(null);

const messageReducer = (messages, action) => {
  switch (action.type) {
    case "message/init":
      return [...action.messages];

    case "message/add":
      return [...messages, action.message];

    default:
      return messages;
  }
};

const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/messages");
        dispatch({ type: "message/init", messages: response.data });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages();
  }, []);

  return (
    <MessageContext.Provider value={state}>
      <MessageDispatchContext.Provider value={dispatch}>{children}</MessageDispatchContext.Provider>
    </MessageContext.Provider>
  );
};

const useMessages = () => useContext(MessageContext);
const useDispatchMessages = () => useContext(MessageDispatchContext);

export { useMessages, useDispatchMessages, MessageProvider };
