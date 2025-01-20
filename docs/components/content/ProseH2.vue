<template>
  <h2
    :id="id"
    class="font-serif text-4xl"
  >
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>
