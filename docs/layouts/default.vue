<template>
  <main class="flex h-screen w-[90%] lg:w-full mx-auto flex-col lg:flex-row justify-around">
    <AppNavigation />

    <section class="lg:basis-[65%]">
      <slot />
    </section>

    <slot name="extra" />
  </main>
</template>
