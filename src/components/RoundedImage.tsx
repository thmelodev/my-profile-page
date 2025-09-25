import { useEffect, useState } from 'react';

export const RoundedImage = ({ src }: { src: string }) => {
  const [flipping, setFlipping] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (src !== currentSrc) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setCurrentSrc(src);
        setFlipping(false);
      }, 200); // mais rápido: troca em 150ms

      return () => clearTimeout(timeout);
    }
  }, [src, currentSrc]);

  return (
    <div className="relative w-36 h-36 perspective">
      {/* Card que gira inteiro */}
      <div
        className={`relative w-full h-full rounded-full transition-transform duration-400 ease-[cubic-bezier(0.45,0,0.2,1)] transform-style-preserve-3d ${
          flipping ? 'rotate-y-90' : 'rotate-y-0'
        }`}
      >
        {/* Fundo roxo com blur */}
        <div className="absolute inset-0 rounded-full bg-main-purple blur-lg scale-90 z-0" />

        {/* Imagem principal */}
        <div
          className="absolute inset-0 rounded-full bg-center bg-cover z-10"
          style={{ backgroundImage: `url(${currentSrc})` }}
        />
      </div>
    </div>
  );
};
