/** @format */

import axios from "axios";

// const NPS_BASE_PATH = "https://developer.nps.gov/api/v1/";
const BASE_PATH = "http://localhost:3001";

const axiosInstance = axios.create({
  baseURL: BASE_PATH,
  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response?.data || error)
);

// api/axiosInstance.ts
axiosInstance.interceptors.request.use(
  (config) => {
    // if (apiKey) {
    //   config.headers["Authorization"] = `${apiKey}`;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
