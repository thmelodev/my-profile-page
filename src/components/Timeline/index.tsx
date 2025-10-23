import queroquero from '../../assets/quero-quero.webp';
import DescriptionJob from './DescriptionJob';
import Job from './Job';

export const Timeline = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full lg:gap-20">
            <div className="flex justify-center items-center md:items-start gap-5">
                <Job
                    company="LOJAS QUERO-QUERO"
                    date="OUT/23 - ATUAL"
                    img={queroquero}
                    isFirst={true}
                />
                <DescriptionJob
                    title="Desenvolvedor de Software"
                    responsabilities={[
                        "Atuo como Desenvolvedor de Software nas Lojas Quero-Quero, onde participei do desenvolvimento de projetos para o e-commerce, incluindo um integrador de preço com a VTEX em Golang.",
                        "Participei da migração da plataforma Wevo para sistemas próprios da empresa, contribuindo em diversos projetos relevantes.",
                        "Além disso, trabalho na sustentação, focando na análise profunda de sistemas, correção de bugs e resolução de problemas em contato com a área de negócio."

                    ]}
                    className='hidden lg:flex'
                />
            </div>
            <DescriptionJob
                title="Desenvolvedor de Software"
                responsabilities={[
                    "Atuo como Desenvolvedor de Software nas Lojas Quero-Quero, onde participei do desenvolvimento de projetos para o e-commerce, incluindo um integrador de preço com a VTEX em Golang.",
                    "Participei da migração da plataforma Wevo para sistemas próprios da empresa, contribuindo em diversos projetos relevantes.",
                    "Além disso, trabalho na sustentação, focando na análise profunda de sistemas, correção de bugs e resolução de problemas em contato com a área de negócio."

                ]}
                className='lg:hidden'
            />
            <div className="flex justify-center  items-center md:items-start gap-5">
                <Job
                    company="LOJAS QUERO-QUERO"
                    date="FEV/23 - OUT/23"
                    img={queroquero}
                    isFirst={false}
                />
                <DescriptionJob
                title="Estagiário de Desenvolvimento"
                responsabilities={[
                    "Iniciei minha trajetória na área de tecnologia como estagiário de desenvolvimento de software nas Lojas Quero-Quero.",
                    "Participei de um programa intensivo de capacitação de três meses e desenvolvi um projeto prático, consolidando conhecimentos adquiridos.",
                    "Fui integrado a uma equipe de desenvolvimento após aprovação, atuando em um projeto mobile com Flutter.",
                    "Desenvolvi uma solução para visitas técnicas, permitindo visualização de trajetos, registro de atividades, captura de fotos e geração de evidências para auditoria."
                ]}
                className='hidden lg:flex'
            />
            </div>
            <DescriptionJob
                title="Estagiário de Desenvolvimento"
                responsabilities={[
                    "Iniciei minha trajetória na área de tecnologia como estagiário de desenvolvimento de software nas Lojas Quero-Quero.",
                    "Participei de um programa intensivo de capacitação de três meses e desenvolvi um projeto prático, consolidando conhecimentos adquiridos.",
                    "Fui integrado a uma equipe de desenvolvimento após aprovação, atuando em um projeto mobile com Flutter.",
                    "Desenvolvi uma solução para visitas técnicas, permitindo visualização de trajetos, registro de atividades, captura de fotos e geração de evidências para auditoria."
                ]}
                className='lg:hidden'
            />
        </div>
    );
};





