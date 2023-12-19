import { jsonServerInstance } from "./axios";

const axios = jsonServerInstance;

export async function fetchUsers() {
  const data = await axios.get("/users");
  return data;
}
