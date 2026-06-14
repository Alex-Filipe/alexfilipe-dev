import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Actions the site is served from
// https://alex-filipe.github.io/alexfilipe-dev/, so assets need that base path.
// Locally (dev/preview) we keep serving from the root.
// For a custom domain (e.g. alexfilipe.dev) change this back to "/".
const base = process.env.GITHUB_ACTIONS ? "/alexfilipe-dev/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
