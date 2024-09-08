import storages from "@/services/storages";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8088/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Access: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = storages.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
