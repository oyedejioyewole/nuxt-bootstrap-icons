# Nuxt Bootstrap Icons

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Nuxt][nuxt-src]][nuxt-href]

Just a simple integration for [Bootstrap Icons](https://icons.getbootstrap.com) in [Nuxt](https://nuxt.com)

- [✨ &nbsp;Release Notes](https://nuxt-bootstrap-icons.vercel.app/release-notes)
- [🏀 Online playground][playground-href]
- [📖 &nbsp;Documentation](https://nuxt-bootstrap-icons.vercel.app)

## Quick Setup

1. Add `nuxt-bootstrap-icons` dependency to your project

   ```bash
   npx nuxi@latest module add nuxt-bootstrap-icons
   ```

2. Add `nuxt-bootstrap-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["nuxt-bootstrap-icons"],
});
```

That's it! You can now use `nuxt-bootstrap-icons` in your Nuxt app ✨

## Resources

1. **Documentation**: <https://nuxt-bootstrap-icons.vercel.app>
2. **Bootstrap Icons**: <https://icons.getbootstrap.com>

## Contributing

You can contribute to this module with StackBlitz:

[![Edit oyedejioyewole/nuxt-bootstrap-icons/main][playground-src]][playground-href]

or locally for either

### Documentation

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Setup module for development with `pnpm dev:prepare`
4. Run development server with `pnpm docs:dev`

**Note:** Hosted on Vercel

[![Deploy with Vercel][vercel-src]][vercel-href]

or

### Playground

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Setup module for development with `pnpm dev:prepare`
4. Run development server with `pnpm playground:dev`

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-bootstrap-icons/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-bootstrap-icons.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-bootstrap-icons
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
[playground-src]: https://developer.stackblitz.com/img/open_in_stackblitz.svg
[playground-href]: https://stackblitz.com/~/github.com/oyedejioyewole/nuxt-bootstrap-icons
[vercel-src]: https://vercel.com/button
[vercel-href]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Foyedejioyewole%2Fnuxt-bootstrap-icons
