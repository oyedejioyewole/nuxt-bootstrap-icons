<script lang="ts" setup>
import type { BootstrapIconName } from '#bootstrap-icons/types'

withDefaults(
  defineProps<{ icon?: BootstrapIconName, includesCode?: boolean, to?: string, variant?: 'primary' | 'accent' }>(),
  { variant: 'primary' },
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="$props.to ? NuxtLink : 'button'"
    :to="to"
    class="inline-flex items-center gap-x-2 rounded-lg px-4 py-2 hover:ring ring-offset-2 font-bold w-fit text-sm"
    :class="{ 'bg-primary-500 text-primary-100 ring-primary-500': $props.variant === 'primary', 'bg-primary-200 dark:bg-primary-800': $props.variant === 'accent' }"
  >
    <BootstrapIcon
      :name="icon"
    />

    <slot />
  </component>
</template>
