import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Actions the site is served from
// https://alex-filipe.github.io/alexfilipe-dev/, so assets need that base path.
// BASE_PATH overrides it for jobs that serve dist from the root (e.g. the
// Lighthouse audit). Locally (dev/preview) we keep serving from the root.
const base =
  process.env.BASE_PATH ?? (process.env.GITHUB_ACTIONS ? "/alexfilipe-dev/" : "/");

export default defineConfig({
  base,
  plugins: [react()],
});
