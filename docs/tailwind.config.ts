import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator'
import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: tailwindcssPaletteGenerator({
        colors: ['#9a4aee'],
        names: ['primary'],
      }),
      fontFamily: {
        mono: ['Courier Prime', 'monospace'],
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
