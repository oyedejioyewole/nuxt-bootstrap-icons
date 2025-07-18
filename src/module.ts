import { readdirSync } from 'node:fs'
import { dirname, parse } from 'node:path'
import {
  addComponent,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import { kebabCase } from 'change-case'

//  Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key allows you to set the prefix for the component registered by the module.
   *
   * @default "bootstrap-icon"
   */
  prefix: string

  /**
   * This key toggles whether a virtual file containing a list of all the icons name should be registered.
   * The virtual file can be imported from `#bootstrap-icons`
   *
   * @default false
   */
  showList: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-bootstrap-icons',
    configKey: 'bootstrapIcons',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  //  Default configuration options of the Nuxt module
  defaults: {
    prefix: 'bootstrap-icon',
    showList: false,
  },
  async setup(options, nuxt) {
    const prefix = kebabCase(options.prefix)

    const { resolve, resolvePath } = createResolver(import.meta.url)

    const path = {
      icons: resolve(
        dirname(await resolvePath('bootstrap-icons/package.json')),
        'icons',
      ),
      component: resolve('./runtime/components/BootstrapIcon.vue'),
      typing: resolve('./runtime/_types.d.ts'),
    }

    const iconList = readdirSync(path.icons).map(
      (icon) => {
        const { name: filename } = parse(icon)
        return filename
      },
    )

    addComponent({
      filePath: path.component,
      name: prefix,
    })

    /**
     * If `options.showList` is enabled, register a
     * template .json file (list of icon names)
     */
    if (options.showList) {
      const iconListTemplate = addTemplate({
        filename: 'nuxt-bootstrap-icons.json',
        getContents: () => JSON.stringify(iconList),
        write: true,
      })

      nuxt.options.alias['#bootstrap-icons'] = iconListTemplate.dst
    }

    addTypeTemplate({
      filename: 'types/nuxt-bootstrap-icons.d.ts',
      src: path.typing,
    })
  },
})
