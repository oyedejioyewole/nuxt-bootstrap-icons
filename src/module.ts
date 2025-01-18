import { readdirSync } from 'node:fs'
import { dirname, join, parse } from 'node:path'
import {
  addComponent,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  installModule,
} from '@nuxt/kit'
import { kebabCase } from 'change-case'

//  Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * How should the module register the icons?
   *
   * @default 'inline'
   * @link https://nuxt-bootstrap-icons.vercel.app#display
   */
  display: 'inline' | 'component'

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
    display: 'inline',
    prefix: 'bootstrap-icon',
    showList: false,
  },
  async setup(options) {
    const { resolve, resolvePath } = createResolver(import.meta.url)

    const paths = {
      bootstrapIcons: resolve(
        dirname(await resolvePath('bootstrap-icons/package.json')),
        'icons',
      ),
      component: resolve('./runtime/components/BootstrapIcon.vue'),
      typings: resolve('./runtime/_types.d.ts'),
    }

    const prefix = kebabCase(options.prefix)

    const iconList = readdirSync(paths.bootstrapIcons).map((icon) => {
      const { name } = parse(icon)

      return {
        fullName: `${prefix}-${name}`,
        name,
        path: join(paths.bootstrapIcons, icon),
      }
    })

    if (options.display === 'component') {
      await installModule('nuxt-svgo-loader', {
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      })

      for (const icon of iconList)
        await addComponent({
          filePath: icon.path,
          name: icon.fullName,
        })
    }
    else
      await addComponent({
        filePath: paths.component,
        name: prefix,
      })

    /**
     * If `options.showList` is enabled, register a
     * template .json file (list of icon names)
     */
    if (options.showList)
      addTemplate({
        filename: 'nuxt-bootstrap-icons.json',
        getContents: () => JSON.stringify(iconList.map(icon => icon.name)),
        write: true,
      })

    addTypeTemplate({
      filename: 'types/nuxt-bootstrap-icons.d.ts',
      src: paths.typings,
    })
  },
})
