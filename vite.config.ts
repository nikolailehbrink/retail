import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// This installs globals such as "fetch", "Response", "Request" and "Headers". See: https://remix.run/docs/en/main/other-api/node
installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
});
