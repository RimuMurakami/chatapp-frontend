import { jsonServerInstance } from "./axios";

const axios = jsonServerInstance;

export async function fetchUsers() {
  // TODO: axiosの使い方確認
  try {
    const data = await axios.get("/users");
    return data;
  } catch (error) {}
}

export async function fetchMessages() {
  try {
    const data = await axios.get("/messages");
    return data;
  } catch (error) {}
}
