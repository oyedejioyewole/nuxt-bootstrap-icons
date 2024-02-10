<script lang="ts" setup>
const shades = getColorShades("primary");

const { width: browserWidth } = useWindowSize();

const enableCursorFx = ref(true);
const showCursorFx = computed(() =>
  browserWidth.value > 1024 && enableCursorFx.value ? true : false,
);
</script>

<template>
  <NuxtLoadingIndicator :color="shades[500]" />

  <div class="relative overflow-hidden">
    <CursorFx v-if="showCursorFx" />

    <main class="mx-auto w-[90%]">
      <slot />
    </main>

    <Footer @toggle-cursor-fx="enableCursorFx = !enableCursorFx" />
  </div>
</template>
