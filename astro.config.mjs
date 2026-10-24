import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://imrohitvk.github.io",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
