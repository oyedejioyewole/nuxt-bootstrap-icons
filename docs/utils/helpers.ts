import iconList from '#build/nuxt-bootstrap-icons.json'
import colors from '#tailwind-config/theme/colors'

/**
 * This function gets the shades of the provided color
 * from the `#build/tailwind.config` virtual file
 */

export const getColorShades = (name: string) =>
  colors[name] as { [shade: number]: string }

/**
 * Randomly generate icons within limit
 * from `#build/nuxt-bootstrap-icons.json`
 */

export const getIcons = (limit: number) => {
  const icons: string[] = []

  for (let index = 0; index < limit; index++) {
    const icon = `${iconList[Math.floor(Math.random() * iconList.length)]}`

    // Prevent duplicate icons
    if (icons.includes(icon)) {
      index--
      continue
    }

    icons.push(icon)
  }

  return icons as BootstrapIcons[]
}
