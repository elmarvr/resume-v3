import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxthub/core",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  hub: {
    browser: true,
  },
  i18n: {
    langDir: "../app/lang",
    locales: [
      {
        code: "en",
        language: "English",
        file: "en.json",
      },

      {
        code: "nl",
        language: "Nederlands",
        file: "nl.json",
      },
    ],
    defaultLocale: "en",
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  icon: {
    mode: "svg",
  },
});
