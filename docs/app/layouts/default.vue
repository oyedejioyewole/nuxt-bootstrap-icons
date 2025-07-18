<template>
  <main>
    <div class="max-lg:sticky bg-primary-50 dark:bg-primary-950 backdrop-blur-lg max-lg:border-b z-10 top-0">
      <AppNavigation class="flex justify-between items-center max-lg:py-4 min-lg:py-8 w-9/10 mx-auto" />
    </div>

    <slot />
  </main>
</template>
