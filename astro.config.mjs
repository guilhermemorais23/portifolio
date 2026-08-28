// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Site URL and base path.
// The repo is named `portifolio`, so GitHub Pages serves it as a project
// site under `/portifolio/`. If the repo is later renamed to
// `guilhermemorais23.github.io`, change `base` back to `"/"`.
export default defineConfig({
  site: "https://guilhermemorais23.github.io",
  base: "/portifolio/",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
