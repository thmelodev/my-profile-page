import { Copy, Download, Github, Linkedin } from 'lucide-react'
import { heroPhrases, profile } from '../../data/profile'
import { buttonStyles } from '../styles'
import { Orbit } from './Orbit'
import { RotatingText } from './RotatingText'

const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

export const Hero = ({ onCopyEmail }: { onCopyEmail: () => void }) => (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
        {/* Aurora roxa ao fundo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-48 left-[-15%] size-[40rem] animate-aurora rounded-full bg-violet-deep/40 blur-[120px]" />
            <div className="absolute top-1/3 right-[-20%] size-[34rem] animate-aurora-slow rounded-full bg-violet/25 blur-[120px]" />
            <div className="absolute bottom-[-25%] left-1/4 size-[28rem] animate-aurora rounded-full bg-fuchsia-500/10 blur-[120px]" />
            <div className="absolute inset-0 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:64px_64px] opacity-40 [mask-image:radial-gradient(ellipse_at_30%_40%,black_10%,transparent_65%)]" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
            <div>
                {profile.openToWork && (
                    <p
                        className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-live/30 bg-live/10 px-3.5 py-1.5 text-sm text-live"
                        style={delay(0)}
                    >
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-75" />
                            <span className="relative inline-flex size-2 rounded-full bg-live" />
                        </span>
                        Aberto a novas oportunidades
                    </p>
                )}

                <h1 className="mt-6 text-[clamp(4.25rem,17vw,8rem)] leading-[0.86] font-extrabold tracking-[-0.035em] [font-stretch:76%]">
                    {profile.name.split(' ').map((word, i) => (
                        <span key={word} className="block overflow-hidden pb-[0.08em]">
                            <span
                                className="block animate-rise bg-gradient-to-br from-white via-text to-lilac bg-clip-text text-transparent"
                                style={delay(120 + i * 120)}
                            >
                                {word}{' '}
                            </span>
                        </span>
                    ))}
                </h1>

                <div className="mt-6 animate-fade-up text-xl leading-snug md:text-2xl" style={delay(450)}>
                    <p>
                        {profile.role} na <span className="whitespace-nowrap">Megawork Consultoria.</span>
                    </p>
                    <RotatingText prefix="Construo" phrases={heroPhrases} />
                </div>

                <p className="mt-5 max-w-[54ch] animate-fade-up text-muted md:text-lg" style={delay(560)}>
                    Há mais de quatro anos construo sistemas que rodam em produção. Hoje conduzo de ponta a ponta a
                    aplicação que vai substituir o Microsoft Project Web App, com React, NestJS, SQL Server e .NET. Antes,
                    na <span className="whitespace-nowrap">Lojas Quero-Quero</span>, desenvolvi microsserviços do
                    e-commerce integrados à VTEX.
                </p>

                <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3" style={delay(680)}>
                    <a href={profile.cv} download={profile.cvFileName} className={buttonStyles.primary}>
                        <Download className="size-5" aria-hidden />
                        Baixar CV
                    </a>
                    <button type="button" onClick={onCopyEmail} className={buttonStyles.secondary}>
                        <Copy className="size-5" aria-hidden />
                        Copiar e-mail
                    </button>
                    <div className="flex gap-2">
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className={buttonStyles.icon}
                        >
                            <Linkedin className="size-5" aria-hidden />
                        </a>
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={buttonStyles.icon}
                        >
                            <Github className="size-5" aria-hidden />
                        </a>
                    </div>
                </div>
            </div>

            <Orbit />
        </div>
    </section>
)
