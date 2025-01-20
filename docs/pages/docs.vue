<script lang="ts" setup>
const { data } = await useAsyncData(() =>
  queryCollection('content').path('/docs').first(),
)
</script>

<template>
  <div>
    <Head>
      <Title>{{ data?.title ?? '' }}</Title>
    </Head>

    <NuxtLayout name="page">
      <template #table-of-contents>
        <AppTableOfContents
          v-if="data!.body?.toc"
          :toc="data!.body.toc.links"
        />
        <p v-else>
          An error occurred ...
        </p>
      </template>

      <ContentRenderer
        v-if="data"
        class="space-y-4 text-primary-900 dark:text-primary-100"
        :value="data"
      />
    </NuxtLayout>
  </div>
</template>
