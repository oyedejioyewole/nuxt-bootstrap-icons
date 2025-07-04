---
title: Documentation
description: This site explains how to use the nuxt-bootstrap-icons module.
---

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ npx nuxi module add nuxt-bootstrap-icons
```

Congratulations 🎉, you have successfully added the module to your project and can now browser [**bootstrap-icons**](https://icons.getbootstrap.com){.font-cursive} for use in your project

## Usage

This module registers a component `BootstrapIcon` by default which can then be used in your project as shown below:

```vue [YourComponent]
<BootstrapIcon name="alarm-fill" />
```

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

**Default value:** `bootstrap-icons`

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

This key toggles whether a virtual file containing a list of all the icons name should be registered.

The virtual file can be imported from `#build/nuxt-bootstrap-icons.json`

::
