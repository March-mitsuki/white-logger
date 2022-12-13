import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3131,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: [{ find: "@/", replacement: "/src/" }],
  },
});
