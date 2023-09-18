import axios from "axios";
import { BE_URL } from "@/config/constants";

const apiClient = axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
