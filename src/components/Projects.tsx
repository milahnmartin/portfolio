import ProjectLabel from './ProjectLabel';
interface ProjectData {
  title: string;
  techstack: string[];
  link?: string;
  github: string;
  slogan: string;
}
const projectData: ProjectData[] = [
  {
    title: 'LS Planner',
    techstack: [
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'Firebase',
      'Supabase',
      'Tanstack Query',
      'React-Icons',
    ],
    github: 'https://github.com/milahnmartin/loadshedding-time-planner',
    link: 'https://eskom-time-compiler-jths-milahnmartin.vercel.app/',
    slogan: 'Plan Your Meetings and Gaming Sessions around LoadShedding',
  },
  {
    title: 'Portfolio Website',
    techstack: ['React', 'Typescript', 'TaildwindCSS', 'Vite'],
    link: 'https://milahnmartindev.me',
    github: 'https://github.com/milahnmartin/portfolio/',
    slogan:
      'Portfolio Website you are currently on. This showcases information about myself.',
  },
  {
    title: 'Twitter Clone',
    techstack: ['NextJS', 'Typescript', 'TaildwindCSS', 'Sanity'],
    github: 'https://github.com/milahnmartin/twitter-clone-nextjs-sanity',
    slogan:
      'A Twitter Clone built with NextJS, Typescript, TaildwindCSS and Sanity',
  },
  {
    title: 'EduBooks',
    techstack: ['Java', 'Android Studio', 'SQLITE'],
    github: 'https://github.com/milahnmartin/edubooks-android-textbookselling',
    slogan: 'A App For Students to Buy and Sell Text Books',
  },
  {
    title: 'Energy Drink Warehouse',
    techstack: ['MySQL', 'PHP', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/milahnmartin/energydrink-ecommerce',
    slogan: 'E-Commerce Site To Sell and Buy Energy Drinks',
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full h-fit font-bold text-3xl font-mono flex flex-col items-center justify-start"
    >
      <h1 className="text-text flex items-center justify-start space-x-4">
        <span className="text-secondary text-2xl">02.</span>Projects
        <hr className="w-[6rem] text-text2" />
      </h1>
      <p
        id="here-some-proj"
        className="text-secondary text-[1.3rem] font-normal text-center my-2 tracking-tighter"
      >
        Here are some projects I've built
      </p>
      <div className="flex w-full px-10 h-full p-4 gap-3 flex-wrap content-center justify-center">
        {projectData!.map((project: ProjectData) => (
          <ProjectLabel
            key={project?.title}
            title={project?.title}
            techstack={project.techstack}
            link={project?.link}
            github={project?.github}
            slogan={project?.slogan}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
