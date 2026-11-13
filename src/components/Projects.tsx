import { ExternalLink, Lock } from 'lucide-react'
import type { CSSProperties, PointerEvent } from 'react'
import { projects, type Project } from '../data/profile'
import { buttonStyles } from './styles'
import { Chip, Reveal, Section } from './ui'

export const Projects = () => (
    <Section id="projetos" title="Projetos" intro="Um projeto entregue de ponta a ponta, do código ao deploy.">
        <div className="grid gap-10">
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    </Section>
)

/** Brilho roxo que segue o cursor dentro do card. */
const trackPointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--y', `${event.clientY - rect.top}px`)
}

const ProjectCard = ({ project }: { project: Project }) => (
    <Reveal>
        <article
            onPointerMove={trackPointer}
            style={{ '--x': '50%', '--y': '30%' } as CSSProperties}
            className="group relative isolate grid items-start gap-10 overflow-clip rounded-3xl border border-line bg-surface/60 p-5 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:p-12"
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100 [background:radial-gradient(520px_circle_at_var(--x)_var(--y),rgb(146_81_255/0.16),transparent_65%)]"
            />

            <BrowserFrame project={project} />

            <div>
                <h3 className="text-3xl font-bold tracking-tight [font-stretch:85%] md:text-4xl">{project.name}</h3>
                <p className="mt-4 max-w-[58ch] text-lg text-text/90">{project.summary}</p>

                <h4 className="mt-8 font-semibold text-lilac">Decisões técnicas</h4>
                <ul className="mt-3 grid gap-2.5">
                    {project.decisions.map((item) => (
                        <li key={item} className="flex gap-3 text-muted">
                            <span aria-hidden className="mt-[0.7em] h-0.5 w-3 shrink-0 rounded-full bg-violet" />
                            {item}
                        </li>
                    ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tecnologias">
                    {project.tech.map((tech) => (
                        <li key={tech}>
                            <Chip>{tech}</Chip>
                        </li>
                    ))}
                </ul>

                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonStyles.primary} mt-8`}
                >
                    Abrir o site
                    <ExternalLink className="size-4" aria-hidden />
                </a>
            </div>
        </article>
    </Reveal>
)

const BrowserFrame = ({ project }: { project: Project }) => (
    <div className="relative lg:sticky lg:top-28">
        <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-violet/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink shadow-2xl shadow-black/50 transition duration-700 ease-out-expo group-hover:-translate-y-1.5 group-hover:-rotate-1">
            <div className="flex h-10 items-center gap-2 border-b border-line bg-surface-2 px-4">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="mx-auto flex min-w-0 items-center gap-1.5 truncate rounded-md bg-ink/80 px-3 py-1 text-xs text-muted">
                    <Lock className="size-3 shrink-0" aria-hidden />
                    {project.displayUrl}
                </span>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden>
                <img
                    src={project.image}
                    alt=""
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top"
                />
            </a>
        </div>
    </div>
)
