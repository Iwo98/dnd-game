import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.NEXT_AUTH_BACKEND_URL,
  withCredentials: true,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.access) {
      config.headers.Authorization = `Bearer ${session.access}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
