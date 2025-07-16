<script lang="ts" setup>
const { data } = await useAsyncData('content', () => queryCollection('content').path('/').first())

useHead({ title: data.value?.title })
</script>

<template>
  <div>
    <AppHeader />

    <section
      v-if="data"
      class="flex flex-col-reverse min-lg:flex-row justify-around py-4 min-lg:py-8 min-h-screen max-lg:w-9/10 max-lg:mx-auto gap-y-8"
    >
      <ContentRenderer
        :value="data"
        class="space-y-4 basis-1/2"
      />

      <aside class="basis-2/10 p-4 min-lg:p-8 rounded-lg space-y-4 bg-primary-100 border dark:bg-primary-900 h-fit">
        <p class="font-bold">
          Table of Contents
        </p>
        <AppTableOfContents :toc="data.body.toc" />
      </aside>
    </section>
  </div>
</template>
