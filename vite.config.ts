import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import somoeComponent from "@/components/someComponents"
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/gym-typescript/',
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
