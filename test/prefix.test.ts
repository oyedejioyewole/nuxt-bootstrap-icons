import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

describe('ssr:prefix', async () => {
  await setup({
    rootDir: resolve('./fixtures/prefix'),
  })

  it('renders an icon using a prefixed component', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<i class="bi bi-0-circle"></i>')
  })
})
