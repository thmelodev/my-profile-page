import Icon from "./Icon";
import cat from '../../assets/cat.webp'
import kunai from '../../assets/kunai.webp'
import heart from '../../assets/heart.webp'

const CarouselIcons = ({ counterCarousel }: { counterCarousel: number }) => {


  return (
    <div className="flex gap-2 mt-5">
      <Icon src={kunai} alt="kunai" isActive={counterCarousel === 0} />
      <Icon src={heart} alt="heart" isActive={counterCarousel === 1} />
      <Icon src={cat} alt="cat" isActive={counterCarousel === 2} />
    </div>
  )
}

export default CarouselIcons;