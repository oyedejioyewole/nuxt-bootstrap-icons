---
title: Documentation
description: This site explains how to use the nuxt-bootstrap-icons module.
---

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ npx nuxi@latest module add nuxt-bootstrap-icons
```

Congratulations 🎉. You have successfully added the module to your project and can now browse [**bootstrap-icons**](https://icons.getbootstrap.com){.font-cursive.underline} for icons to use.

## Usage

```vue [YourComponent]
<BootstrapIcon name="alarm-fill" />
```

**Note:** You can choose between `PascalCase` and `kebab-case` when using the component.

## Configuration

You can configure this module using the `bootstrapIcons` key in the `nuxt.config`

Select a key from the options below to see details specific to such key

::UiTabs{:tabs='["prefix", "showList"]'}

#tab-1
```ts [nuxt.config]
export default defineNuxtConfig({
  bootstrapIcons: {
    prefix: "bi",
  },
})
```

**Default value:** `bootstrap-icon`

This key allows you to set the prefix for the component registered by the module.

#tab-2
```ts [nuxt.config]
export default defineNuxtConfig({
  bootstrapIcons: {
    showList: true,
  },
})
```

**Default value:** `false`

This key toggles whether a virtual file containing a list of all the icons would be registered.

The snippet below shows how to use the virtual file:

```vue
<script lang="ts" setup>
import iconList from '#bootstrap-icons'
</script>
```
::
