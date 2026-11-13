import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type RotatingTextProps = {
    /** Texto fixo antes da frase digitada, ex.: "Construo". */
    prefix: string
    phrases: string[]
    /** Espera antes de começar a digitar, para não competir com a entrada do hero. */
    startDelay?: number
    className?: string
}

const Caret = ({ visible = true }: { visible?: boolean }) => (
    <span
        className={`ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.12em] rounded-full bg-violet ${
            visible ? 'animate-caret' : ''
        }`}
    />
)

/**
 * Digita e apaga cada frase em sequência, sem mexer no layout: todas as frases ficam
 * empilhadas, invisíveis, na mesma célula do grid, então a altura reservada é sempre a da
 * frase mais longa e nada abaixo dela pula enquanto o texto muda.
 * Leitores de tela recebem a lista completa de uma vez.
 */
export const RotatingText = ({ prefix, phrases, startDelay = 1100, className = '' }: RotatingTextProps) => {
    const reducedMotion = useReducedMotion()
    const [started, setStarted] = useState(false)
    const [index, setIndex] = useState(0)
    // A primeira frase já nasce completa: é o maior texto da tela (a LCP), e se ela fosse
    // digitada letra a letra o navegador só consideraria a página "pronta" ao fim da digitação.
    const [length, setLength] = useState(phrases[0].length)
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
        <p className={className}>
            <span className="sr-only">
                {prefix} {phrases.join(', ')}
            </span>
            <span aria-hidden className="grid">
                {/* Reservam a altura da frase mais longa */}
                {phrases.map((phrase) => (
                    <span key={phrase} className="invisible col-start-1 row-start-1">
                        {prefix} {phrase}
                        <Caret visible={false} />
                    </span>
                ))}
                <span className="col-start-1 row-start-1">
                    {prefix} <span className="text-lilac">{visible}</span>
                    <Caret />
                </span>
            </span>
        </p>
    )
}
