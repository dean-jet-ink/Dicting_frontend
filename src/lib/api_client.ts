import axios from "axios";
import { BE_URL } from "@/config/constants";
import { notificationStore } from "@/store/notification/notification";
import router from "next/router";

const apiClient = axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    const statusCode = error.response?.status;

    if (statusCode == 403) {
      router.push("/login");
      return Promise.reject(error);
    }

    notificationStore.getState().showNotification({
      type: "error",
      title: "Error " + statusCode,
      message: message,
      duration: 5000,
    });

    return Promise.reject(error);
  }
);

export default apiClient;
