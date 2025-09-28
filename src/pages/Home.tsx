import { useEffect, useState } from "react"
import { CarouselPhotos } from "../components/CarouselPhotos"
import { Feedback } from "../components/Feedback"
import { NavBar } from "../components/NavBar"
import { RoundedImage } from "../components/RoundedImage"
import { SocialMediaIcon } from "../components/SocialMediaIcon"
// Assets
import minhaFoto from '../assets/eu.jpg'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'
import { CarouselCompetences } from "../components/CarouselCompetence"

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
            <header className="fixed top-0 left-0 w-full z-10">
                <NavBar />
            </header>
            <main className="flex flex-col items-center justify-start min-h-screen min-w-screen max-w-screen py-28 bg-background text- relative overflow-x-hidden">
                <div className="flex justify-center w-full"><span className="text-4xl">Bem vindo!</span></div>
                <div className="flex flex-col w-screen max-w-screen px-4">
                    <div className="flex w-full justify-between mt-10 gap-5">
                        <div className="flex flex-col items-start justify-start gap-5 text-sm">
                            <span className="text-white">Olá! Eu sou o <span className="text-main-purple text-xl font-bold">Thiago</span></span>
                            <p>Por aqui, você vai conhecer um pouco mais sobre mim. Sou uma pessoa esforçada, honesta e de bem com a vida. Valorizo muito as relações sinceras, gosto de estar rodeado de boas energias e de gente que soma.</p>
                            <p>No meu tempo livre, gosto de jogar, assistir animes e aproveitar momentos com a minha família — são esses pequenos detalhes que fazem a vida valer a pena, né? </p>
                            <p>Ah, e não posso esquecer do meu companheiro de quatro patas: Harry, um gatinho que adotei e que já virou parte da família.</p>
                            <p>Criei esse espaço para compartilhar mais sobre mim e, quem sabe, trocar ideias e conhecer novas pessoas. </p>
                            <p>Fique à vontade!</p>
                        </div>
                        <div className="pt-10 flex flex-col items-center justify-start gap-10">
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
                            />

                            <SocialMediaIcon
                                img={<img src={linkedin} alt="linkedin" className="w-8 h-8" />}
                                link="https://www.linkedin.com/in/thmelodev/"
                            />
                        </div>
                    </div>
                </div>
                <div className="max-w-screen h-[600px] bg-[linear-gradient(to_bottom,#1D1D1D_0%,#34244E_54%,#1D1D1D_100%)] mt-20 flex justify-center items-center overflow-hidden">
                    <CarouselCompetences />
                </div>
                {showFeedback && (
                    <Feedback message="Email copiado" animationClass={feedbackAnimation} />
                )}
            </main>
        </>
    )
}