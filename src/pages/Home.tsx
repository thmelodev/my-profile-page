import { useEffect, useState } from "react"
import { CarouselPhotos } from "../components/CarouselPhotos"
import { Feedback } from "../components/Feedback"
import { NavBar } from "../components/NavBar"
import { RoundedImage } from "../components/RoundedImage"
import { SocialMediaIcon } from "../components/SocialMediaIcon"
import { CarouselCompetences } from "../components/CarouselCompetence"
import { Timeline } from "../components/Timeline"
// Assets
import minhaFoto from '../assets/eu.webp'
import gmail from '../assets/gmail.webp'
import linkedin from '../assets/linkedin.webp'
import vite from '../assets/vite.svg'
import react from '../assets/react.webp'
import tailwind from '../assets/tailwind.webp'
import { TypedText } from "../components/TypedText"

export const Home = () => {
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackAnimation, setFeedbackAnimation] = useState("animate-slide-in-left");

    useEffect(() => {
        if (showFeedback) {
            setFeedbackAnimation("animate-slide-in-left");

            const bounceTimer = setTimeout(() => {
                setFeedbackAnimation("animate-bounce");
            }, 300);

            const mailtoTimer = setTimeout(() => {
                window.open("mailto:thiagomelo0509@gmail.com", "_blank");
            }, 1000);

            const slideOutTimer = setTimeout(() => {
                setFeedbackAnimation("animate-slide-out-right");
            }, 2500);

            const hideTimer = setTimeout(() => {
                setShowFeedback(false);
            }, 2800);

            return () => {
                clearTimeout(bounceTimer);
                clearTimeout(slideOutTimer);
                clearTimeout(hideTimer);
                clearTimeout(mailtoTimer);
            };
        }
    }, [showFeedback]);

    return (
        <>
            <header className="fixed top-0 left-0 w-screen z-10 ">
                <NavBar />
            </header>
            <main className="flex flex-col items-center justify-center min-h-screen min-w-screen max-w-screen pt-28 pb-2 bg-background relative overflow-x-hidden">
                <div id="sobre-mim" className="flex justify-center w-full"><span className="text-4xl text-white">Bem vindo!</span></div>
                <div className="flex flex-col w-full px-4">
                    <div className="flex w-full justify-between items-center mt-10 gap-5 h-[900px] md:h-[700px] xl:h-[600px] md:px-10 xl:px-28">
                        <div className="flex flex-col items-start justify-start gap-8 text-sm text-wrap h-full flex-1 text-white">
                            <TypedText
                                paragraphs={[
                                    { texts: [{ text: "Olá! Eu sou o", className: "text-white" }, { text: "Thiago", className: "text-main-purple text-xl font-bold" }] },
                                    { texts: [{ text: "Por aqui, você vai conhecer um pouco mais sobre mim. Sou um cara esforçado, honesto, cristão e de bem com a vida. Valorizo muito as relações sinceras, gosto de estar rodeado de boas energias e de gente que soma.", className: "text-white" }] },
                                    { texts: [{ text: "Sou Desenvolvedor de Software há 3 anos, apaixonado por tecnologia e sempre em busca de evolução — meu objetivo é crescer continuamente e entregar valor em cada projeto que faço parte.", className: "text-white" }] },
                                    { texts: [{ text: "No meu tempo livre, gosto de jogar, assistir animes e aproveitar momentos com a minha família — são esses pequenos detalhes que fazem a vida valer a pena, né?", className: "text-white" }] },
                                    { texts: [{ text: "Ah, e não posso esquecer do meu companheiro de quatro patas: Harry, um gatinho que adotei e que já virou parte da família.", className: "text-white" }] },
                                    { texts: [{ text: "Criei esse espaço para compartilhar mais sobre mim e, quem sabe, trocar ideias e conhecer novas pessoas.", className: "text-white" }] },
                                    { texts: [{ text: "Fique à vontade!", className: "text-white" }] }
                                ]}
                                speed={4}
                            />

                        </div>
                        <div className="flex flex-col items-center justify-evenly md:justify-start md:pt-5 md:gap-10 xl:gap-5 h-full">
                            <RoundedImage src={minhaFoto} />
                            <CarouselPhotos />
                            <SocialMediaIcon
                                img={<img src={gmail} alt="gmail" className="w-8 h-6" />}
                                link="mailto:thiagomelo0509@gmail.com"
                                onClick={() => {
                                    if (!showFeedback) {
                                        setShowFeedback(true);
                                        navigator.clipboard.writeText("thiagomelo0509@gmail.com");
                                    }

                                }}
                                className="md:hidden"
                            />

                            <SocialMediaIcon
                                img={<img src={linkedin} alt="linkedin" className="w-8 h-8" />}
                                link="https://www.linkedin.com/in/thmelodev/"
                                className="md:hidden"
                            />
                        </div>
                    </div>
                    <div className="hidden md:flex w-full justify-center gap-10">
                        <SocialMediaIcon
                            img={<img src={gmail} alt="gmail" className="w-8 h-6" />}
                            link="mailto:thiagomelo0509@gmail.com"
                            onClick={() => {
                                if (!showFeedback) {
                                    setShowFeedback(true);
                                    navigator.clipboard.writeText("thiagomelo0509@gmail.com");
                                }
                            }}
                        />

                        <SocialMediaIcon
                            img={<img src={linkedin} alt="linkedin" className="w-8 h-8" />}
                            link="https://www.linkedin.com/in/thmelodev/"
                        />
                    </div>
                </div>
                <div id="competencias" className="w-screen overflow-hidden h-[400px] xl:h-[600px] bg-[linear-gradient(to_bottom,#1D1D1D_0%,#34244E_54%,#1D1D1D_100%)] mt-10 flex flex-col justify-center items-center gap-10 xl:gap-20">
                    <span className="text-3xl text-white">Competências</span>
                    <CarouselCompetences />
                </div>
                <div id="experiencia-profissional" className="w-full mt-20 flex flex-col items-center justify-center gap-5">
                    <span className="text-3xl mb-5 xl:mb-28 2xl:mb-28 text-white">Experiência Profissional</span>
                    <Timeline />
                </div>
                {showFeedback && (
                    <Feedback message="Email copiado" animationClass={feedbackAnimation} />
                )}
            </main>
            <footer className="w-screen flex items-center justify-between p-4 border-t-2 xl:border-t-4 border-main-purple">
                <span className="text-xs xl:text-sm">2025 © Thiago Melo de Assis Pereira</span>
                <div className="flex gap-4 items-center">
                    <img src={vite} alt="Vite" className="w-auto h-5 xl:h-7" />
                    <img src={react} alt="React" className="w-auto h-5 xl:h-7" />
                    <img src={tailwind} alt="Tailwind CSS" className="w-auto h-5 xl:h-7" />
                </div>
            </footer>
        </>
    )
}