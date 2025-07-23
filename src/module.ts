import {
  addComponent,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.json'
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
    const { resolve } = createResolver(import.meta.url)

    addComponent({
      filePath: resolve('./runtime/components/BootstrapIcon.vue'),
      name: kebabCase(options.prefix),
    })

    /**
     * If `options.showList` is enabled, register a virtual file
     * containing a list of icons then create an alias to the file.
     */
    if (options.showList) {
      const iconListTemplate = addTemplate({
        filename: 'nuxt-bootstrap-icons.json',
        getContents: () => JSON.stringify(Object.keys(bootstrapIcons)),
        write: true,
      })

      // TODO: why are file extensions removed when alias has been registered?
      nuxt.options.alias['#bootstrap-icons'] = iconListTemplate.dst
    }

    const typeTemplate = addTypeTemplate({
      filename: 'types/nuxt-bootstrap-icons.d.ts',
      src: resolve('./runtime/types.d.ts'),
    })

    nuxt.options.alias['#bootstrap-icons/types'] = typeTemplate.dst
  },
})
