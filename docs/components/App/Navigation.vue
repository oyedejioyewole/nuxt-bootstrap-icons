<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

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

const colorTheme = useColorMode()

const { state, next: nextTheme } = useCycleList(['light', 'dark'], {
  initialValue: colorTheme.value,
})

const breakpoints = useBreakpoints(breakpointsTailwind)

watch(state, (_new) => {
  colorTheme.preference = _new
})
</script>

<template>
  <nav
    v-if="breakpoints.greaterOrEqual('lg')"
    class="basis-[20%] border-r border-dashed border-primary-900 text-primary-900 dark:border-primary-100 dark:text-primary-100"
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

      <ul>
        <li>
          <button
            class="inline-flex h-10 w-full items-center justify-center gap-x-2 border border-primary-900 text-sm hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10 rounded-lg"
            @click="nextTheme()"
          >
            Change theme

            <ClientOnly>
              <BootstrapIcon
                :name="{
                  'sun': $colorMode.value === 'light',
                  'moon-stars': $colorMode.value === 'dark',
                }"
              />

              <template #fallback>
                <BootstrapIcon name="slash-circle" />
              </template>
            </ClientOnly>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <dialog
    v-else
    ref="navigation"
    class="block w-1/2 border border-dashed border-primary-900 bg-primary-50 md:hidden 2xl:w-1/3 dark:border-primary-100 dark:bg-primary-950"
  >
    <nav class="flex w-full items-center justify-around p-10">
      <!-- 1st item -->
      <ul class="space-y-4 text-primary-900 dark:text-primary-100">
        <li
          v-for="(route, index) of routes"
          :key="index"
        >
          <NuxtLink
            :to="route.path"
            class="inline-flex gap-x-4 text-2xl font-bold decoration-wavy underline-offset-8 hover:underline"
          >
            <BootstrapIcon
              :name="{
                'triangle-half': route.isCurrentPage,
                'triangle': !route.isCurrentPage,
              }"
              class="rotate-[90deg] text-xl"
            />

            {{ route.name }}</NuxtLink>
        </li>
      </ul>

      <!-- 2nd item -->
      <ul class="space-y-4">
        <li>
          <button
            class="inline-flex h-10 w-[140px] items-center justify-around border border-dashed border-primary-900 text-primary-900 hover:border-solid hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
            @click="$refs.navigation.close()"
          >
            Close menu
            <BootstrapIcon name="x-lg" />
          </button>
        </li>

        <li>
          <button
            class="inline-flex h-10 w-[150px] items-center justify-around border border-dashed border-primary-900 hover:border-solid hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
            @click="nextTheme()"
          >
            Change theme
            <BootstrapIcon
              :name="{
                'sun': state === 'light',
                'moon-stars': state === 'dark',
                'pc-display': state === 'system',
              }"
            />
          </button>
        </li>
      </ul>
    </nav>
  </dialog>
</template>
