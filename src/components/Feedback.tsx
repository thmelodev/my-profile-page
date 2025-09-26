export interface FeedbackProps {
    message: string;
    animationClass: string;
}

export const Feedback = ({ message, animationClass }: FeedbackProps) => {
    return (
        <div className={`text-white bg-black-contrast p-4 rounded-lg fixed top-24 right-8 drop-shadow-social-media-hover ${animationClass}`}>
            {message}
        </div>
    );
};
