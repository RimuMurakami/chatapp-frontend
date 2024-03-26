import Axios from "axios";

import Echo from "laravel-echo";

const axios = Axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    // "X-Socket-ID": Echo.socketId(),
  },
  withCredentials: true,
  withXSRFToken: true,
});

// axios.interceptors.request.use(
//   (config) => {
//     console.log(Echo.socketId);
//     if (Echo.socketId) {
//       config.headers["X-Socket-ID"] = Echo.socketId();
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axios;
