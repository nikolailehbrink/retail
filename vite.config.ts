import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
