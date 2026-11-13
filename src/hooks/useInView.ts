import { useEffect, useRef, useState } from 'react'

/** Retorna `true` a partir do momento em que o elemento entra na tela (uma vez só). */
export const useInView = <T extends Element>(rootMargin = '0px 0px -12% 0px') => {
    const ref = useRef<T>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el || inView) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin },
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [inView, rootMargin])

    return [ref, inView] as const
}
