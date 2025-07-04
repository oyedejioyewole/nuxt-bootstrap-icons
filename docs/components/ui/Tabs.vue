<script lang="ts" setup>
defineProps<{ tabs: string[] }>()

const activeTab = ref(1)
</script>

<template>
  <div class="space-y-4">
    <nav class="bg-primary-200 dark:bg-primary-800 w-fit rounded-full">
      <button
        v-for="(tab, index) of $props.tabs"
        :key="tab"
        class="font-mono cursor-pointer px-4 py-2 rounded-full border text-sm"
        :class="{
          'font-bold': activeTab === index + 1,
          'border-transparent': activeTab !== index + 1,
        }"
        @click="activeTab = index + 1"
      >
        {{ tab }}
      </button>
    </nav>

    <div
      v-for="index in $props.tabs.length"
      :key="index"
      class="space-y-4"
    >
      <slot
        v-if="index === activeTab"
        :name="`tab-${index}`"
      />
    </div>
  </div>
</template>
