import { createContext, useContext, useReducer } from "react";

const reducer = (state, { type, payload }) => {
  return 0;
};

const initialState = 0;

export function UserProvider() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <></>;
}
