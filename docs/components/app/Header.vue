<script lang="ts" setup>
const features = [
  'Nuxt 3 ready.',
  'Typescript support.',
  'An importable list of all the icons in bootstrap-icons.',
]

function openDocumentation() {
  const dialog = document.querySelector('dialog')
  if (!dialog) return

  dialog.showModal()
}
</script>

<template>
  <header
    class="flex h-[calc(100vh_-_74px)] flex-col-reverse justify-center gap-y-10 lg:flex-row lg:justify-between "
  >
    <div class="place-self-center space-y-4">
      <!-- Tagline -->
      <h1 class="font-serif text-2xl xs:text-4xl font-bold">
        Bootstrap Icons meets Nuxt
      </h1>

      <!-- Description -->
      <p class="text-balance xs:text-base text-sm">
        This is an integration to implement
        <span class="font-bold">bootstrap-icons</span> in your Nuxt
        project.
      </p>

      <!-- Feature list -->
      <ul class="space-y-2">
        <li
          v-for="(feature, _index) of features"
          :key="_index"
          class="flex gap-x-2 xs:text-base text-sm"
        >
          <BootstrapIcon name="check2" />
          {{ feature }}
        </li>
      </ul>

      <UiButton
        icon="box-arrow-up-right"
        @click="openDocumentation"
      >
        Open documentation
      </UiButton>
    </div>

    <!-- Icon display -->
    <div
      class="flex flex-col lg:flex-row gap-4 basis-1/2 xl:basis-1/3"
    >
      <AppIconSlide />
    </div>
  </header>
</template>
