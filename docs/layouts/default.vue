<template>
  <main class="flex h-screen w-full flex-col lg:flex-row">
    <AppNavigation />

    <section class="basis-[65%]">
      <slot />
    </section>

    <slot name="extra" />
  </main>
</template>
