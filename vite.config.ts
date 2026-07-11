// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Root domain deploy (zeehaancode21.github.io) — no subpath needed
  base: "/",

  // Override Lovable's default Cloudflare target with a plain static build,
  // and prerender every route to real HTML files at build time.
  nitro: {
    preset: "static",
    prerender: {
      routes: ["/", "/about", "/contact", "/gallery", "/pricing", "/services"],
      crawlLinks: true,
    },
  },
});