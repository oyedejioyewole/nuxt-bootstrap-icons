<script lang="ts" setup>
useHead({ title: '404' })
</script>

<template>
  <section
    class="max-xs:h-[calc(100vh_-_64px)] min-md:h-[calc(100vh_-_96px)] grid place-items-center"
  >
    <div class="text-center space-y-4">
      <h1 class="font-serif font-bold text-2xl xl:text-4xl">
        Uh oh!
      </h1>
      <p class="max-sm:text-sm">
        Couldn't find content for <span class="font-bold font-mono">'{{ $route.path }}'</span>
      </p>
      <UiButton
        icon="arrow-left"
        to="/"
      >
        Go home
      </UiButton>
    </div>
  </section>
</template>
