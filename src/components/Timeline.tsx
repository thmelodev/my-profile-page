import queroquero from '../assets/quero-quero.png';

export const Timeline = () => {

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center">
                    <span className='text-xs'>LOJAS QUERO-QUERO</span>
                    <span className='text-xs'>OUT/23 - ATUAL</span>
                </div>
                <div className='relative flex flex-col items-center z-0'>
                    <div  className="rounded-full bg-main-purple p-3.5 w-20 h-20 flex justify-center items-center z-20">
                        <img src={queroquero} alt="Quero-Quero" />
                    </div>
                    <div className={`w-2 h-[700px] bg-white rounded-t-full rounded-b-full absolute top-0 z-10`} />
                </div>
            </div>
            <div className='flex-col items-center justify-start z-0 my-8'>
                <div className='h-0.5 w-full bg-background' />
                <div className='flex flex-col gap-10 items-center justify-start bg-black-contrast border-t-4 border-t-main-purple p-4 rounded-t-lg w-80'>
                    <span>Desenvolvedor FullStack Jr</span>
                    <ul className="text-base text-start leading-relaxed list-disc list-outside hyphens-auto flex flex-col gap-4 pl-4">
                        <li>Trabalhei no desenvolvimento de projetos para o e-commerce da Quero-Quero, incluindo um integrador de preço com a VTEX em Golang.</li>
                        <li>Participei da migração da plataforma Wevo para sistemas próprios da empresa.</li>
                        <li>Contribuí em outros projetos relevantes para a organização.</li>
                        <li>Atuo na sustentação, focando na análise profunda de sistemas, correção de bugs e resolução de problemas em contato com a área de negócio.</li>
                    </ul>
                </div>
                <div className='h-0.5 w-full bg-background' />
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center">
                    <span className='text-xs'>LOJAS QUERO-QUERO</span>
                    <span className='text-xs'>OUT/23 - ATUAL</span>
                </div>
                <div className='relative flex flex-col items-center z-0'>
                    <div className="rounded-full bg-main-purple p-3.5 w-20 h-20 flex justify-center items-center z-10">
                        <img src={queroquero} alt="Quero-Quero" />
                    </div>
                </div>
            </div>
            <div className='flex-col items-center justify-start my-8'>
                <div className='flex flex-col gap-8 items-center justify-start bg-black-contrast border-t-4 border-t-main-purple p-4 rounded-t-lg w-80'>
                    <span>Estagiário de Desenvolvimento</span>
                    <ul className="text-base text-start leading-relaxed list-disc list-outside hyphens-auto flex flex-col gap-4 pl-4">
                        <li>Iniciei minha trajetória na área de tecnologia como estagiário de desenvolvimento de software nas Lojas Quero-Quero.</li>
                        <li>Participei de um programa intensivo de capacitação de três meses e desenvolvi um projeto prático, consolidando conhecimentos adquiridos.</li>
                        <li>Fui integrado a uma equipe de desenvolvimento após aprovação, atuando em um projeto mobile com Flutter.</li>
                        <li>Desenvolvi uma solução para visitas técnicas, permitindo visualização de trajetos, registro de atividades, captura de fotos e geração de evidências para auditoria.</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

