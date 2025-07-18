<template>
  <div
    class="bg-primary-200 dark:bg-primary-900 space-y-4 rounded-lg px-4 py-2 max-w-full"
  >
    <p class="inline-flex w-full items-center justify-between text-sm">
      <span class="font-bold">{{ $props.language }}</span>
      <span class="font-cursive font-bold">{{ $props.filename }}</span>
    </p>

    <pre
      class="text-sm overflow-x-auto"
      :class="$props.class"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
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
})
</script>

<style>
pre code .line {
  display: block;
}
</style>
