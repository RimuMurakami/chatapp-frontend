import useSWR from 'swr';

import { jsonServerInstance } from "./axios";
import { Divider } from '@chakra-ui/react';

const axios = jsonServerInstance;

const fetcher = url => axios.get(url).then(res => res.data);

export function fetchUsers() {
  const { data, error} = useSWR('/users', fetcher);

  if (error) return { error };
  if (!data) return {loading: true};
  return { data };
}

export function fetchMessages() {
  const { data, error} = useSWR('/messages', fetcher);

  if (error) return { error };
  if (!data) return {loading: true};
  return { data };
}
