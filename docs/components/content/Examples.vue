<script setup lang="ts">
const { data: icons, refresh } = useAsyncData(async () => getIcons());

useIntervalFn(refresh, 5000);
</script>

<template>
  <div
    class="grid place-items-center gap-5 rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-5 backdrop-blur-sm transition-[border] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 md:grid-cols-4 lg:p-7"
  >
    <BootstrapIcon
      class="text-4xl"
      v-for="(icon, index) of icons"
      :key="index"
      :name="icon"
    />
  </div>
</template>
