import { useState, useEffect } from "react";

interface ParagraphProps {
  texts: { text: string; className?: string }[];
}

interface TypedTextProps {
  paragraphs: ParagraphProps[];
  speed?: number;
}

export const TypedText = ({ paragraphs, speed = 30 }: TypedTextProps) => {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentParagraphIndex >= paragraphs.length) return;

    const timeout = setTimeout(() => {
      const currentText = paragraphs[currentParagraphIndex].texts[currentTextIndex].text;

      if (currentCharIndex < currentText.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else if (currentTextIndex < paragraphs[currentParagraphIndex].texts.length - 1) {
        setCurrentCharIndex(0);
        setCurrentTextIndex((prev) => prev + 1);
      } else {
        setCurrentCharIndex(0);
        setCurrentTextIndex(0);
        setCurrentParagraphIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentParagraphIndex, currentTextIndex, paragraphs, speed]);

  return (
    <div className="flex flex-col gap-8 xl:max-w-[800px] 2xl:max-w-[1200px]">
      {paragraphs.map((paragraph, pIndex) => (
        <div key={pIndex} className="flex items-center gap-2">
          {paragraph.texts.map((text, tIndex) => {
            const isActive = pIndex === currentParagraphIndex && tIndex === currentTextIndex;
            const visibleText =
              pIndex < currentParagraphIndex ||
              (pIndex === currentParagraphIndex && tIndex < currentTextIndex)
                ? text.text
                : isActive
                ? text.text.slice(0, currentCharIndex)
                : "";

            return (
              <p key={tIndex} className={text.className}>
                {visibleText}
              </p>
            );
          })}
        </div>
      ))}
    </div>
  );
};
