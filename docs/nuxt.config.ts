import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '../src/module',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s · nuxt-bootstrap-icons',
      link: [
        { rel: 'icon', href: 'favicon.svg' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
  colorMode: {
    classSuffix: '',
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
  vite: {
    plugins: [tailwindcss()],
  },
  bootstrapIcons: {
    showList: true,
  },
})
