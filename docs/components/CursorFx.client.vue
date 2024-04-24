<script lang="ts" setup>
import { gsap } from "gsap";

const { x, y } = useMouse({ touch: false });

watch([x, y], (_new) =>
  gsap.to("#cursor-fx", { display: "block", x: _new[0] - 15, y: _new[1] - 15 }),
);
</script>

<template>
  <div
    class="absolute -z-10 hidden aspect-square h-10 rounded-full border border-primary-900 dark:border-primary-100"
    id="cursor-fx"
  />
</template>
