import itachi from '../assets/itachi.webp'
import amor from '../assets/amor.webp'
import harry from '../assets/harry.webp'
import cat from '../assets/cat.webp'
import kunai from '../assets/kunai.webp'
import heart from '../assets/heart.webp'
import { useEffect, useState } from "react";
import { RoundedImage } from "./RoundedImage";


export const CarouselPhotos = () => {
    const [counterCarousel, setCounterCarousel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterCarousel((prev) => (prev + 1) % 3);
        }, 3100);

        return () => clearInterval(interval)
    }, [counterCarousel])

    const imageCarousel = () => {
        switch (counterCarousel) {
            case 0:
                return itachi
            case 1:
                return amor
            case 2:
                return harry
            default:
                setCounterCarousel(0)
                return itachi
        }
    }

    return (
            <div className="flex flex-col items-center justify-center min-h-[230px]">
                <RoundedImage src={imageCarousel()} />
                <div className="flex gap-2 mt-5">
                    <CarouselIcon src={kunai} alt="kunai" isActive={counterCarousel === 0} />
                    <CarouselIcon src={heart} alt="heart" isActive={counterCarousel === 1} />
                    <CarouselIcon src={cat} alt="cat" isActive={counterCarousel === 2} />
                </div>
            </div>
    )
}

interface CarouselIconProps {
    src: string;
    alt: string;
    isActive: boolean;
}

const CarouselIcon = ({src, alt, isActive}: CarouselIconProps) => {
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={`transition-all duration-300 ease-in-out ${isActive ? 'opacity-100 animate-bounce w-10 h-10' : 'opacity-50 w-8 h-8'}`}
            />
        </>
    )
}