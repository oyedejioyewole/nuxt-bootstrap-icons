export default defineNuxtConfig({
  bootstrapIcons: {
    showList: true,
  },
  colorMode: { classSuffix: "" },
  content: {
    defaultLocale: "en-US",
    highlight: {
      langs: ["bash", "ts"],
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
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
  site: {
    url: "https://nuxt-bootstrap-icons.vercel.app",
  },
  tailwindcss: {
    exposeConfig: true,
  },
});
