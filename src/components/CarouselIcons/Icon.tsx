type IconProps = {
    src: string
    label: string
    isActive: boolean
    onClick: () => void
}

// O tamanho muda com `scale` (transform), não com width/height: assim a animação roda na GPU
// e não força o navegador a recalcular o layout a cada quadro.
const Icon = ({ src, label, isActive, onClick }: IconProps) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={isActive}
        className={`rounded-lg bg-transparent p-1 transition-[transform,opacity] duration-300 ease-in-out ${
            isActive ? 'scale-100 opacity-100' : 'scale-80 opacity-50 hover:opacity-80'
        }`}
    >
        <img src={src} alt="" width={40} height={40} className={`size-10 ${isActive ? 'animate-bounce' : ''}`} />
    </button>
)

export default Icon
