import itachi from '../assets/itachi.gif'
import amor from '../assets/amor.png'
import harry from '../assets/harry.png'
import cat from '../assets/cat.png'
import kunai from '../assets/kunai.png'
import heart from '../assets/heart.png'
import { useEffect, useState } from "react";
import { RoundedImage } from "./RoundedImage";
import { CarouselIcon } from "./CarouselIcon";


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