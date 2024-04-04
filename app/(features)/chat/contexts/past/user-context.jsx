"use client";

import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "@/app/lib/axios";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialUser = [];

const userReducer = (user, action) => {
  switch (action.type) {
    case "user/init":
      return action.user;

    default:
      return user;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/user");
        dispatch({ type: "user/init", user: response.data });
      } catch (error) {
        console.error("Error fetchin data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);
const useDispatchUsers = () => useContext(UserDispatchContext);

export { useUsers, useDispatchUsers, UserProvider };
