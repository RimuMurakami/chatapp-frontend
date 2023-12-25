"use client";

import { createContext, useContext, useReducer } from "react";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const sampleData = [
  {
    user_id: 1,
    username: "佐藤",
    email: "佐藤@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "",
  },
  {
    user_id: 2,
    username: "田中 悟",
    email: "田中@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "",
  },
  {
    user_id: 3,
    username: "Smith",
    email: "山田@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "/profile-icon/smith.svg",
  },
  {
    user_id: 4,
    username: "涼宮",
    email: "涼宮@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "",
  },
  {
    user_id: 5,
    username: "中村",
    email: "中村@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "",
  },
  {
    user_id: 6,
    username: "Richard Meatball",
    email: "rm@example.com",
    password_hash: "hashed_password",
    last_login: "2023-08-31T09:00:00",
    status: "active",
    profile_picture: "/profile-icon/rechard.svg",
  },
];

const userReducer = (users, action) => {
  switch (action.type) {
    // case "user/init":
    //   return [...action.users];

    // case "user/add":
    //   return [...users, action.user];

    default:
      return users;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, sampleData);
  return (
    <UserContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

const useUsers = () => useContext(UserContext);
const useDispatchUsers = () => useContext(UserDispatchContext);

export { useUsers, useDispatchUsers, UserProvider };
