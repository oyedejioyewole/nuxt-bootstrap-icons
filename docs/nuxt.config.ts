export default defineNuxtConfig({
  bootstrapIcons: { expose: true, showList: true },
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
    "notivue/nuxt",
    "nuxt-bootstrap-icons",
    "nuxt-og-image",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
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
