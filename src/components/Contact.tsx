import { Copy, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { buttonStyles } from './styles'
import { Reveal } from './ui'

export const Contact = ({ onCopyEmail }: { onCopyEmail: () => void }) => (
    <section id="contato" aria-labelledby="contato-title" className="relative isolate scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-2 via-surface to-ink p-7 sm:p-10 md:p-16">
                <div
                    aria-hidden
                    className="absolute -top-32 -right-24 -z-10 size-[28rem] animate-aurora rounded-full bg-violet/30 blur-[110px]"
                />

                <h2
                    id="contato-title"
                    className="text-5xl leading-[0.95] font-extrabold tracking-tight [font-stretch:80%] md:text-7xl"
                >
                    Vamos conversar?
                </h2>
                <p className="mt-5 max-w-[52ch] text-lg text-muted">
                    {profile.openToWork
                        ? 'Estou aberto a novas oportunidades como desenvolvedor de software. E-mail e LinkedIn são os jeitos mais rápidos de falar comigo.'
                        : 'Para falar de um projeto, de uma vaga ou só trocar uma ideia sobre tecnologia, me chame por e-mail ou LinkedIn.'}
                </p>

                <button
                    type="button"
                    onClick={onCopyEmail}
                    aria-label={`Copiar e-mail ${profile.email}`}
                    className="group mt-10 inline-flex max-w-full items-center gap-4 text-left text-[clamp(1.2rem,4.6vw,2.6rem)] leading-tight font-bold tracking-tight transition-colors hover:text-lilac"
                >
                    <span>
                        {/* Se precisar quebrar no celular, quebra antes do @ e não no meio do domínio */}
                        {profile.email.split('@')[0]}
                        <wbr />@{profile.email.split('@')[1]}
                    </span>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-muted transition group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                        <Copy className="size-5" aria-hidden />
                    </span>
                </button>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a href={`mailto:${profile.email}`} className={buttonStyles.primary}>
                        <Mail className="size-5" aria-hidden />
                        Enviar e-mail
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                        <Linkedin className="size-5" aria-hidden />
                        LinkedIn
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                        <Github className="size-5" aria-hidden />
                        GitHub
                    </a>
                    <a href={profile.cv} download={profile.cvFileName} className={buttonStyles.secondary}>
                        <Download className="size-5" aria-hidden />
                        Baixar CV
                    </a>
                </div>
            </Reveal>
        </div>
    </section>
)
