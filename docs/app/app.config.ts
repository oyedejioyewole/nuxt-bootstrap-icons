export default defineAppConfig({
  pastelDocs: {
    features: [
      'SSR ready.',
      'Typescript support.',
      'Performance focused.',
      'Handy utility functions for the icons.',
      'Full compatibility with bootstrap-icons (through SVGs).',
    ],
    footer: {
      content: 'Made with :heart: by [oyedejioyewole](https://github.com/oyedejioyewole)',
      iconLinks: {
        'bootstrap': 'https://icons.getbootstrap.com/',
        'svgl:nuxt': 'https://nuxt.com',
      },
    },
    headline: 'Bootstrap Icons meets Nuxt',
    icons: {
      'book-open': 'book',
      'circle-half': 'palette2',
      'desktop': 'tv',
      'github-logo': 'github',
      'house-line': 'house',
      'link': 'link-45deg',
      'sort-ascending': 'sort-down',
      'sort-descending': 'sort-up',
    },
    repo: 'oyedejioyewole/nuxt-bootstrap-icons',
    themeColor: '#712cf9',
  },
})
