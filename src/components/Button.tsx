interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

export const Button = ({ label, className }: ButtonProps) => {
    return (
        <div  className={`text-white text-base md:text-xl cursor-pointer flex items-center justify-center p-3.5  bg-main-purple rounded-lg transition-all duration-300 ease-in-out hover:drop-shadow-hover-glow hover:scale-105 hover:bg-secondary-purple ${className}`}>
            {label}
        </div>
    );
};
