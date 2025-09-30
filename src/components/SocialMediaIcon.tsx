interface SocialMediaIconProps {
    img: React.ReactNode;
    link: string;
    onClick?: () => void;
    className?: string;
}

export const SocialMediaIcon = ({ img, link, onClick, className }: SocialMediaIconProps) => {
    return (
        <>
            {onClick ? (
                <div className={`cursor-pointer flex items-center justify-center p-2 w-20 h-20 bg-black-contrast drop-shadow-social-media rounded-lg transition-all duration-300 ease-in-out hover:drop-shadow-hover-glow hover:scale-105 hover:bg-[#2D2D2D] ${className}`} onClick={onClick}>
                    {img}
                </div>
            ) : (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className={`cursor-pointer flex items-center justify-center p-2 w-20 h-20 bg-black-contrast drop-shadow-social-media rounded-lg transition-all duration-300 ease-in-out hover:drop-shadow-hover-glow hover:scale-105 hover:bg-[#2D2D2D] ${className}`}>
                        {img}
                    </div>
                </a>
            )}
        </>

    );
};
