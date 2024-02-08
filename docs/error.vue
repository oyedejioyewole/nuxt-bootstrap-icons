<script setup lang="ts">
const error = useError();

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "404",
  titleTemplate: "%s · nuxt-bootstrap-icons",
});
</script>

<template>
  <NuxtLayout>
    <section
      class="flex h-screen flex-col items-center justify-center gap-y-10"
    >
      <h1 class="font-serif text-9xl">
        {{ error?.statusCode }}
      </h1>
      <p class="text-lg">{{ error?.message }}</p>
    </section>
  </NuxtLayout>
</template>

<style>
body {
  @apply bg-primary-100 text-primary-900 transition selection:bg-primary-200 dark:bg-primary-900 dark:text-primary-100 dark:selection:bg-primary-800;
}
</style>
