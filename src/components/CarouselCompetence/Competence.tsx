interface CompetenceProps {
  name: string;
  src: string;
  isActive: boolean;
}

const Competence = ({ name, src, isActive }: CompetenceProps) => {
  return (
    <div
      className={`flex items-center justify-center bg-background rounded-3xl cursor-pointer transition-all duration-500 ${
        isActive ? 'opacity-100 w-28 h-28' : 'opacity-30 w-20 h-20'
      }`}
    >
      <img src={src} alt={name} className="w-auto h-auto max-h-[60%] max-w-[60%]" />
    </div>
  );
};

export default Competence;