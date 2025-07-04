<script lang="ts" setup>
const { data } = useNuxtData('content')

const dialog = useTemplateRef('dialog')
</script>

<template>
  <dialog
    ref="dialog"
    class="mt-auto md:m-auto max-w-full md:max-w-9/10 p-4 xs:p-8 max-h-9/10 rounded-lg"
  >
    <div class="flex justify-end">
      <UiButton
        class="text-sm flow-row-reverse"
        variant="accent"
        icon="x-lg"
        @click="dialog?.close()"
      >
        Close
      </UiButton>
    </div>

    <ContentRenderer
      v-if="data"
      :value="data"
      class="space-y-4"
    />
  </dialog>
</template>
