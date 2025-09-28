import { Competence } from './Competence'
// Assets
import react from '../assets/react.png'
import nest from '../assets/nest.svg'
import docker from '../assets/docker.png'
import mongo from '../assets/mongo.png'
import figma from '../assets/figma.png'
import jenkins from '../assets/jenkins.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const CarouselCompetences = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef<Slider>(null)

    const items = [
        { id: 1, name: "React JS", src: react },
        { id: 2, name: "Nest JS", src: nest },
        { id: 3, name: "Docker", src: docker },
        { id: 4, name: "Mongo DB", src: mongo },
        { id: 5, name: "Figma", src: figma },
        { id: 6, name: "Jenkins", src: jenkins },
        { id: 7, name: "Tailwind", src: tailwind },
        { id: 8, name: "TypeScript", src: typescript },
    ]

    const handleBeforeChange = (current: number, next: number) => {
        setCurrentSlide(next)
    }

    const settings = {
        className: 'slider variable-width',
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        beforeChange: handleBeforeChange,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext()
            }
        }, 2500);

        return () => clearInterval(interval);
    }, [])

    return (
        <Slider ref={sliderRef} {...settings}>
            {items.map((img, i) => (
                <div
                    className={`flex flex-col items-center transition-all duration-500 mx-[1.5vw] `}
                    key={img.id}
                >
                    <Competence name={img.name} src={img.src} isActive={currentSlide === i} />
                    {currentSlide === i && (
                        <div className='flex justify-center items-center w-28'>
                            <span className="text-center mt-4 text-white text-lg capitalize">{img.name}</span>
                        </div>
                    )}
                </div>
            ))}
        </Slider>
    )
}
