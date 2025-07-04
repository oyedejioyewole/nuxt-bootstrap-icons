<script lang="ts" setup>
withDefaults(
  defineProps<{ icon?: BootstrapIcons, includesCode?: boolean, to?: string, variant?: 'primary' | 'accent' }>(),
  { variant: 'primary' },
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="$props.to ? NuxtLink : 'button'"
    :to="to"
    class="inline-flex items-center gap-x-2 rounded-lg px-4 py-2 hover:ring transition ring-offset-2 font-bold"
    :class="{ 'bg-primary-500 text-primary-100 ring-primary-900 dark:ring-primary-100': $props.variant === 'primary', 'bg-primary-200 dark:bg-primary-800': $props.variant === 'accent' }"
  >
    <BootstrapIcon
      :name="icon"
    />

    <slot />
  </component>
</template>
