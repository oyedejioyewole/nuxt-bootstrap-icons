<script setup lang="ts">
defineProps<{ level: "h1" | "h2" | "h3" | "h4" }>();
</script>

<template>
  <component :is="level" :class="headingStyles({ level })">
    <slot />
  </component>
</template>
