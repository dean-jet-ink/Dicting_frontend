import axios from "axios";
import { BE_URL } from "@/config/constants";
import { notificationStore } from "@/store/notification/notification";

const apiClient = axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;

    notificationStore.getState().showNotification({
      type: "error",
      title: "Error",
      message: message,
      duration: 5000,
    });

    return Promise.reject(error);
  }
);

export default apiClient;
