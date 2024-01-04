export default defineNuxtConfig({
  bootstrapIcons: {
    prefix: "nuxt-icon",
    display: "component",
    expose: true,
    showList: true,
  },
  modules: ["../src/module"],
  devtools: { enabled: true },
});
