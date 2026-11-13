import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'

const subscribe = (callback: () => void) => {
    const media = window.matchMedia(query)
    media.addEventListener('change', callback)
    return () => media.removeEventListener('change', callback)
}

/** `true` quando a pessoa pediu menos movimento nas configurações do sistema. */
export const useReducedMotion = () =>
    useSyncExternalStore(subscribe, () => window.matchMedia(query).matches, () => false)
