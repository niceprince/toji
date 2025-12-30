import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// // Optional: server-side interceptor
// api.interceptors.request.use((config) => {
//   if (process.env.API_TOKEN) {
//     config.headers.Authorization = `Bearer ${process.env.API_TOKEN}`;
//   }
//   return config;
// });

export default api;
