# Nuxt Bootstrap Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for [Bootstrap Icons](https://icons.getbootstrap.com)

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-bootstrap-icons?file=playground%2Fapp.vue)
- [📖 Documentation](https://icons.getboostrap.com)

## Features

- ✨ Auto-importing of icons
- 💤 Lazy loading of icon components (optional)
- 🎨 Customizable rendering modes for icons &mdash; `inline` or `component`

## Setup

1. Add `nuxt-bootstrap-icons` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-bootstrap-icons

# Using yarn
yarn add --dev nuxt-bootstrap-icons

# Using npm
npm install --save-dev nuxt-bootstrap-icons
```

2. Add `nuxt-bootstrap-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-bootstrap-icons"],

  // Optionally, customize the way of rendering icons
  bootstrapIcons: {
    renderType: "component", // or 'inline' (which is the default)
  },
});
```

## Usage

There are 2 ways of rendering icons:

1. `inline` rendering:
   In this, you choose the icon to display using the name prop, for example:
   ```vue
   <template><BootstrapIcon name="xbox" /></template>
   ```
2. `component` rendering:
   Here the components are prefixed with `BootstrapIcon` and the name of the icon, for example:
   ```vue
   <template><BootstrapIconXbox /></template>
   ```

That's it! You can now use `nuxt-bootstrap-icons` in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Setup/sync icon components
npm run setup

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-bootstrap-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-bootstrap-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
