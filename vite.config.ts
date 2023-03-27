import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  base: "",
  root: resolve("src"),
  build: {
    outDir: resolve("dist"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      "@": resolve("src")
    },
  },
  plugins: [injectHTML()]
});
