import itachi from '../assets/itachi.webp'
import amor from '../assets/amor.webp'
import harry from '../assets/harry.webp'
import { useEffect, useState } from "react";
import { RoundedImage } from "./RoundedImage";
import CarouselIcons from './CarouselIcons'


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
                <CarouselIcons counterCarousel={counterCarousel} />
            </div>
    )
}

