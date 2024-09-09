import storages from "@/services/storages";
import axios from "axios";
import router from "@/router";

const api = axios.create({
  baseURL: "http://localhost:8088/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Access: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = storages.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await api.post("/auth/refresh");
        const newAccessToken = refreshResponse.data.accessToken;

        storages.setToken(newAccessToken);

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        storages.deleteToken();

        router.push({ name: "Login" });
      }
    }

    return Promise.reject(error);
  }
);

export default api;
