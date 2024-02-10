<template>
  <pre
    class="overflow-x-auto rounded-lg border border-primary-900 bg-primary-200/50 p-5 text-sm backdrop-blur-2xl dark:border-primary-100 dark:bg-primary-800/50 lg:p-7"
    :class="$props.class"
  ><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss">
pre code {
  .line {
    @apply block;
  }
}
</style>
