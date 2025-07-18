<script lang="ts" setup>
const { data } = await useAsyncData('content', () => queryCollection('content').path('/').first())

useHead({ title: data.value?.title })
</script>

<template>
  <div>
    <AppHeader />

    <section
      v-if="data"
      class="flex flex-col-reverse min-lg:flex-row py-4 min-lg:py-8 min-h-screen w-9/10 mx-auto gap-y-8"
    >
      <ContentRenderer
        :value="data"
        class="space-y-4 basis-3/10"
      />
    </section>
  </div>
</template>
