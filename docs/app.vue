<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: "%s · nuxt-bootstrap-icons",
});

onMounted(async () => {
  const locomotive = await import("locomotive-scroll");
  new locomotive.default();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  @apply bg-primary-100 text-primary-900 transition-colors selection:bg-black/20 dark:bg-primary-900 dark:text-primary-100 dark:selection:bg-white/20;
}
</style>
