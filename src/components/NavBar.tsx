import { Download, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection, useScrollProgress } from '../hooks/useScroll'

const links = [
    { id: 'experiencia', label: 'Experiência' },
    { id: 'stack', label: 'Stack' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
]

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const progress = useScrollProgress()
    const active = useActiveSection(links.map((l) => l.id))
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!isOpen) return

        const close = () => setIsOpen(false)
        const onPointerDown = (event: PointerEvent) => {
            const target = event.target as Node
            if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) close()
        }
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                close()
                buttonRef.current?.focus()
            }
        }

        document.addEventListener('pointerdown', onPointerDown)
        document.addEventListener('keydown', onKeyDown)
        window.addEventListener('scroll', close, { passive: true })
        return () => {
            document.removeEventListener('pointerdown', onPointerDown)
            document.removeEventListener('keydown', onKeyDown)
            window.removeEventListener('scroll', close)
        }
    }, [isOpen])

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <div
                aria-hidden
                className="h-0.5 origin-left bg-gradient-to-r from-violet-deep via-violet to-lilac"
                style={{ transform: `scaleX(${progress})` }}
            />
            <nav
                aria-label="Principal"
                className="relative mx-3 mt-2 flex h-14 items-center justify-between rounded-2xl border border-line/70 bg-ink/75 px-3 backdrop-blur-md sm:mx-auto sm:max-w-6xl sm:px-4"
            >
                <a
                    href="#inicio"
                    className="flex items-center gap-2.5 font-semibold text-text"
                    aria-label="Thiago Melo, voltar ao início"
                >
                    <span className="grid size-8 place-items-center rounded-lg bg-violet text-sm font-bold tracking-tight text-white">
                        TM
                    </span>
                    <span className="hidden sm:inline">{profile.name}</span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {links.map((link) => {
                        const isActive = active === link.id
                        return (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    aria-current={isActive ? 'true' : undefined}
                                    className={`relative rounded-full px-3.5 py-1.5 text-[15px] transition-colors duration-300 ${
                                        isActive ? 'bg-violet/15 text-white' : 'text-muted hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    <a
                        href={profile.cv}
                        download={profile.cvFileName}
                        className="hidden items-center gap-2 rounded-full bg-violet px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-deep sm:inline-flex"
                    >
                        <Download className="size-4" aria-hidden />
                        Baixar CV
                    </a>
                    <button
                        ref={buttonRef}
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="menu-mobile"
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        className="grid size-10 place-items-center rounded-xl text-text transition hover:bg-surface-2 md:hidden"
                    >
                        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {isOpen && (
                    <div
                        ref={menuRef}
                        id="menu-mobile"
                        className="absolute inset-x-0 top-[calc(100%+0.5rem)] animate-toast-in rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/40 md:hidden"
                    >
                        <ul className="flex flex-col">
                            {links.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={() => setIsOpen(false)}
                                        className={`block rounded-xl px-4 py-3 text-lg ${
                                            active === link.id ? 'bg-violet/15 text-white' : 'text-text'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={profile.cv}
                            download={profile.cvFileName}
                            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-violet px-4 py-3 font-semibold text-white"
                        >
                            <Download className="size-4" aria-hidden />
                            Baixar CV
                        </a>
                    </div>
                )}
            </nav>
        </header>
    )
}
