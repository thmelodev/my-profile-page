import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type RotatingTextProps = {
    phrases: string[]
    /** Espera antes de começar a digitar, para não competir com a entrada do hero. */
    startDelay?: number
}

/** Digita e apaga cada frase em sequência. Leitores de tela recebem a lista completa. */
export const RotatingText = ({ phrases, startDelay = 1100 }: RotatingTextProps) => {
    const reducedMotion = useReducedMotion()
    const [started, setStarted] = useState(false)
    const [index, setIndex] = useState(0)
    const [length, setLength] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setStarted(true), startDelay)
        return () => clearTimeout(timer)
    }, [startDelay])

    useEffect(() => {
        if (!started || reducedMotion) return

        const phrase = phrases[index]
        const typed = length === phrase.length
        const erased = length === 0
        const delay = deleting ? (erased ? 250 : 28) : typed ? 2000 : 60

        const timer = setTimeout(() => {
            if (!deleting && typed) setDeleting(true)
            else if (deleting && erased) {
                setDeleting(false)
                setIndex((i) => (i + 1) % phrases.length)
            } else setLength((l) => l + (deleting ? -1 : 1))
        }, delay)

        return () => clearTimeout(timer)
    }, [started, reducedMotion, phrases, index, length, deleting])

    const visible = reducedMotion ? phrases[0] : phrases[index].slice(0, length)

    return (
        <>
            <span className="sr-only">{phrases.join(', ')}</span>
            <span aria-hidden className="text-lilac">
                {visible}
                <span className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.12em] animate-caret rounded-full bg-violet" />
            </span>
        </>
    )
}
