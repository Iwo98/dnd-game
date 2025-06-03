import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_AUTH_BACKEND_URL,
  withCredentials: true,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
