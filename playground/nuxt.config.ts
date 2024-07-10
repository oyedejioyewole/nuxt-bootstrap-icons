export default defineNuxtConfig({
  bootstrapIcons: {
    display: "component",
    prefix: "nuxt-icon",
    showList: true,
  },
  modules: ["../src/module"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-09",
});
