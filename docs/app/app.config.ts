export default defineAppConfig({
  pastelDocs: {
    headline: 'Bootstrap Icons meets Nuxt',
    repo: 'oyedejioyewole/nuxt-bootstrap-icons',
    themeColor: '#712cf9',

    features: [
      'SSR ready.',
      'Typescript support.',
      'Performance focused.',
      'Handy utility functions for the icons.',
      'Full compatibility with bootstrap-icons (through SVGs).',
    ],

    icons: {
      'sort-ascending': 'sort-down',
      'sort-descending': 'sort-up',
      'link': 'link-45deg',
      'book-open': 'book',
      'github-logo': 'github',
      'desktop': 'pc-display',
    },
  },
})
