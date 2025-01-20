<script lang="ts" setup>
useHead({
  title: 'Home',
})

const { copy } = useClipboard()

function openNavigation() {
  const navigation = document.querySelector('dialog')
  if (!navigation) return

  navigation.showModal()
}

function copySetupCode(code: string) {
  copy(code).then(() => push.info('Check your clipboard :)'))
}
</script>

<template>
  <NuxtLayout>
    <div class="flex h-full flex-col items-center justify-center gap-y-6">
      <h1
        class="font-serif text-5xl text-primary-900 2xl:text-7xl dark:text-primary-100"
      >
        Bootstrap Icons meets Nuxt
      </h1>

      <p class="text-primary-900 dark:text-primary-100">
        <b>PS:</b> Click the code block below to copy
      </p>

      <div class="flex justify-center gap-x-4">
        <button
          class="flex items-center justify-center gap-x-4 border border-primary-900 px-10 py-3 text-primary-900 hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10 rounded-lg"
          @click="copySetupCode($refs['setup-code'].innerHTML)"
        >
          <span class="sr-only">Copy code</span>

          <code ref="setup-code">pnpm dlx nuxi add module nuxt-bootstrap-icons</code>

          <BootstrapIcon name="copy" />
        </button>

        <button
          class="inline-flex items-center gap-x-4 border border-dashed border-primary-900 px-5 py-3 text-primary-900 hover:border-solid hover:bg-primary-900/10 md:hidden dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
          @click="openNavigation"
        >
          <BootstrapIcon name="arrows-angle-expand" /> Menu
        </button>
      </div>
    </div>

    <template #extra>
      <AppIconSlide />
    </template>
  </NuxtLayout>
</template>
