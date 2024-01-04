<script lang="ts" setup>
import "bootstrap-icons/font/bootstrap-icons.min.css";

defineProps<{
  name: BootstrapIcons;
}>();
</script>

<template>
  <i :class="'bi ' + 'bi-' + $props.name" />
</template>
