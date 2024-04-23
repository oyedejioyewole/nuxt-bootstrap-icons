<script setup lang="ts">
const { data: icons, refresh } = useAsyncData(async () => getIcons());

useIntervalFn(refresh, 5000);

const iconNames = computed(() => {
  return (
    icons.value?.map((icon) =>
      icon
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),
    ) ?? []
  );
});
</script>

<template>
  <div
    class="grid grid-rows-4 place-items-center gap-5 rounded-lg border border-primary-900 bg-primary-200/50 p-5 backdrop-blur-2xl dark:border-primary-100 dark:bg-primary-800/50 md:grid-cols-4 md:grid-rows-none lg:p-7"
  >
    <div
      v-for="(icon, index) of icons"
      :key="index"
      class="grid-col-2 grid place-items-center gap-y-5"
    >
      <BootstrapIcon class="text-4xl" :name="icon" />

      <button
        class="rounded-lg bg-primary-300 px-3 py-1 text-xs text-primary-900"
        @click="useClipboardContent(`<BootstrapIcon${iconNames[index]} />`)"
      >
        <{{ iconNames[index] }} />
      </button>
    </div>
  </div>
</template>
