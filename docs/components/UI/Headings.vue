<script setup lang="ts">
defineProps<{ level: "h1" | "h2" | "h3" | "h4" }>();
</script>

<template>
  <component
    :is="level"
    class="font-serif"
    :class="{
      'text-4xl lg:text-6xl': level === 'h1',
      'text-3xl lg:text-4xl': level === 'h2',
      'text-2xl lg:text-3xl': level === 'h3',
      'text-xl lg:text-2xl': level === 'h4',
    }"
  >
    <slot />
  </component>
</template>
