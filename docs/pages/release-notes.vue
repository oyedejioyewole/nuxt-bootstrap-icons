<script lang="ts" setup>
defineOgImageComponent(
  "Page",
  {
    title: "Release Notes",
    description: "Don't miss out on improvements and new features",
  },
  { fonts: ["Lora:700", "Open Sans:400"] },
);
</script>

<template>
  <div class="mx-auto min-h-screen w-[90%] space-y-20 py-20 lg:w-1/2">
    <!-- Go back -->
    <NuxtLink
      class="group flex w-fit items-center justify-center gap-x-2 rounded-full border border-primary-500 p-3 text-primary-500 transition hover:bg-primary-400 hover:text-primary-100"
      to="/"
    >
      <BootstrapIcon
        class="text-xl transition group-hover:-translate-x-1"
        name="arrow-left"
      />
      Go back
    </NuxtLink>

    <!-- Release Notes -->
    <ContentDoc
      class="space-y-8"
      id="release-notes"
      path="/release-notes"
      tag="section"
    />
  </div>
</template>

<style lang="scss">
#release-notes {
  a {
    @apply font-bold text-primary-500 hover:underline;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-primary-950 dark:text-primary-100;
    }
  }
  h1 {
    @apply font-serif text-4xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl lg:text-4xl;
  }

  h3 {
    @apply text-2xl lg:text-3xl;
  }

  p {
    @apply text-pretty  text-lg leading-loose tracking-wide;
  }

  ul {
    @apply list-inside list-disc space-y-4 text-lg;
  }
}
</style>
