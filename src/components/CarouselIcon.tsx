interface CarouselIconProps {
    src: string;
    alt: string;
    isActive: boolean;
}

export const CarouselIcon = ({src, alt, isActive}: CarouselIconProps) => {
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