<script lang="ts" setup>
import { gsap } from "gsap";

const shades = getColorShades("primary");

onMounted(() => {
  const blocksToHideBlobOnHover = document.querySelectorAll(".blob-hide");

  for (const block of blocksToHideBlobOnHover) {
    useEventListener(block, "mouseenter", () => {
      gsap.to("#cursor-fx", { scale: 0, opacity: 0 });
    });

    useEventListener(block, "mouseleave", () => {
      gsap.to("#cursor-fx", { scale: 1, opacity: 1 });
    });
  }
});
</script>

<template>
  <!-- Loading indicator -->
  <NuxtLoadingIndicator :color="shades[500]" />

  <!-- Cursor blob -->
  <CursorBlob />

  <!-- Side-bar navigation -->
  <Navigation />

  <main class="mx-auto w-[90%]">
    <slot />
  </main>

  <Footer />
</template>

<style>
body {
  /* @apply bg-primary-100 text-primary-900 selection:bg-black/20 dark:bg-primary-900 dark:text-primary-100 dark:selection:bg-white/20; */
}
</style>
