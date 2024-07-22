<script lang="ts" setup>
import { computed } from "#imports";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const props = defineProps<{
  name: BootstrapIcons | { [name: string]: boolean };
  as?: string;
}>();

const icon = computed(() =>
  typeof props.name === "object"
    ? Object.keys(props.name)
        .filter((key) => props.name[key])
        .join("")
    : props.name,
);
</script>

<template>
  <component class="bi" :class="`bi-${icon}`" :is="$props.as ?? 'i'" />
</template>
