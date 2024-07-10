<script lang="ts" setup>
import "bootstrap-icons/font/bootstrap-icons.min.css";

withDefaults(
  defineProps<{
    name: BootstrapIcons;
    as?: string;
  }>(),
  {
    as: "i",
  },
);
</script>

<template>
  <component :class="`bi bi-${$props.name}`" :is="$props.as" />
</template>
