import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/email-ui-functional-responsive/",
  plugins: [react()],
});
