interface DescriptionJobProps {
    title: string;
    responsabilities: string[];
    className?: string;
}

const DescriptionJob = ({ title, responsabilities, className }: DescriptionJobProps) => {
    return (
        <div className={`flex-col items-center justify-start z-0 my-8 lg:mt-0 lg:ml-10 ${className}`}>
            <div className='h-0.5 w-full bg-background lg:hidden' />
            <div className='flex flex-col gap-8 items-center justify-start bg-black-contrast border-t-4 lg:border-t-8 border-t-main-purple p-4 lg:p-8 rounded-lg lg:rounded-lg w-[350px] lg:w-[600px]'>
                <span className='text-white font-semibold text-xl text-nowrap'>{title}</span>
                <ul className="text-base text-start text-white leading-relaxed list-disc list-outside hyphens-auto flex flex-col gap-4 pl-4">
                    {responsabilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className='h-0.5 w-full bg-background lg:hidden' />
        </div>
    )
}

export default DescriptionJob;