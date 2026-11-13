import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type SectionProps = {
    id: string
    title: string
    intro?: ReactNode
    children: ReactNode
    className?: string
}

export const Section = ({ id, title, intro, children, className = '' }: SectionProps) => (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
                <h2
                    id={`${id}-title`}
                    className="text-4xl font-bold tracking-tight [font-stretch:85%] md:text-6xl"
                >
                    {title}
                </h2>
                {intro && <p className="mt-4 max-w-[58ch] text-lg text-muted">{intro}</p>}
            </Reveal>
            <div className="mt-12 md:mt-16">{children}</div>
        </div>
    </section>
)

type RevealProps = {
    children: ReactNode
    delay?: number
    className?: string
    as?: 'div' | 'li'
}

/** Aparece suavemente quando entra na tela. */
export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) => {
    const [ref, inView] = useInView<HTMLDivElement & HTMLLIElement>()
    const style: CSSProperties = { transitionDelay: `${delay}ms` }

    return (
        <Tag
            ref={ref}
            style={style}
            className={`transition duration-700 ease-out-expo ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } ${className}`}
        >
            {children}
        </Tag>
    )
}

export const Chip = ({ children }: { children: ReactNode }) => (
    <span className="rounded-full border border-line bg-surface px-3 py-1 text-sm text-lilac">{children}</span>
)
