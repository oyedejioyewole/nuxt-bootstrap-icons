<script lang="ts" setup>
const { data: icons, refresh } = useAsyncData(async () => getIcons());

useIntervalFn(refresh, 5000);
</script>

<template>
  <header class="grid min-h-screen place-content-center gap-y-20">
    <h1 class="text-center font-serif text-5xl lg:text-6xl">
      Bootstrap Icons meets Nuxt
    </h1>

    <!-- Icon grid -->
    <div class="grid grid-cols-2 gap-10 lg:grid-cols-4">
      <div
        class="blob-hide rounded-lg border border-primary-900 bg-primary-200 bg-opacity-50 p-10 text-center backdrop-blur-sm transition-[border_opacity] hover:bg-opacity-100 lg:place-self-center lg:p-20 dark:border-primary-100 dark:border-opacity-50 dark:bg-primary-800 dark:hover:border-opacity-100"
        v-for="(icon, index) of icons"
        :key="index"
      >
        <BootstrapIcon class="text-5xl" :name="icon" />
      </div>
    </div>

    <!-- Copy -->
    <UIButton
      :with-icons="true"
      @click="useClipboardContent(($event.target as HTMLElement).innerText)"
    >
      <template #icon>
        <BootstrapIcon name="copy" />
      </template>

      <template #default>
        <code>pnpm dlx nuxi module add nuxt-bootstrap-icons</code>
      </template>
    </UIButton>
  </header>
</template>
