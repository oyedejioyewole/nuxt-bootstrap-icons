<script lang="ts" setup>
import 'notivue/animations.css'
import 'notivue/notification.css'

import { pastelTheme } from 'notivue'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: '%s · Bootstrap Icons for Nuxt',
})

const shades = getColorShades('primary')

onMounted(async () => {
  const locomotiveScroll = await import('locomotive-scroll').then(
    resolvedPackage => resolvedPackage.default,
  )
  new locomotiveScroll()
})
</script>

<template>
  <div class="min-h-screen bg-primary-50 dark:bg-primary-950">
    <!-- Loading indicator -->
    <NuxtLoadingIndicator
      :color="$colorMode.value === 'dark' ? shades[100] : shades[900]"
    />

    <NuxtPage />

    <Notivue v-slot="item">
      <Notification
        :item="item"
        :theme="pastelTheme"
      />
    </Notivue>

    <NuxtRouteAnnouncer />
  </div>
</template>
