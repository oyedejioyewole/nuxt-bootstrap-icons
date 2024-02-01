export default defineNuxtConfig({
  bootstrapIcons: {
    expose: true,
    showList: true,
  },
  colorMode: { classSuffix: "" },
  content: {
    defaultLocale: "en-US",
    highlight: {
      theme: "one-dark-pro",
      preload: ["bash", "ts"],
    },
  },
  css: ["notivue/animations.css", "notivue/notifications.css"],
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
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "notivue/nuxt",
    "nuxt-bootstrap-icons",
    "nuxt-og-image",
  ],
  notivue: {
    position: "bottom-center",
  },
  routeRules: {
    "/**": { isr: true },
  },
  site: {
    url: "https://nuxt-bootstrap-icons.vercel.app",
  },
  tailwindcss: {
    exposeConfig: true,
  },
  typescript: {
    shim: false,
  },
});
