<script lang="ts" setup>
const route = useRoute()
const { data } = useAsyncData('content', () => queryCollection('content').path(route.path).first())

const title = computed(() => {
  if (data.value)
    return data.value.title

  return null
})
useHead({ title })
</script>

<template>
  <NuxtLayout>
    <AppHeader />

    <DialogsDocumentation />
  </NuxtLayout>
</template>
