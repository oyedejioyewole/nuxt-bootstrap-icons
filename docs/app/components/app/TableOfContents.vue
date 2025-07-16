<script lang="ts" setup>
import type { ContentCollectionItem } from '@nuxt/content'

defineProps<{ toc: ContentCollectionItem['body']['toc'] }>()
</script>

<template>
  <ul>
    <li
      v-for="(node, index) of toc?.links"
      :key="index"
      class="px-4 py-2 border-l border-transparent hover:border-inherit"
    >
      <NuxtLink
        :to="`#${node.id}`"
      >{{ node.text }}</NuxtLink>
    </li>
  </ul>
</template>
