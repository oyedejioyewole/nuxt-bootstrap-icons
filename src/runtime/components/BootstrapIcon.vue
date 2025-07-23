<script lang="ts" setup>
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { computed } from 'vue'
import type { BootstrapIconName } from '../types'

const props = defineProps<{
  name: Record<BootstrapIconName, boolean> | BootstrapIconName
}>()

const icon
  = computed(() =>
    typeof props.name === 'object'
      ? Object.keys(props.name)
          .filter(key => props.name[key])
          .join('')
      : props.name,
  )
</script>

<template>
  <i :class="`bi bi-${icon}`" />
</template>
