<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  @apply bg-primary-100 text-primary-900 transition selection:bg-primary-200 dark:bg-primary-900 dark:text-primary-100 dark:selection:bg-primary-800;
}
</style>
