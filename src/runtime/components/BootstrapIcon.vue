<script lang="ts" setup>
import { computed, preloadComponents, resolveComponent } from '#imports'
import { getIconMap } from '../utils/icons'

const iconMap = getIconMap()

type BootstrapIconName = keyof ReturnType<typeof getIconMap>

interface BootstrapIconProps {
  name: BootstrapIconName | Partial<Record<BootstrapIconName, boolean>>
  color?: string
  size?: number
}

const props = withDefaults(
  defineProps<BootstrapIconProps>(),
  {
    color: 'currentColor',
    size: 16,
  },
)

const normalizedName = computed(() => {
  if (typeof props.name === 'string') return props.name

  const iconEntries = Object.entries(props.name)
  preloadComponents(iconEntries.map(([iconName]) => iconMap[iconName as BootstrapIconName]))

  // Pick only the first truthy entry
  const activeIcon = iconEntries.find(([, isTruthy]) => isTruthy)
  return activeIcon ? activeIcon[0] : null
})

const Icon = computed(() => {
  const iconMapEntry = Object.entries(iconMap).find(([nameFromMap]) => nameFromMap === normalizedName.value)

  if (!iconMapEntry) {
    console.warn(`'${normalizedName.value}' icon doesn't exist, would use a blank <svg> element instead`)
    return 'svg'
  }

  return resolveComponent(iconMapEntry[1])
})
</script>

<template>
  <component
    :is="Icon"
    :fill="$props.color"
    :height="$props.size"
    :width="$props.size"
    viewBox="0 0 16 16"
  >
    <slot />
  </component>
</template>
