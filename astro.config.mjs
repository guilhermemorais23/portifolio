// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Site URL and base path.
// This repo is meant to be renamed to `guilhermemorais23.github.io` so the
// site is served from the domain root (`base: "/"`).
// If you keep the repo named `portifolio`, change `base` to `"/portifolio/"`.
export default defineConfig({
  site: "https://guilhermemorais23.github.io",
  base: "/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
