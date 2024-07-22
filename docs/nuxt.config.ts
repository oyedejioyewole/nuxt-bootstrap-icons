export default defineNuxtConfig({
  bootstrapIcons: { showList: true },
  content: {
    defaultLocale: "en-US",
    highlight: {
      langs: ["bash", "ts", "vue"],
      theme: { "dark-mode": "github-dark", default: "github-light" },
    },
  },
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Courier Prime": true,
      Lora: [700],
      "Open Sans": [400, 500, 600],
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "notivue/nuxt",
    "nuxt-bootstrap-icons",
    "nuxt-og-image",
  ],
  notivue: { position: "bottom-right" },
  site: { url: "https://nuxt-bootstrap-icons.vercel.app" },
  tailwindcss: { exposeConfig: true },
  compatibilityDate: "2024-07-08",
});