<template>
  <button
    class="max-w-full overflow-x-auto rounded-lg border border-primary-900 hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
    @click="copyCode()"
  >
    <pre
      class="flex items-center p-3 text-left text-sm"
      :class="props.class"
    >
      <slot />
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
