// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  base: "/core-service-hub/",
  vite: {
    plugins: [
      nitro({
        preset: "static",
        prerender: {
          routes: ["/core-service-hub"],
          crawlLinks: true,
        },
      }),
    ],
  },
});