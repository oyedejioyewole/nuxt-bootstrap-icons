<script lang="ts" setup>
import { gsap } from "gsap";

const { x, y } = useMouse({ touch: false });

const element = ref<HTMLDivElement>();

watchOnce(element, (_new) => {
  if (!_new) return;

  const moveBlobToX = gsap.quickTo(_new, "x");
  const moveBlobToY = gsap.quickTo(_new, "y");

  watch([x, y], ([newX, newY]) => {
    gsap.to(_new, { display: "block" });
    moveBlobToX(newX - 20);
    moveBlobToY(newY - 20);
  });
});
</script>

<template>
  <div
    class="absolute -z-10 hidden aspect-square h-10 rounded-full border border-primary-900 dark:border-primary-100"
    id="cursor-fx"
    ref="element"
  />
</template>
