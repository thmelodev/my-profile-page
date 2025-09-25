export const RoundedImage = ({ src }: { src: string }) => {
    return (
        <div
            className="w-36 h-36 rounded-full border-4 border-main-purple bg-center bg-cover"
            style={{ backgroundImage: `url(${src})` }}
        />
    )
}