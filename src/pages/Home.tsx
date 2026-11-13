import { useCallback, useEffect, useRef, useState } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'
import { Projects } from '../components/Projects'
import { Stack } from '../components/Stack'
import { Toast, type ToastMessage } from '../components/Toast'
import { profile } from '../data/profile'

export const Home = () => {
    const [toast, setToast] = useState<ToastMessage | null>(null)
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

    useEffect(() => () => clearTimeout(timer.current), [])

    const showToast = useCallback((text: string) => {
        clearTimeout(timer.current)
        setToast({ id: Date.now(), text })
        timer.current = setTimeout(() => setToast(null), 2600)
    }, [])

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(profile.email)
            showToast('E-mail copiado')
        } catch {
            // Sem acesso à área de transferência (ex.: http sem TLS): abre o app de e-mail.
            window.location.href = `mailto:${profile.email}`
        }
    }, [showToast])

    return (
        <>
            <a
                href="#conteudo"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
            >
                Pular para o conteúdo
            </a>
            <NavBar />
            <main id="conteudo">
                <Hero onCopyEmail={copyEmail} />
                <Experience />
                <Stack />
                <Projects />
                <About />
                <Contact onCopyEmail={copyEmail} />
            </main>
            <footer className="border-t border-line">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
                    <p>
                        © {new Date().getFullYear()} {profile.fullName}
                    </p>
                    <p>
                        Feito com React, Vite e Tailwind CSS.{' '}
                        <a
                            href={profile.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lilac underline-offset-4 hover:underline"
                        >
                            Ver o código
                        </a>
                    </p>
                </div>
            </footer>
            <Toast message={toast} />
        </>
    )
}
