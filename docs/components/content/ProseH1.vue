<template>
  <UIHeadings level="h1" :id="id">
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </UIHeadings>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>
