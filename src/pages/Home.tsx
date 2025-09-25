import { NavBar } from "../components/NavBar"
import minhaFoto from '../assets/eu.jpg'
import { RoundedImage } from "../components/RoundedImage"

export const Home = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-10">
                <NavBar />
            </header>
            <main className="flex flex-col items-center justify-start min-h-screen min-w-screen pt-28 px-4 bg-background text-white">
                <div className="flex justify-center w-full"><span className="text-4xl">Bem vindo!</span></div>
                <div className="flex w-full justify-between mt-10 gap-5">
                    <div className="flex flex-col items-start justify-start gap-5 text-sm">
                        <span className="text-white">Olá! Eu sou o <span className="text-main-purple text-xl font-bold">Thiago</span></span>
                        <p>Por aqui, você vai conhecer um pouco mais sobre mim. Sou uma pessoa esforçada, honesta e de bem com a vida. Valorizo muito as relações sinceras, gosto de estar rodeado de boas energias e de gente que soma.</p>
                        <p>No meu tempo livre, gosto de jogar, assistir animes e aproveitar momentos com a minha família — são esses pequenos detalhes que fazem a vida valer a pena, né? </p>
                        <p>Ah, e não posso esquecer do meu companheiro de quatro patas: Harry, um gatinho que adotei e que já virou parte da família.</p>
                        <p>Criei esse espaço para compartilhar mais sobre mim e, quem sabe, trocar ideias e conhecer novas pessoas. </p>
                        <p>Fique à vontade!</p>
                    </div>
                    <div className="pt-10 flex flex-col items-center justify-start gap-5">
                        <RoundedImage src={minhaFoto} />

                        <RoundedImage src={minhaFoto} />

                    </div>

                </div>

            </main>
        </>
    )
}