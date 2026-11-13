import { GraduationCap, Languages } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { education, jobs, languages } from '../data/profile'
import { useScrollFrame } from '../hooks/useScroll'
import { Chip, Reveal, Section } from './ui'

export const Experience = () => {
    const listRef = useRef<HTMLOListElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)
    const [reached, setReached] = useState(0)

    // A linha da timeline acompanha a rolagem; cada marco acende quando a linha chega nele.
    const update = useCallback(() => {
        const list = listRef.current
        const fill = fillRef.current
        if (!list || !fill) return

        const rect = list.getBoundingClientRect()
        const anchor = window.innerHeight * 0.6
        const progress = Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1)
        fill.style.transform = `scaleY(${progress})`

        const items = Array.from(list.children) as HTMLElement[]
        setReached(items.filter((item) => rect.top + item.offsetTop + 14 <= anchor).length)
    }, [])

    useScrollFrame(update)

    return (
        <Section
            id="experiencia"
            title="Experiência"
            intro={
                <>
                    Do estágio ao nível pleno em quatro anos: comecei no programa QQ-Tech das{' '}
                    <span className="whitespace-nowrap">Lojas Quero-Quero</span> e hoje conduzo projetos de ponta a ponta
                    na Megawork Consultoria.
                </>
            }
        >
            <div className="grid gap-16 lg:grid-cols-[1.7fr_1fr]">
                <div className="relative">
                    <div aria-hidden className="absolute top-3 bottom-0 left-[12px] w-0.5 rounded-full bg-line">
                        <div
                            ref={fillRef}
                            className="h-full w-full origin-top scale-y-0 rounded-full bg-gradient-to-b from-violet via-violet to-lilac shadow-[0_0_12px_var(--color-violet)]"
                        />
                    </div>

                <ol ref={listRef} className="relative">
                    {jobs.map((job, i) => {
                        const isReached = i < reached
                        return (
                            <li key={`${job.role}-${job.start}`} className="relative pb-16 pl-12 last:pb-0 md:pl-14">
                                <span
                                    aria-hidden
                                    className={`absolute top-1 left-0 grid size-[26px] place-items-center rounded-full border-2 transition duration-500 ${
                                        isReached
                                            ? 'border-violet bg-violet shadow-[0_0_0_6px_rgb(146_81_255/0.2),0_0_28px_var(--color-violet)]'
                                            : 'border-line bg-ink'
                                    }`}
                                >
                                    <span
                                        className={`size-2 rounded-full transition duration-500 ${isReached ? 'bg-white' : 'bg-line'}`}
                                    />
                                </span>

                                <Reveal>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                                        <span>
                                            {job.start} – {job.end}
                                        </span>
                                        {job.current && (
                                            <span className="rounded-full bg-violet/15 px-2.5 py-0.5 text-lilac">
                                                Cargo atual
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="mt-2 text-2xl font-bold tracking-tight [font-stretch:88%] md:text-3xl">
                                        {job.role}
                                    </h3>

                                    <div className="mt-3 flex items-center gap-3">
                                        <span
                                            className={`grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl ${
                                                job.logoBg === 'white' ? 'bg-white p-0.5' : 'bg-violet p-1.5'
                                            }`}
                                        >
                                            <img
                                                src={job.logo}
                                                alt=""
                                                width={36}
                                                height={36}
                                                loading="lazy"
                                                className="size-full object-contain"
                                            />
                                        </span>
                                        <div className="leading-tight">
                                            <p className="font-semibold text-lilac">{job.company}</p>
                                            <p className="text-sm text-muted">{job.location}</p>
                                        </div>
                                    </div>

                                    <ul className="mt-6 grid max-w-[68ch] gap-3">
                                        {job.highlights.map((item) => (
                                            <li key={item} className="flex gap-3 text-text/90">
                                                <span
                                                    aria-hidden
                                                    className="mt-[0.7em] h-0.5 w-3 shrink-0 rounded-full bg-violet"
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologias">
                                        {job.tech.map((tech) => (
                                            <li key={tech}>
                                                <Chip>{tech}</Chip>
                                            </li>
                                        ))}
                                    </ul>
                                </Reveal>
                            </li>
                        )
                    })}
                </ol>
                </div>

                <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
                    <Reveal className="rounded-2xl border border-line bg-surface/70 p-6">
                        <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                            <GraduationCap className="size-5 text-violet" aria-hidden />
                            Formação
                        </h3>
                        <ul className="mt-5 grid gap-5">
                            {education.map((item) => (
                                <li key={item.course}>
                                    <p className="font-semibold">{item.course}</p>
                                    <p className="text-sm text-lilac">{item.school}</p>
                                    <p className="text-sm text-muted">{item.period}</p>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={120} className="rounded-2xl border border-line bg-surface/70 p-6">
                        <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                            <Languages className="size-5 text-violet" aria-hidden />
                            Idiomas
                        </h3>
                        <ul className="mt-5 grid gap-4">
                            {languages.map((lang) => (
                                <li key={lang.name}>
                                    <p className="font-semibold">{lang.name}</p>
                                    <p className="text-sm text-muted">{lang.level}</p>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </aside>
            </div>
        </Section>
    )
}
