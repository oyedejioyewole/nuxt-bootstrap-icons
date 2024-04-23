<script lang="ts" setup>
const shades = getColorShades("primary");

const { width: browserWidth } = useWindowSize();

const enableCursorFx = ref(true);
const showCursorFx = computed(() =>
  browserWidth.value > 1024 && enableCursorFx.value ? true : false,
);
</script>

<template>
  <div class="relative overflow-hidden">
    <NuxtLoadingIndicator :color="shades[500]" />

    <CursorFx v-if="showCursorFx" />

    <main class="mx-auto w-[90%]">
      <slot />
    </main>

    <Footer @toggle-cursor-fx="enableCursorFx = !enableCursorFx" />
  </div>
</template>

<style>
body {
  @apply bg-primary-100 text-primary-900 transition-colors selection:bg-black/20 dark:bg-primary-900 dark:text-primary-100 dark:selection:bg-white/20;
}
</style>
