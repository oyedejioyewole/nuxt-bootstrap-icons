<script setup lang="ts">
import "bootstrap-icons/font/bootstrap-icons.min.css";

defineProps<{
  name: keyof typeof import("bootstrap-icons/font/bootstrap-icons.json");
}>();
</script>

<template>
  <i
    class="bi"
    :class="`bi-${name}`"
  />
</template>
