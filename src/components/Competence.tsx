
export interface CompetenceProps {
    name: string;
    src: string;
    isActive: boolean;
}

export const Competence = ({ name, src, isActive }: CompetenceProps) => {
    return (
        <div className={`flex items-center justify-center bg-background rounded-3xl w-28 h-28 ${isActive ? 'opacity-100' : 'opacity-30 scale-75'}`}>
            <img src={src} alt={name} className={`w-auto h-auto max-h-3/5 max-w-3/5`} />
        </div>
    )

}