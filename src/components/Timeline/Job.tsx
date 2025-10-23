interface JobProps {
    company: string;
    date: string;
    img: string;
    isFirst: boolean;
}

const Job = ({ company, date, img, isFirst }: JobProps) => {
    return (
        <>
            <div className="flex flex-col items-center md:pt-7 lg:pt-10">
                <span className='text-xs text-white'>{company}</span>
                <span className='text-xs text-white'>{date}</span>
            </div>
            <div className='relative flex flex-col items-center z-0'>
                <div className="rounded-full bg-main-purple p-3.5 lg:p-4.5 w-20 h-20 lg:w-28 lg:h-28 flex justify-center items-center z-20 border-2 border-white">
                    <img src={img} alt="Quero-Quero" />
                </div>
                <div className={`w-2 h-[300px] ${isFirst ? 'lg:h-[600px]' : 'lg:hidden'} bg-white rounded-t-full rounded-b-full absolute top-0 z-10`} />
            </div>
        </>
    )
}

export default Job;