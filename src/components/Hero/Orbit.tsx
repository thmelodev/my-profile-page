import type { CSSProperties } from 'react'
import photo from '../../assets/eu.webp'
import { orbitLogos, profile } from '../../data/profile'

/** Foto no centro com a stack girando em volta. Pausa quando o mouse passa por cima. */
export const Orbit = () => {
    const step = 360 / orbitLogos.length

    return (
        <div
            className="group relative mx-auto aspect-square w-[var(--size)] animate-fade-up [--r:calc(var(--size)*0.41)] [--size:min(30rem,88vw)]"
            style={{ animationDelay: '250ms' }}
        >
            {/* Trilhos da órbita */}
            <div aria-hidden className="absolute inset-[9%] rounded-full border border-line/80" />
            <div aria-hidden className="absolute inset-[19%] rounded-full border border-dashed border-line/50" />

            {/* Foto */}
            <div aria-hidden className="absolute inset-[24%] rounded-full bg-violet/60 blur-3xl" />
            <img
                src={photo}
                alt={`Foto de ${profile.name}`}
                width={480}
                height={480}
                fetchPriority="high"
                className="absolute inset-[25%] size-1/2 rounded-full object-cover ring-2 ring-violet/70 ring-offset-4 ring-offset-ink"
            />

            {/* Logos */}
            <div
                aria-hidden
                className="absolute inset-0 animate-orbit group-hover:[animation-play-state:paused]"
            >
                {orbitLogos.map((logo, i) => {
                    const angle = i * step - 90
                    const style: CSSProperties = {
                        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(var(--r)) rotate(${-angle}deg)`,
                    }
                    return (
                        <div key={logo.name} className="absolute top-1/2 left-1/2" style={style}>
                            <div className="group/logo relative animate-orbit-reverse group-hover:[animation-play-state:paused]">
                                <div className="grid size-12 place-items-center rounded-2xl border border-line bg-surface/90 p-2.5 shadow-lg shadow-black/30 backdrop-blur transition duration-300 group-hover/logo:scale-110 group-hover/logo:border-violet sm:size-14 sm:p-3">
                                    <img
                                        src={logo.src}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="size-full object-contain"
                                    />
                                </div>
                                <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-surface-2 px-2 py-0.5 text-xs whitespace-nowrap text-text opacity-0 transition group-hover/logo:opacity-100">
                                    {logo.name}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
