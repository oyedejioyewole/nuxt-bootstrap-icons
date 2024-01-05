import {
  addComponent,
  addComponentsDir,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";
import bootstrapIcons from "bootstrap-icons/font/bootstrap-icons.json" assert { type: "json" };
import { join } from "path";

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Choose how you want to register and display components
   *
   * @default 'inline'
   * @link https://nuxt-bootstrap-icons.vercel.app#display
   */
  display: "inline" | "component";

  /**
   * Enable to register components globally
   *
   * @default false
   * @link https://nuxt-bootstrap-icons.vercel.app#expose
   */
  expose: boolean;

  /**
   * The prefix of the component names
   *
   * @default "bootstrap-icon" or "BootstrapIcon"
   * @link https://nuxt-bootstrap-icons.vercel.app#prefix
   */
  prefix: string;

  /**
   * Enable to generate a virtual file with the list
   * of registered components at `#build/nuxt-bootstrap-icons.json`
   *
   * @default false
   * @link https://nuxt-bootstrap-icons.vercel.app#showlist
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
      templates: await resolvePath("./runtime/templates"),
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
    const icons = Object.keys(bootstrapIcons);

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
