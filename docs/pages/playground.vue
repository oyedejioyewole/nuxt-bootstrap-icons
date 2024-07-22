<script setup lang="ts">
import iconList from "#build/nuxt-bootstrap-icons.json";
import { pascalCase } from "change-case";

useHead({ title: "Playground" });

const displayMode = ref<"component" | "inline">("component");
</script>

<template>
  <header class="min-h-screen space-y-10 py-20">
    <UIHeadings level="h1">Playground</UIHeadings>

    <div class="grid grid-cols-4">
      <div class="col-span-3">
        <UIHeadings level="h3">Icon list</UIHeadings>

        <div class="flex items-center gap-x-2">
          <label>Component</label>
          <input
            class="aspect-square w-5 appearance-none rounded-md border border-primary-900 checked:bg-primary-300"
            type="checkbox"
            :checked="displayMode === 'inline'"
          />
        </div>
      </div>

      <UIHeadings level="h3">Preview</UIHeadings>
    </div>
  </header>
</template>
