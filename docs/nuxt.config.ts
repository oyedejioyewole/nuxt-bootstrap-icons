export default defineNuxtConfig({
  extends: [import.meta.env.THEME_DIRECTORY ?? ['github:oyedejioyewole/nuxt-pastel-docs', { install: true }]],
  site: {
    url: 'https://nuxt-bootstrap-icons.vercel.app',
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
          },
        },
      },
    },
  },
  compatibilityDate: '2025-07-04',
  bootstrapIcons: {
    componentName: 'ui-icon',
  },
})
