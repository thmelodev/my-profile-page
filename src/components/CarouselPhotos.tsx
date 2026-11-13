import amor from '../assets/amor.webp'
import harry from '../assets/harry.webp'
import itachi from '../assets/itachi.webp'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CarouselIcons from './CarouselIcons'
import { RoundedImage } from './RoundedImage'

const photos = [
    { src: itachi, alt: 'Itachi, de Naruto' },
    { src: amor, alt: 'Selfie com o meu amor' },
    { src: harry, alt: 'Harry, meu gato' },
]

export const CarouselPhotos = () => {
    const [index, setIndex] = useState(0)
    const reducedMotion = useReducedMotion()

    useEffect(() => {
        if (reducedMotion) return
        const interval = setInterval(() => setIndex((i) => (i + 1) % photos.length), 3100)
        return () => clearInterval(interval)
    }, [reducedMotion])

    return (
        <div className="flex flex-col items-center">
            <RoundedImage src={photos[index].src} alt={photos[index].alt} />
            <CarouselIcons active={index} onSelect={setIndex} />
        </div>
    )
}
