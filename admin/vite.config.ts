import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
   base: mode === "production" ? "/admin" : "/",
   plugins: [react(), tailwindcss()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src"),
      },
   },
}));
