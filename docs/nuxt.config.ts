export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'notivue/nuxt',
    'nuxt-og-image',
    '../src/module',
  ],
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
  site: { url: 'https://nuxt-bootstrap-icons.vercel.app' },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'ts', 'vue'],
          theme: { 'dark-mode': 'github-dark', 'default': 'github-light' },
        },
        toc: {
          depth: 4,
        },
      },
    },
  },
  build: {
    transpile: ['shiki'],
  },
  compatibilityDate: '2025-01-18',
  bootstrapIcons: { showList: true },
  googleFonts: {
    families: {
      'Courier Prime': true,
      'Lora': [700],
      'Open Sans': [400, 500, 600],
    },
  },
  notivue: { position: 'bottom-center' },
  tailwindcss: { exposeConfig: true },
})
