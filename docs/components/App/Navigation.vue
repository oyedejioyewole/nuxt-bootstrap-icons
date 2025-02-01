<script lang="ts" setup>
const routes = computed(() => {
  const route = useRoute()

  return (
    [
      { name: 'Home', path: '/', icon: 'house' },
      { name: 'Documentation', path: '/docs', icon: 'body-text' },
      { name: 'Release notes', path: '/release-notes', icon: 'book' },
    ] satisfies Array<{ name: string, path: string, icon: BootstrapIcons }>
  ).map(_route => ({
    ..._route,
    isCurrentPage: _route.path === route.path,
  }))
})
</script>

<template>
  <nav
    class="hidden basis-[20%] border-r border-dashed border-primary-900 text-primary-900 lg:block dark:border-primary-100 dark:text-primary-100"
  >
    <div class="sticky top-1/2 mx-10 -translate-y-1/2 space-y-10">
      <ul class="space-y-2">
        <li
          v-for="(route, index) of routes"
          :key="index"
        >
          <NuxtLink
            :to="route.path"
            :class="{ 'font-bold': route.isCurrentPage }"
            class="inline-flex items-center gap-x-2"
          >
            <BootstrapIcon
              class="text-lg"
              :name="route.icon"
            />
            <span
              :class="{ underline: route.isCurrentPage }"
              class="underline-offset-4"
            >{{ route.name }}</span>
          </NuxtLink>
        </li>
      </ul>

      <hr class="border-primary-900 dark:border-primary-100">

      <ul class="space-y-4">
        <li>
          <NuxtLink
            to="https://github.com/oyedejioyewole/nuxt-bootstrap-icons"
            target="_blank"
            class="inline-flex h-10 text-sm w-full items-center gap-x-2 rounded-lg border border-primary-900 px-3 hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
          >
            <BootstrapIcon name="star" />

            Star on GitHub
          </NuxtLink>
        </li>

        <li>
          <select
            v-model="$colorMode.preference"
            class="h-10 w-full cursor-pointer appearance-none rounded-lg border border-primary-900 bg-transparent px-3 text-sm hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
          >
            <option value="system">
              <BootstrapIcon name="pc-display" />
              🖥 system
            </option>
            <option value="light">
              ☀️ light
            </option>
            <option value="dark">
              🌙 dark
            </option>
          </select>
        </li>
      </ul>
    </div>
  </nav>

  <div
    class="order-last text-primary-900 lg:order-first lg:hidden dark:text-primary-100"
  >
    <div class="flex items-center justify-between space-x-4">
      <button
        class="inline-flex h-10 items-center gap-x-2 rounded-lg border border-primary-900 px-3 text-sm hover:bg-primary-900/10 dark:border-primary-100 hover:dark:bg-primary-100/10"
        @click="$refs.navigation.showModal"
      >
        <BootstrapIcon name="chevron-up" />

        Open menu
      </button>

      <select
        v-model="$colorMode.preference"
        class="h-10 cursor-pointer appearance-none rounded-lg border border-primary-900 bg-transparent px-3 text-sm hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
      >
        <option value="system">
          <BootstrapIcon name="pc-display" />
          🖥 system
        </option>
        <option value="light">
          ☀️ light
        </option>
        <option value="dark">
          🌙 dark
        </option>
      </select>
    </div>

    <dialog
      ref="navigation"
      class="h-screen w-full rounded-lg border border-primary-900 bg-primary-100 dark:border-primary-100 dark:bg-primary-900"
    >
      <nav class="mx-auto flex h-full w-[90%] flex-col justify-around">
        <ul>
          <!-- 1st item -->
          <li
            v-for="(route, index) of routes"
            :key="index"
          >
            <NuxtLink
              :to="route.path"
              class="inline-flex h-10 w-full items-center gap-x-2 rounded-lg px-3"
              :class="{
                'bg-primary-900/10 font-bold dark:bg-primary-100/10':
                  $route.path === route.path,
              }"
            >
              <BootstrapIcon :name="route.icon" />

              {{ route.name }}</NuxtLink>
          </li>
        </ul>

        <div class="flex flex-col gap-y-4">
          <NuxtLink
            to="https://github.com/oyedejioyewole/nuxt-bootstrap-icons"
            target="_blank"
            class="inline-flex h-10 items-center justify-center gap-x-2 rounded-lg px-3 hover:bg-primary-900/10 dark:hover:bg-primary-100/10"
          >
            <BootstrapIcon name="star" />

            Star on GitHub
          </NuxtLink>

          <button
            autofocus
            class="inline-flex h-10 items-center justify-center gap-x-2 rounded-lg border border-primary-900 px-3 text-sm font-bold hover:bg-primary-900/10 dark:border-primary-100 dark:hover:bg-primary-100/10"
            @click="$refs['navigation'].close"
          >
            <BootstrapIcon name="x-lg" />
            Close navigation
          </button>
        </div>
      </nav>
    </dialog>
  </div>
</template>
