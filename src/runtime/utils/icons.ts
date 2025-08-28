// @ts-expect-error Module resolution issues
import iconMap from '#bootstrap-icons/map'
import type { BootstrapIconName } from '../types'

export const getIconList = () => Object.keys(iconMap) as BootstrapIconName[]

export const getIconMap = (): Record<BootstrapIconName, string> => iconMap
