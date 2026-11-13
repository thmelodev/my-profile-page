type IconProps = {
    src: string
    label: string
    isActive: boolean
    onClick: () => void
}

const Icon = ({ src, label, isActive, onClick }: IconProps) => (
    <button
        type="button"
        onClick={onClick}
        aria-label={label}
        aria-pressed={isActive}
        className="rounded-lg bg-transparent p-1"
    >
        <img
            src={src}
            alt=""
            className={`transition-all duration-300 ease-in-out ${
                isActive ? 'size-10 animate-bounce opacity-100' : 'size-8 opacity-50 hover:opacity-80'
            }`}
        />
    </button>
)

export default Icon
