import axios from "axios";

export const baseURL = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

baseURL.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  if (!(config.data instanceof FormData)) {
      config.headers["Content-Type"] = "application/json";
    }

  return config;
}, (error) => {
  return Promise.reject(error);
});

baseURL.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error.response ? error.response.data : error.message);
});
