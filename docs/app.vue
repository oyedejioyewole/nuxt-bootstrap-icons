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
