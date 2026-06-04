// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, error loggers, VITE_* env injection, @ alias, and
// React/TanStack dedupe — do NOT add them manually or the app will break with
// duplicate plugins.
//
// Hosting: inside the Lovable sandbox/preview, the wrapper forces the
// Cloudflare nitro preset (this is required for the live preview to work).
// On external CI (e.g. Vercel), the `nitro` option below switches to the
// Vercel preset so `vite build` emits a `.vercel/output/` directory that
// Vercel can deploy directly with zero extra config.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
