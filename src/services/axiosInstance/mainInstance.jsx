import axios from "axios";
import store from "../../store/store";
import { logout } from "../../store/userSlice";

// const API_BASE_URL = "http://localhost:3000/api/v1";
const API_BASE_URL = "https://api.mycgai.akshuakr.com/api/v1";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;

    if (config.url === "/auth/login") {
      console.log(config);
      console.log(config.url);
      return Promise.reject(error);
    }

    if (response && (response.status === 401 || response.status === 403)) {
      console.error("Token expired or invalid. Logging out...");

      store.dispatch(logout());

      localStorage.removeItem("token");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
