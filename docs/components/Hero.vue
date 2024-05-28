<script lang="ts" setup>
const { data: icons, refresh } = useAsyncData(async () => getIcons());

useIntervalFn(refresh, 5000);
</script>

<template>
  <header class="grid min-h-screen place-content-center gap-y-20">
    <h1 class="text-center font-serif text-5xl lg:text-7xl">
      Bootstrap Icons meets Nuxt
    </h1>

    <!-- Icon grid -->
    <div class="grid grid-cols-2 gap-10 lg:grid-cols-4">
      <div
        class="rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-10 text-center backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 lg:place-self-center lg:p-20"
        v-for="(icon, index) of icons"
        :key="index"
      >
        <BootstrapIcon class="text-5xl" :name="icon" />
      </div>
    </div>

    <div class="flex flex-col justify-between gap-y-4 lg:flex-row">
      <!-- Copy code -->
      <button
        class="hidden w-full items-center justify-center gap-x-4 rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 py-3 text-sm backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 md:flex lg:w-3/4 lg:gap-x-4"
        @click="useClipboardContent(($event.target as HTMLElement).innerText)"
      >
        <BootstrapIcon class="text-xl" name="copy" />
        <code>pnpm dlx nuxi@latest module add nuxt-bootstrap-icons</code>
      </button>

      <!-- Go to release notes -->
      <NuxtLink
        class="group flex items-center justify-center gap-x-4 rounded-full border border-primary-900 bg-primary-200 bg-opacity-50 p-3 backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100 lg:w-[200px]"
        to="/release-notes"
      >
        <span>Release Notes</span>
        <BootstrapIcon
          class="text-xl transition-transform group-hover:translate-x-1"
          name="arrow-right"
        />
      </NuxtLink>
    </div>
  </header>
</template>
