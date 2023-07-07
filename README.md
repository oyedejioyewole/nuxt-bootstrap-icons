# Nuxt Bootstrap Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for `bootstrap-icons`

- [✨ Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/edit/nuxt-starter-7kiqrj?file=playground%2Fapp.vue)
- [📖 Documentation](https://icons.getboostrap.com)

## Features

- A <`BootstrapIcon` /> component (the name can be changed) &mdash; this renders the icons
- Different rendering modes for the icons &mdash; `inline` and `component`

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
   In this, you choose the icon to display using a name prop, for example:

   ```vue
   <template>
     <BootstrapIcon name="xbox" />
   </template>
   ```

2. `component` rendering:
   Here the components are prefixed with **BootstrapIcon** and the name of the icon, for example:

   ```vue
   <template>
     <BootstrapIconXbox />
   </template>
   ```

That's it! You can now use `nuxt-bootstrap-icons` in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Setup/sync icon components
pnpm setup

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Release new version
pnpm release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-bootstrap-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-bootstrap-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
