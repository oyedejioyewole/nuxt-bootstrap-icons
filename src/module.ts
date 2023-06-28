import { defineNuxtModule, addComponent, createResolver } from "@nuxt/kit";
import { readdirSync } from "fs";

// Module options TypeScript interface definition
export interface ModuleOptions {
  renderType: "inline" | "component";
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-bootstrap-icons",
    configKey: "bootstrapIcons",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: { renderType: "inline" },
  async setup({ renderType }) {
    const { resolve } = createResolver(import.meta.url);

    if (renderType === "inline") {
      addComponent({
        filePath: resolve("./runtime/BootstrapIcon.vue"),
        name: "BootstrapIcon",
      });
    } else if (renderType === "component") {
      const components = readdirSync(
        resolve("./runtime/components")
      ) as string[];
      for (const component of components) {
        addComponent({
          filePath: resolve("./runtime/components", component),
          name: `BootstrapIcon${component.split(".")[0]}`,
        });
      }
    }
  },
});
