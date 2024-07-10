# Documentation

:-P An easier way of using [bootstrap-icons](https://icons.getbootstrap.com) for your Nuxt project!

## Setup

Run the following command to install and add the module to your project:

```bash
$ pnpm dlx nuxi@latest module add nuxt-bootstrap-icons
```

**Aside #1**: I know I'm being preferential in my choice of package managers.

**Aside #2**: This module supports any case for the component name.

Congratulations 🎉, you can now browse [bootstrap-icons](https://icons.getbootstrap.com) for icons to use in your project!

## Configuration

You can configure the module using the `bootstrapIcons` key in your `nuxt.config`

### Options

<br>

#### `display`

1. **Default**: `inline`
2. **Description**: How should the module register the icons?
3. **Type**: `String`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    display: "inline", // or 'component'
  },
});
```

**Note**: When using `inline`, the module will register a component (depending on your prefix)

```vue
<BootstrapIcon name="0-circle" />
```

**Note**: When using `component`, the module will register all icons from [bootstrap-icons](https://icons.getboostrap.com) as components (including the prefix)

```vue
<BootstrapIcon0Circle />
```

<br>

#### `prefix`

1. **Default:** `bootstrap-icon`
2. **Description:** What should be prefixed to the icons?
3. **Type:** `String`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    prefix: "your-prefix",
  },
});
```

**Tip**: if you have a multi word prefix, you should include a &mdash; between the words.

<br>

#### `showList`

1. **Default:** `false`
2. **Description:** Option: enable to add a virtual JSON file containing all the icons registered at path

   `#build/nuxt-bootstrap-icons.json`

3. **Type:** `Boolean`

```ts
export default defineNuxtConfig({
  bootstrapIcons: {
    showList: true,
  },
});
```
