<script lang="ts" setup>
const shades = getColorShades("primary");
</script>

<template>
  <NuxtLoadingIndicator :color="shades[500]" />

  <div class="relative mx-auto overflow-hidden">
    <CursorFx />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
