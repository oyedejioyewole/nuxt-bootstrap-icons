import { name as packageName } from '../package.json'

import {
  addComponent,
  addImportsSources,
  addPluginTemplate,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'
import { kebabCase, pascalCase } from 'change-case'
import { readFile } from 'node:fs/promises'

//  Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key allows you to set the name of the registered component.
   *
   * @default "bootstrap-icon"
   */
  componentName: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: packageName,
    configKey: 'bootstrapIcons',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  //  Default configuration options of the Nuxt module
  defaults: {
    componentName: 'bootstrap-icon',
  },
  async setup(options, nuxt) {
    const { resolve, resolvePath } = createResolver(import.meta.url)
    const logger = useLogger(packageName)

    addImportsSources({
      from: resolve('./runtime/utils/icons.ts'),
      imports: ['getIconList', 'getIconMap'],
    })

    addComponent({
      filePath: resolve('./runtime/components/BootstrapIcon.vue'),
      name: kebabCase(options.componentName),
    })

    // Create module types and its alias
    const typeTemplate = addTypeTemplate({
      filename: `types/${packageName}.d.ts`,
      src: resolve('./runtime/types.d.ts'),
    })
    nuxt.options.alias['#bootstrap-icons/types'] = typeTemplate.dst

    const patternToGetSVGOpeningTag = /<svg[^>]*>/
    const patternToGetIconNameAndPathChild = /<symbol[^>]*id=["']([^"']+)["'][^>]*>(.*?)<\/symbol>/g

    const iconsSource = await resolvePath('bootstrap-icons/bootstrap-icons.svg')
    const iconsBuffer = await readFile(iconsSource)

    const svgOpeningTagResults = iconsBuffer.toString().match(patternToGetSVGOpeningTag)
    const svgOpeningTag = svgOpeningTagResults ? svgOpeningTagResults[0] : ''

    const searchResults = iconsBuffer.toString().matchAll(patternToGetIconNameAndPathChild)
    const matchedResults = Array.from(searchResults, (result) => {
      const componentName = pascalCase('bi-' + (result.at(1) ?? '')).replace('_', '')
      return { name: result.at(1) ?? '', componentName, child: result.at(2) ?? '', path: resolve(nuxt.options.buildDir, `.bootstrap-icons/${componentName}.vue`) }
    })

    for (const result of matchedResults) {
      // Write each icon to a component in #build/.bootstrap-icons.
      addTemplate({
        filename: `.bootstrap-icons/${result.componentName}.vue`,
        getContents: () => [
          `// Provided by ${packageName}`,
          '<template>',
          `   ${svgOpeningTag}`,
          `     ${result.child}`,
          '   </svg>',
          '</template>',
        ].join('\n'),
        write: true,
      })
    }

    // Register a key-value mapping of result.name -> result.componentName
    const iconMapTemplate = addTemplate({
      filename: `${packageName}.map.mjs`,
      getContents: () => [
        `// Provided by ${packageName}`,
        'export default {',
        matchedResults.map(result => `   "${result.name}": "${result.componentName}"`).join(',\n'),
        '}',
      ].join('\n'),
      write: true,
    })
    nuxt.options.alias['#bootstrap-icons/map'] = iconMapTemplate.dst

    // Register a plugin to register components globally.
    addPluginTemplate({
      filename: `${packageName}.plugin.mjs`,
      getContents: () => [
        'import { defineNuxtPlugin } from "#app"',
        'import { defineAsyncComponent } from "#imports"',
        '',
        'export default defineNuxtPlugin((nuxtApp) => {',
        matchedResults.map(result => `   nuxtApp.vueApp.component('${result.componentName}', defineAsyncComponent(() => import('${result.path}')))`).join('\n'),
        '})',
      ].join('\n'),
    })

    // Update manifest to remove preload/prefetch tags from bundled icons.
    nuxt.hook('build:manifest', (manifest) => {
      const iconEntries = Object.entries(manifest).filter(entry => entry[0].includes('.bootstrap-icons'))

      for (const [, iconManifest] of iconEntries) {
        iconManifest.prefetch = false
        iconManifest.preload = false
      }
    })

    logger.success(`${matchedResults.length} icons have been built (stored in #build) and registered.`)
  },
})
