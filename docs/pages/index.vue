<script lang="ts" setup>
useHead({
  title: 'Home',
})

const setupCode = 'npx nuxi module add nuxt-bootstrap-icons'

const { copy } = useClipboard()
</script>

<template>
  <NuxtLayout>
    <div class="flex h-full flex-col lg:items-center justify-center gap-y-6">
      <h1
        class="font-serif text-4xl text-primary-900 lg:text-5xl 2xl:text-6xl dark:text-primary-100"
      >
        Bootstrap Icons meets
        <span
          class="underline decoration-dotted underline-offset-8 hover:decoration-solid"
        >Nuxt</span>
      </h1>

      <p class="text-primary-900 2xl:text-lg dark:text-primary-100">
        An easier way of using bootstrap-icons in your Nuxt project!
      </p>

      <button
        class="flex items-center justify-between rounded-lg border border-primary-900 px-5 py-3 text-primary-900 hover:bg-primary-900/10 lg:w-1/2 2xl:w-1/4 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
        @click="
          copy(setupCode).then(() => push.info('Check your clipboard :)'))
        "
      >
        <code class="text-left text-xs 2xl:text-lg">{{ setupCode }}</code>

        <BootstrapIcon
          name="copy"
          class="text-sm"
        />

        <span class="sr-only">Copy code</span>
      </button>
    </div>

    <template #extra>
      <AppIconSlide />
    </template>
  </NuxtLayout>
</template>
