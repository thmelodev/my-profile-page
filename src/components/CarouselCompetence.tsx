import { useRef, useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Assets
import docker from '../assets/docker.webp';
import figma from '../assets/figma.webp';
import jenkins from '../assets/jenkins.webp';
import mongo from '../assets/mongo.webp';
import nest from '../assets/nest.svg';
import postgresql from '../assets/pg.webp';
import react from '../assets/react.webp';
import tailwind from '../assets/tailwind.webp';
import typescript from '../assets/typescript.webp';

const items = [
  { name: 'React JS', src: react },
  { name: 'Nest JS', src: nest },
  { name: 'Docker', src: docker },
  { name: 'Mongo DB', src: mongo },
  { name: 'PostgreSQL', src: postgresql },
  { name: 'Figma', src: figma },
  { name: 'Jenkins', src: jenkins },
  { name: 'Tailwind', src: tailwind },
  { name: 'TypeScript', src: typescript },
];

const extendedItems = [...items, ...items];

export const CarouselCompetences = () => {
  const autoplayRef = useRef(Autoplay({
    delay: 1000,
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  }));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplayRef.current]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      };
      emblaApi.on('select', onSelect);
      onSelect(); // Inicializa o slide atual
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <div className="max-w-screen w-[1200px]">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-label="Carrossel de competências"
      >
        <div className="flex gap-4">
          {extendedItems.map((img, i) => (
            <div
              className="flex-none min-w-[120px] flex flex-col items-center justify-center h-52 cursor-pointer"
              key={i}
              onClick={() => goToSlide(i)}
            >
              <Competence
                name={img.name}
                src={img.src}
                isActive={currentSlide === i}
              />
              {currentSlide === i && (
                <div className="absolute bottom-0 w-28 flex justify-center items-center">
                  <span className="text-center mt-4 text-white text-lg capitalize">
                    {img.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CompetenceProps {
  name: string;
  src: string;
  isActive: boolean;
}

const Competence = ({ name, src, isActive }: CompetenceProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-background rounded-3xl cursor-pointer transition-all duration-500 ${
        isActive ? 'opacity-100 w-28 h-28' : 'opacity-30 w-20 h-20'
      }`}
    >
      <img src={src} alt={name} className="w-auto h-auto max-h-[60%] max-w-[60%]" />
    </div>
  );
};