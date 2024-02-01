<script lang="ts" setup>
import iconList from "#build/nuxt-bootstrap-icons.json";

const { data: icons, refresh } = useAsyncData(async () => generateIcons());

useIntervalFn(refresh, 5000);

const { copy } = useClipboard({ legacy: true });

async function copyToClipboard(text: string) {
  await copy(text);
  push.success("Copied!");
}

function generateIcons() {
  const generatedIcons: string[] = [];

  for (let index = 0; index < 4; index++) {
    const icon = `${iconList[Math.floor(Math.random() * iconList.length)]}`;

    // Prevent duplicate icons
    if (generatedIcons.includes(icon)) {
      index--;
      continue;
    }

    generatedIcons.push(icon);
  }

  return generatedIcons as BootstrapIcons[];
}
</script>

<template>
  <header
    class="mx-auto grid h-screen w-[90%] place-content-center gap-y-20 lg:w-3/4"
  >
    <h1 class="font-serif text-5xl lg:text-7xl">
      <span class="text-primary-500">Bootstrap Icons</span> meets
      <span class="text-primary-500">Nuxt</span>
    </h1>

    <!-- Icon grid -->
    <div
      class="will-change-content grid grid-cols-2 place-items-center gap-4 lg:grid-cols-4 lg:gap-x-4"
    >
      <div
        class="rounded-lg bg-primary-300 p-10 lg:p-20 dark:bg-primary-700"
        v-for="(icon, index) of icons"
        :key="index"
      >
        <BootstrapIcon class="text-5xl" :name="icon" />
      </div>
    </div>

    <div class="flex flex-col justify-between gap-y-4 lg:flex-row">
      <!-- Copy code -->
      <button
        class="flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary-300 py-3 text-sm text-primary-900 lg:w-3/4 lg:gap-x-4"
        @click="copyToClipboard(($event.target as HTMLElement).innerText)"
      >
        <BootstrapIcon class="text-xl" name="code-slash" />
        <code>pnpm add -D nuxt-bootstrap-icons</code>
      </button>

      <!-- Go to release notes -->
      <NuxtLink
        class="group flex items-center justify-center gap-x-2 rounded-full border border-primary-500 p-3 text-primary-500 transition hover:bg-primary-400 hover:text-primary-100 lg:w-[200px]"
        to="/release-notes"
      >
        Release Notes
        <BootstrapIcon
          class="text-xl transition group-hover:translate-x-2"
          name="arrow-right"
        />
      </NuxtLink>
    </div>
  </header>
</template>
