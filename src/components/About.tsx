import { CarouselPhotos } from './CarouselPhotos'
import { Reveal, Section } from './ui'

export const About = () => (
    <Section id="sobre" title="Além do código">
        <div className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-20">
            <Reveal className="justify-self-center">
                <CarouselPhotos />
            </Reveal>
            <Reveal delay={120} className="grid max-w-[60ch] gap-5 text-lg text-text/90">
                <p>
                    Acredito que bons projetos nascem de boas relações. Por isso levo a sério três coisas: dedicação,
                    honestidade e comunicação clara. Gosto de trabalhar com gente que soma, e é exatamente esse tipo de
                    parceiro que procuro ser para quem trabalha comigo.
                </p>
                <p>
                    Quando não estou na frente do código, provavelmente estou jogando, maratonando um anime, fazendo
                    carinho no Harry (um gatinho que eu adotei, mas que se acha o dono da casa) ou aproveitando a vida ao
                    lado de uma mulher incrível.
                </p>
            </Reveal>
        </div>
    </Section>
)
