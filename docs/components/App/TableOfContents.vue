<script lang="ts" setup>
import type { TocLink } from '@nuxt/content'

defineProps<{ toc: TocLink[] }>()
</script>

<template>
  <ol class="list-inside space-y-2">
    <li
      v-for="(link, index) of $props.toc"
      :key="index"
      class="space-y-2"
    >
      <NuxtLink
        class="underline-offset-4 hover:underline"
        :to="`#${link.id}`"
      >{{ link.text }}</NuxtLink>

      <ul
        v-if="link.children"
        class="ml-3"
      >
        <AppTableOfContents :toc="link.children" />
      </ul>
    </li>
  </ol>
</template>
