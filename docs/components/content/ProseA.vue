<template>
  <NuxtLink
    class="font-bold underline underline-offset-4"
    :href="$props.href"
    :target="$props.target"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ href: string, target?: string }>(), { href: '' })
</script>
