<template>
  <main class="flex w-full">
    <AppNavigation />

    <section class="basis-[60%] px-10 py-5">
      <slot />
    </section>

    <aside class="border-l border-dashed border-primary-900 dark:border-primary-100 basis-[20%] p-5 text-primary-900 dark:text-primary-100">
      <nav class="sticky space-y-4">
        <p class="font-serif text-lg">
          On this page:
        </p>

        <slot name="table-of-contents" />
      </nav>
    </aside>
  </main>
</template>
