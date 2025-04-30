import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
  ],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",
  css: ["~/assets/css/main.css"],
  hub: {
    browser: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
