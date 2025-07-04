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
   * What should be prefixed to the icons?
   *
   * @default "bootstrap-icon"
   * @link https://nuxt-bootstrap-icons.vercel.app#prefix
   */
  prefix: string

  /**
   * Enable to add a virtual JSON file containing all the icons registered at path
   * `#build/nuxt-bootstrap-icons.json`
   *
   * @default false
   * @link https://nuxt-bootstrap-icons.vercel.app#showlist
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
  async setup(options) {
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

    const icons = readdirSync(path.icons).reduce(
      (accumulator, current) => {
        const { name: filename } = parse(current)
        accumulator.push(filename)

        return accumulator
      },
      [] as string[],
    )

    addComponent({
      filePath: path.component,
      name: prefix,
    })

    /**
     * If `options.showList` is enabled, register a
     * template .json file (list of icon names)
     */
    if (options.showList)
      addTemplate({
        filename: 'nuxt-bootstrap-icons.json',
        getContents: () => JSON.stringify(icons),
        write: true,
      })

    addTypeTemplate({
      filename: 'types/nuxt-bootstrap-icons.d.ts',
      src: path.typing,
    })
  },
})
