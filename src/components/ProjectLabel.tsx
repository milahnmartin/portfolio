interface ProjectData {
  image: string;
  title: string;
  techstack: string[];
  link: string;
  slogan: string;
}

const ProjectLabel = ({ title, image, techstack, link, slogan }: ProjectData) => {
  return (
    <div
      onClick={() => window.open(link)}
      className='w-[80%] h-fit flex flex-col justify-center space-y-4 mb-10'
    >
      <img
        src={image}
        className='cursor-pointer blur-sm hover:blur-none animation-all duration-500 h-[500px] w-auto object-contain rounded-md'
      />
      <div className='flex flex-col items-center justify-start font-mono text-center space-y-4'>
        <h1 className='text-secondary tracking-widest text-3xl font-mono'>{title}</h1>
        <h1 className='text-text font-sans text-2xl font-bold'>{slogan}</h1>
        <ul className='list-disc flex flex-wrap items-center content-center justify-center space-x-9'>
          {techstack.map((tech: string) => {
            return (
              <li className='text-text2 text-md hover:text-secondary cursor-pointer animate-all duration-500'>
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectLabel;
