import queroquero from '../assets/quero-quero.webp';

export const Timeline = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full xl:gap-20">
            <div className="flex justify-center  items-center md:items-start gap-5">
                <Job
                    company="LOJAS QUERO-QUERO"
                    date="OUT/23 - ATUAL"
                    img={queroquero}
                    isFirst={true}
                />
                <DescriptionJob
                    title="Desenvolvedor FullStack Jr"
                    isFirst={true}
                    responsabilities={[
                        "Atuo como Desenvolvedor FullStack Jr nas Lojas Quero-Quero, onde participei do desenvolvimento de projetos para o e-commerce, incluindo um integrador de preço com a VTEX em Golang.",
                        "Participei da migração da plataforma Wevo para sistemas próprios da empresa, contribuindo em diversos projetos relevantes.",
                        "Além disso, trabalho na sustentação, focando na análise profunda de sistemas, correção de bugs e resolução de problemas em contato com a área de negócio."

                    ]}
                    className='hidden xl:flex'
                />
            </div>
            <DescriptionJob
                title="Desenvolvedor FullStack Jr"
                isFirst={true}
                responsabilities={[
                    "Atuo como Desenvolvedor FullStack Jr nas Lojas Quero-Quero, onde participei do desenvolvimento de projetos para o e-commerce, incluindo um integrador de preço com a VTEX em Golang.",
                    "Participei da migração da plataforma Wevo para sistemas próprios da empresa, contribuindo em diversos projetos relevantes.",
                    "Além disso, trabalho na sustentação, focando na análise profunda de sistemas, correção de bugs e resolução de problemas em contato com a área de negócio."

                ]}
                className='xl:hidden'
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
                isFirst={false}
                responsabilities={[
                    "Iniciei minha trajetória na área de tecnologia como estagiário de desenvolvimento de software nas Lojas Quero-Quero.",
                    "Participei de um programa intensivo de capacitação de três meses e desenvolvi um projeto prático, consolidando conhecimentos adquiridos.",
                    "Fui integrado a uma equipe de desenvolvimento após aprovação, atuando em um projeto mobile com Flutter.",
                    "Desenvolvi uma solução para visitas técnicas, permitindo visualização de trajetos, registro de atividades, captura de fotos e geração de evidências para auditoria."
                ]}
                className='hidden xl:flex'
            />
            </div>
            <DescriptionJob
                title="Estagiário de Desenvolvimento"
                isFirst={false}
                responsabilities={[
                    "Iniciei minha trajetória na área de tecnologia como estagiário de desenvolvimento de software nas Lojas Quero-Quero.",
                    "Participei de um programa intensivo de capacitação de três meses e desenvolvi um projeto prático, consolidando conhecimentos adquiridos.",
                    "Fui integrado a uma equipe de desenvolvimento após aprovação, atuando em um projeto mobile com Flutter.",
                    "Desenvolvi uma solução para visitas técnicas, permitindo visualização de trajetos, registro de atividades, captura de fotos e geração de evidências para auditoria."
                ]}
                className='xl:hidden'
            />
        </div>
    );
};

const Job = ({ company, date, img, isFirst }: { company: string, date: string, img: string, isFirst: boolean }) => {
    return (
        <>
            <div className="flex flex-col items-center xl:pt-7">
                <span className='text-xs text-white'>{company}</span>
                <span className='text-xs text-white'>{date}</span>
            </div>
            <div className='relative flex flex-col items-center z-0'>
                <div className="rounded-full bg-main-purple p-3.5 xl:p-4.5 w-20 h-20 xl:w-28 xl:h-28 flex justify-center items-center z-20">
                    <img src={img} alt="Quero-Quero" />
                </div>
                {isFirst && <div className={`w-2 h-[770px] xl:h-[600px] bg-white rounded-t-full rounded-b-full absolute top-0 z-10`} />}
            </div>
        </>
    )
}

const DescriptionJob = ({ title, isFirst, responsabilities, className }: { title: string, isFirst: boolean, responsabilities: string[], className?: string }) => {
    return (
        <div className={`flex-col items-center justify-start z-0 my-8 xl:mt-0 xl:ml-10 ${className}`}>
            {isFirst && <div className='h-0.5 w-full bg-background xl:hidden' />}
            <div className='flex flex-col gap-10 items-center justify-start bg-black-contrast border-t-4 xl:border-t-8 border-t-main-purple p-4 xl:p-8 rounded-lg xl:rounded-xl w-80 xl:w-[600px]'>
                <span className='text-white'>{title}</span>
                <ul className="text-base text-start text-white leading-relaxed list-disc list-outside hyphens-auto flex flex-col gap-4 pl-4">
                    {responsabilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            {isFirst && <div className='h-0.5 w-full bg-background xl:hidden' />}
        </div>
    )
}

