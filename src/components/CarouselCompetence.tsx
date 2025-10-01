import { useEffect, useRef, useState } from 'react'
// Assets
import docker from '../assets/docker.webp'
import figma from '../assets/figma.webp'
import jenkins from '../assets/jenkins.webp'
import mongo from '../assets/mongo.webp'
import nest from '../assets/nest.svg'
import postgresql from '../assets/pg.webp'
import react from '../assets/react.webp'
import tailwind from '../assets/tailwind.webp'
import typescript from '../assets/typescript.webp'


export const CarouselCompetences = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);

    const items = [
        { name: "React JS", src: react },
        { name: "Nest JS", src: nest },
        { name: "Docker", src: docker },
        { name: "Mongo DB", src: mongo },
        { name: "PostgreSQL", src: postgresql },
        { name: "Figma", src: figma },
        { name: "Jenkins", src: jenkins },
        { name: "Tailwind", src: tailwind },
        { name: "TypeScript", src: typescript },
    ]
    const extendedItems = [...items, ...items, ...items];

    const goToSlide = (index: number) => {
        if (!containerRef.current) return
        const container = containerRef.current
        const children = container.children
        const el = children[index] as HTMLElement
        if (el) {
            const containerCenter = container.offsetWidth / 2
            const elCenter = el.offsetLeft + el.offsetWidth / 2
            container.scrollTo({
                left: elCenter - containerCenter,
                behavior: 'instant'
            })
            setCurrentSlide(index)
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) goToSlide(currentSlide + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [isPaused, currentSlide]);

    useEffect(() => {
        if (!containerRef.current) return;

        if (currentSlide < items.length) {
            const newIndex = currentSlide + items.length;
            goToSlide(newIndex);
        } else if (currentSlide >= items.length * 2) {
            const newIndex = currentSlide - items.length;
            goToSlide(newIndex);
        }
    }, [currentSlide, items.length]);

    useEffect(() => {
        if (!containerRef.current) return;
        goToSlide(items.length);
    }, [items.length]);


    return (
        <div ref={containerRef} className='flex items-center relative pl-20 max-w-screen overflow-x-scroll no-scrollbar touch-none'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {extendedItems.map((img, i) => (
                <div
                    className={`flex flex-col items-center justify-center transition-all duration-500 h-52 min-w-30`}
                    key={i}
                    onClick={() => goToSlide(i)}
                >
                    <Competence name={img.name} src={img.src} isActive={currentSlide === i} />
                    {currentSlide === i && (
                        <div className='flex justify-center items-center absolute -bottom-0 w-28'>
                            <span className="text-center mt-4 text-white text-lg capitalize">{img.name}</span>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}


interface CompetenceProps {
    name: string;
    src: string;
    isActive: boolean;
}

const Competence = ({ name, src, isActive }: CompetenceProps) => {
    return (
        <div className={`flex items-center justify-center bg-background rounded-3xl ${isActive ? 'opacity-100 w-28 h-28 ' : 'opacity-30 w-20 h-20'}`}>
            <img src={src} alt={name} className={`w-auto h-auto max-h-3/5 max-w-3/5`} />
        </div>
    )

}
