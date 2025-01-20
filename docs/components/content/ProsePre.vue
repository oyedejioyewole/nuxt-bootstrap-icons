<template>
  <button
    class="rounded-lg border border-primary-900 px-5 py-3 hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
    @click="copyCode()"
  >
    <pre
      class="flex gap-x-10 text-left text-sm text-primary-900 dark:text-primary-100"
      :class="props.class"
    >
      <slot />
      <BootstrapIcon name="copy" />
    </pre>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
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

const { copy } = useClipboard({ source: props.code })

const copyCode = () => {
  copy()
  push.info('Check your clipboard :)')
}
</script>
