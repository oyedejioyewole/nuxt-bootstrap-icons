<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

const shades = getColorShades('primary')

const error = useError()

const breakpoints = useBreakpoints(breakpointsTailwind)

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: `${error.value?.statusCode ?? ''}`,
  titleTemplate: '%s · nuxt-bootstrap-icons',
})

const openNavigation = () => {
  const navigation = document.querySelector('dialog')
  if (!navigation) return

  navigation.showModal()
}
</script>

<template>
  <div class="bg-primary-50 dark:bg-primary-950">
    <!-- Loading indicator -->
    <NuxtLoadingIndicator
      :color="$colorMode.value === 'dark' ? shades[100] : shades[900]"
    />

    <NuxtLayout>
      <div class="flex h-full flex-col items-center justify-center">
        <h1 class="font-serif text-9xl text-primary-900 dark:text-primary-100">
          {{ error?.statusCode }}
        </h1>

        <div
          class="mx-auto flex flex-col items-center gap-y-4 text-primary-900 dark:text-primary-100"
        >
          <p class="w-fit max-w-96 truncate">
            {{ error?.message }}
          </p>

          <button
            v-show="breakpoints.isSmallerOrEqual('md')"
            class="inline-flex items-center justify-center gap-x-4 border border-dashed border-primary-900 px-5 py-3 text-primary-900  hover:border-solid hover:bg-primary-900/10 dark:border-primary-100 dark:text-primary-100 dark:hover:bg-primary-100/10"
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

    <NuxtRouteAnnouncer />
  </div>
</template>
