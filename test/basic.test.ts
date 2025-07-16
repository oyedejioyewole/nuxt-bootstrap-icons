import { describe, it, expect } from 'vitest'
import { setup, $fetch, useTestContext } from '@nuxt/test-utils/e2e'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

describe('ssr:basic', async () => {
  await setup({
    rootDir: resolve('./fixtures/basic'),
  })

  it('renders an icon using a component', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<i class="bi bi-0-circle"></i>')
  })

  it('checks whether showList option works', async () => {
    const { nuxt } = useTestContext()

    expect(nuxt?.options.alias['#bootstrap-icons']).contains('nuxt-bootstrap-icons.json')
  })
})
