import { useEffect, useState } from 'react'

/** Foto redonda que vira em 3D ao trocar de imagem. */
export const RoundedImage = ({ src, alt }: { src: string; alt: string }) => {
    const [flipping, setFlipping] = useState(false)
    const [current, setCurrent] = useState({ src, alt })

    useEffect(() => {
        if (src === current.src) return

        let timer: ReturnType<typeof setTimeout>
        setFlipping(true)

        const img = new Image()
        img.src = src
        img.onload = () => {
            timer = setTimeout(() => {
                setCurrent({ src, alt })
                setFlipping(false)
            }, 200)
        }

        return () => {
            img.onload = null
            clearTimeout(timer)
        }
    }, [src, alt, current.src])

    return (
        <div className="perspective relative size-56 md:size-64">
            <div
                className={`transform-style-preserve-3d relative size-full rounded-full transition-transform duration-400 ease-[cubic-bezier(0.45,0,0.2,1)] ${
                    flipping ? '[transform:rotateY(90deg)]' : '[transform:rotateY(0deg)]'
                }`}
            >
                <div aria-hidden className="absolute inset-0 scale-90 rounded-full bg-violet blur-2xl" />
                <img
                    src={current.src}
                    alt={current.alt}
                    loading="lazy"
                    className="relative size-full rounded-full object-cover ring-2 ring-violet/70 ring-offset-4 ring-offset-ink"
                />
            </div>
        </div>
    )
}
