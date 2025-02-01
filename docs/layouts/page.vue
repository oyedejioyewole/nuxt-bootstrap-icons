<script lang="ts" setup>
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <main
    class="mx-auto flex w-[90%] flex-col gap-y-10 py-10 lg:w-full lg:flex-row lg:py-0"
  >
    <AppNavigation />

    <section class="basis-[60%] lg:px-10 lg:py-5">
      <slot />
    </section>

    <aside
      class="order-first basis-[20%] rounded-lg border border-primary-900 p-5 text-primary-900 lg:order-last lg:rounded-none lg:border-l lg:border-dashed dark:border-primary-100 dark:text-primary-100"
    >
      <nav class="sticky space-y-4">
        <template v-if="breakpoints.isGreaterOrEqual('lg')">
          <p class="font-serif text-lg">
            On this page:
          </p>

          <slot name="table-of-contents" />
        </template>

        <details v-else>
          <summary class="font-serif">
            On this page:
          </summary>
          <slot name="table-of-contents" />
        </details>
      </nav>
    </aside>
  </main>
</template>
