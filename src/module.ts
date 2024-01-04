import {
  addComponent,
  addComponentsDir,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import { readdirSync } from "fs";
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Choose how you want to register and display components
   *
   * @default 'inline'
   * @link https://nuxt-bootstrap-icons.vercel.app
   */
  display: "inline" | "component";

  /**
   * Enable to register components globally
   *
   * @default false
   */
  expose: boolean;

  /**
   * The prefix of the component names
   *
   * @default "bootstrap-icon" or "BootstrapIcon"
   */
  prefix: string;

  /**
   * Enable to generate a virtual file with the list
   * of registered components at `#build/nuxt-bootstrap-icons.json`
   */
  showList: boolean;
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
  defaults: {
    display: "inline",
    expose: false,
    prefix: "bootstrap-icon",
    showList: false,
  },
  async setup(options) {
    const { resolvePath } = createResolver(import.meta.url);

    // Resolve paths
    const paths = {
      components: await resolvePath("./runtime/components"),
      source: await resolvePath("../node_modules/bootstrap-icons/icons"),
      templates: await resolvePath("./templates"),
    };

    // Convert prefix to PascalCase
    let _prefix: string;

    if (options.prefix.includes("-"))
      _prefix = options.prefix
        .split("-")
        .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
        .join("");
    else
      _prefix = options.prefix.at(0)?.toUpperCase() + options.prefix.slice(1);

    // Register components
    if (options.display === "component")
      await addComponentsDir({
        global: options.expose,
        path: join(paths.components, "library"),
        prefix: _prefix,
      });
    else if (options.display === "inline")
      await addComponent({
        filePath: join(paths.components, "BootstrapIcon.vue"),
        name: _prefix,
      });

    // Get and format icon names
    const icons = readdirSync(paths.source).map((icon) =>
      icon.replace(".svg", ""),
    );

    // Register template .json file (list of icon names)
    if (options.display === "component") {
      const _icons = icons.map((icon) =>
        icon
          .split("-")
          .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
          .join(""),
      );

      addTemplate({
        filename: "nuxt-bootstrap-icons.json",
        getContents: () => JSON.stringify(_icons),
        write: true,
      });
    } else
      addTemplate({
        filename: "nuxt-bootstrap-icons.json",
        getContents: () => JSON.stringify(icons),
        write: true,
      });

    addTypeTemplate({
      filename: "types/nuxt-bootstrap-icons.d.ts",
      src: join(paths.templates, "_types.d.ts"),
    });
  },
});
