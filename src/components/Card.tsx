type Props = {
  company: string;
  stack_uses: string[];
  company_url: string;
  descripion: string;
};

function Card({ company, stack_uses, company_url, descripion }: Props) {
  return (
    <div className="p-6 w-[400px] aspect-square bg-navy2 rounded-lg shadow-md flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-text text-3xl font-bold">{company}</h1>
        <h2 className="text-text/50 text-sm font-light mt-2">{descripion}</h2>
      </div>

      <div className="w-full mt-4 flex flex-col">
        <h1 className="text-text text-2xl font-semibold">Stack Used</h1>
        <ul className="w-full space-y-2 mt-2 text-text/50 text-sm font-light">
          {stack_uses.map((stack, index) => (
            <li key={index}>{stack}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          onClick={() => window.open(company_url, '_blank')}
          className="py-3 px-6 border border-secondary rounded-full text-sm font-normal text-secondary hover:bg-secondary/10 transition-all duration-300"
        >
          Visit Company
        </button>
      </div>
    </div>
  );
}

export default Card;
