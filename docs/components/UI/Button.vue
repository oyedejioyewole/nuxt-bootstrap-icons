<script setup lang="ts">
const props = defineProps<{
  class?: string;
  to?: string;
  variant?: "default" | "navigation";
  withIcons?: boolean;
}>();

const component = computed(() =>
  props.to ? resolveComponent("NuxtLink") : "button",
);
</script>

<template>
  <component
    :class="
      buttonStyles({
        class: $props.class,
        variant: $props.variant,
        withIcons: $props.withIcons,
      })
    "
    :to="to"
    :is="component"
  >
    <slot name="icon" />

    <slot />
  </component>
</template>
