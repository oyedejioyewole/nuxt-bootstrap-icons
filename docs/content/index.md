---
description: An integration for bootstrap-icons in Nuxt
---

# Documentation

If you are reading this, I want to take a moment to thank you for trying out this module 😅

## Setup

Follow the following steps to start using this module:

1. Add the `nuxt-bootstrap-icons` module to your project as a `devDependency`

   ```bash
   $ pnpm add -D nuxt-bootstrap-icons
   ```

2. Add the module to the `modules` section of the `nuxt.config.ts`

   ```ts
   export default defineNuxtConfig({
     bootstrapIcons: {}, // Override module options,
     devtools: { enabled: true },
     modules: ["nuxt-bootstrap-icons"],
   });
   ```

Congratulations 🎉, you can now use any icon from `bootstrap-icons` in your Nuxt project!

Browse the available of icons [here](https://icons.getbootstrap.com/).

## Usage

**Note:** Assuming you're using the default prefix of `BootstrapIcon`

:Examples

Before hurrying on now, lets go through some possible configuration you might want to do!

## Configuration

You can configure the module using the `bootstrapIcons` key in the `nuxt.config.ts`

### Options

<br>

#### `display`

1. **Default**: `inline`
2. **Description**: Choose how you want to register and display components.
3. **Type**: `String`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    display: "inline", // or 'component'
  },
});
```

**Note**: When using `inline`, the module will register a component (depending on your prefix) which you can then use to display icons through the `name` property.

On the other hand, when using `component`, the module will register all the available icons as components (prefixed from value in `nuxt.config`) which you can then use normally in your project.

<br>

#### `expose`

1. **Default**: `false`
2. **Description**: Enable to register components globally.
3. **Type**: `Boolean`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    expose: true,
  },
});
```

<br>

#### `prefix`

1. **Default:** `bootstrap-icon` or `BootstrapIcon`
2. **Description:** The prefix of the component names.
3. **Type:** `String`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    prefix: "your-prefix", // or YourPrefix
  },
});
```

**Note**: if you have a multi word prefix, you should include a &mdash; between the words.

<br>

#### `showList`

1. **Default:** `false`
2. **Description:** Enable to generate a virtual file with the list of registered components at

   `#build/nuxt-bootstrap-icons.json`

3. **Type:** `Boolean`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    showList: true,
  },
});
```
