import cat from '../../assets/cat.webp'
import heart from '../../assets/heart.webp'
import kunai from '../../assets/kunai.webp'
import Icon from './Icon'

const icons = [
    { src: kunai, label: 'Mostrar foto do Itachi' },
    { src: heart, label: 'Mostrar selfie com o meu amor' },
    { src: cat, label: 'Mostrar foto do Harry' },
]

type CarouselIconsProps = {
    active: number
    onSelect: (index: number) => void
}

const CarouselIcons = ({ active, onSelect }: CarouselIconsProps) => (
    <div className="mt-6 flex h-12 items-end gap-3">
        {icons.map((icon, i) => (
            <Icon key={icon.label} {...icon} isActive={active === i} onClick={() => onSelect(i)} />
        ))}
    </div>
)

export default CarouselIcons
