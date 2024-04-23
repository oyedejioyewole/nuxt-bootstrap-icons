import {
  addComponent,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  installModule,
} from "@nuxt/kit";
import { readdir } from "fs/promises";
import { dirname, join, parse } from "path";

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
    prefix: "bootstrap-icon",
    showList: false,
  },
  async setup(options) {
    const { resolve } = createResolver(import.meta.url);

    // Resolve paths
    const paths = {
      bootstrapIcons: join(
        dirname(require.resolve("bootstrap-icons/package.json")),
        "icons",
      ),
      components: resolve("./runtime/components"),
      typings: resolve("./runtime/_types.d.ts"),
    };

    let iconList = (await readdir(paths.bootstrapIcons)).map(
      (entry) => parse(entry).name,
    );

    /** Capitalize the first word of every word split by '-'
     * else capitalize the first word of the prefix
     */

    const _prefix = options.prefix.includes("-")
      ? options.prefix
          .split("-")
          .map((word) => word.at(0)?.toUpperCase() + word.slice(1))
          .join("")
      : options.prefix.at(0)?.toUpperCase() + options.prefix.slice(1);

    if (options.display === "component") {
      await installModule("nuxt-svgo-loader");

      const iconPaths = iconList.map(
        (icon) => join(paths.bootstrapIcons, icon) + ".svg",
      );

      for (let index = 0; index < iconPaths.length; index++) {
        const filename = iconList[index]
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join("");

        iconList[index] = filename;

        await addComponent({
          filePath: iconPaths[index],
          name: _prefix + filename,
        });
      }
    } else
      await addComponent({
        filePath: resolve(paths.components, "BootstrapIcon.vue"),
        name: _prefix,
      });

    /**
     * If `options.showList` is enabled, register a
     * template .json file (list of icon names)
     */
    if (options.showList)
      addTemplate({
        filename: "nuxt-bootstrap-icons.json",
        getContents: () => JSON.stringify(iconList),
        write: true,
      });

    addTypeTemplate({
      filename: "types/nuxt-bootstrap-icons.d.ts",
      src: resolve(paths.typings),
    });
  },
});
