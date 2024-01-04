<script lang="ts" setup>
defineOgImageComponent(
  "Page",
  {
    title: "Release Notes",
    description: "Release notes",
  },
  { fonts: ["Lora:700", "Open Sans:400"] },
);
</script>

<template>
  <main class="mx-auto min-h-screen w-[90%] space-y-20 py-20 lg:w-1/2">
    <NuxtLink
      to="/"
      class="flex w-fit items-center gap-x-2 rounded-full border border-primary-500 p-3 text-primary-500 transition hover:bg-primary-500 hover:text-primary-100"
    >
      <BootstrapIcon class="text-xl" name="arrow-left" /> Go back
    </NuxtLink>
    <ContentDoc class="space-y-8" id="release-notes" path="/release-notes" />
  </main>
</template>

<style lang="scss">
#release-notes {
  a {
    @apply text-primary-500 hover:underline;
  }

  h1,
  h2,
  h3,
  h4 {
    a {
      @apply font-serif text-primary-900;
    }
  }
  h1 {
    @apply font-serif text-4xl text-primary-900 lg:text-6xl;
  }

  h2 {
    @apply text-3xl lg:text-4xl;
  }

  h3 {
    @apply text-2xl lg:text-3xl;
  }

  p {
    @apply text-pretty  text-lg leading-loose tracking-wide text-primary-900;
  }

  ul {
    @apply list-inside list-disc space-y-4 text-lg;
  }
}
</style>
