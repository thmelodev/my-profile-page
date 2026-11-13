import { useCallback, useEffect, useState } from 'react'

/** Chama `onFrame` no máximo uma vez por frame enquanto a página rola ou muda de tamanho. */
export const useScrollFrame = (onFrame: () => void) => {
    useEffect(() => {
        let frame = 0
        const schedule = () => {
            if (frame) return
            frame = requestAnimationFrame(() => {
                frame = 0
                onFrame()
            })
        }

        onFrame()
        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
        }
    }, [onFrame])
}

/** Quanto da página já foi lido, de 0 a 1. */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0)

    const update = useCallback(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }, [])

    useScrollFrame(update)

    return progress
}

/** Id da seção que está no meio da tela, para destacar o link certo no menu. */
export const useActiveSection = (ids: string[]) => {
    const [active, setActive] = useState<string | null>(null)
    const key = ids.join(',')

    useEffect(() => {
        const elements = key
            .split(',')
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id)
                }
            },
            { rootMargin: '-45% 0px -50% 0px' },
        )
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [key])

    return active
}
