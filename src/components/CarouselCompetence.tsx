import { Competence } from './Competence'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Assets
import react from '../assets/react.png'
import nest from '../assets/nest.svg'
import docker from '../assets/docker.png'
import mongo from '../assets/mongo.png'
import figma from '../assets/figma.png'
import jenkins from '../assets/jenkins.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/typescript.png'
import postgresql from '../assets/pg.png'


export const CarouselCompetences = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef<Slider>(null)

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

    const handleBeforeChange = (_: number, next: number) => {
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
                    key={i}
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
