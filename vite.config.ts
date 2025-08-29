import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  server: {
    open: true,
    host: true,
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
} satisfies UserConfig;
