import { useState, useEffect } from "react";

interface ParagraphProps {
  texts: { text: string; className?: string }[];
}

interface TypedTextProps {
  paragraphs: ParagraphProps[];
  speed?: number;
}

export const TypedText = ({ paragraphs, speed = 30 }: TypedTextProps) => {
    const [displayedParagraphs, setDisplayedParagraphs] = useState<ParagraphProps[]>([]);
    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCharIndex((prev) => prev + 1);
        }, speed);

        return () => clearInterval(interval);
    }, [speed]);

    useEffect(() => {
        if (currentParagraphIndex < paragraphs.length) {
            const currentParagraph = paragraphs[currentParagraphIndex];
            if (currentTextIndex < currentParagraph.texts.length) {
                const currentText = currentParagraph.texts[currentTextIndex];
                if (currentCharIndex <= currentText.text.length) {
                    const updatedParagraphs = [...displayedParagraphs];
                    if (!updatedParagraphs[currentParagraphIndex]) {
                        updatedParagraphs[currentParagraphIndex] = { texts: [] };
                    }
                    updatedParagraphs[currentParagraphIndex].texts[currentTextIndex] = {
                        text: currentText.text.slice(0, currentCharIndex),
                        className: currentText.className,
                    };
                    setDisplayedParagraphs(updatedParagraphs);
                }else{
                    setCurrentCharIndex(0);
                    setCurrentTextIndex((prev) => prev + 1);
                }
            } else{
                setCurrentCharIndex(0);
                setCurrentTextIndex(0);
                setCurrentParagraphIndex((prev) => prev + 1);
            }
        } 

    }, [currentParagraphIndex, currentTextIndex, currentCharIndex, paragraphs, speed, displayedParagraphs]);


    return (
        <div className="flex flex-col gap-8 xl:max-w-[800px] 2xl:max-w-[1200px]">
            {displayedParagraphs.map((paragraph, pIndex) => {
                return (
                    <div key={pIndex} className="flex items-center gap-2">
                        {paragraph.texts.map((text, tIndex) => {
                            return (
                                <p key={tIndex} className={text.className}>
                                    {text.text}
                                </p>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )

};
