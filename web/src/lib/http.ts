import axios from "axios";
import { toast } from "sonner";

export const http = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   timeout: 10_000,
});

http.interceptors.request.use((config) => {
   const token = localStorage.getItem("token");
   if (token) config.headers.Authorization = `Bearer ${token}`;
   return config;
});

http.interceptors.response.use(
   (res) => res,
   (err) => {
      if (err.status !== 400) {
         toast.error(`${err.response?.data?.message || err.message}`);
      }
      throw err;
   }
);
