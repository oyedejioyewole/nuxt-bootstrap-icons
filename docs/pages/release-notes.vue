<script lang="ts" setup>
defineOgImageComponent("Page");
</script>

<template>
  <div class="mx-auto w-[90%] space-y-20 py-20 lg:w-1/2">
    <!-- Go back -->
    <NuxtLink
      class="group flex w-fit items-center justify-center gap-x-1 rounded-full border border-primary-900 bg-primary-200 bg-opacity-50 p-3 backdrop-blur-sm hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100"
      to="/"
    >
      <BootstrapIcon
        class="text-xl transition-transform group-hover:-translate-x-1"
        name="arrow-left"
      />
      Go back
    </NuxtLink>

    <!-- Release Notes -->
    <ContentDoc class="space-y-8" tag="section" />
  </div>
</template>
