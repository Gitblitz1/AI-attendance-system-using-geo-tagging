import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api` : "http://127.0.0.1:5000/api",
  withCredentials: false,
});

export default api;
