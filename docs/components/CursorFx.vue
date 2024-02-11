<script lang="ts" setup>
import { gsap } from "gsap";

const { x, y } = useMouse({ touch: false });

watch([x, y], (_new) =>
  gsap.to("#cursor-fx", { x: _new[0] - 70, y: _new[1] - 70 }),
);
</script>

<template>
  <div
    class="absolute -z-10 hidden aspect-square h-36 rounded-full bg-gradient-to-br from-primary-100 via-primary-500 to-primary-900 bg-blend-lighten blur-lg dark:bg-blend-darken lg:block"
    id="cursor-fx"
  />
</template>
