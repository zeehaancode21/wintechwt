// vite.config.ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  base: "/",
  nitro: false, // fully disable Lovable's automatic Cloudflare nitro instance
  vite: {
    plugins: [
      nitro({
        preset: "static",
        prerender: {
          routes: ["/", "/about", "/contact", "/gallery", "/pricing", "/services"],
          crawlLinks: true,
        },
      }),
    ],
  },
});