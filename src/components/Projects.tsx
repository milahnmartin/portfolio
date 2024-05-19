import ProjectLabel from './ProjectLabel';
import Section from './Section';
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
  {
    title: 'Tripwiz UI',
    techstack: ['Firebase', 'TailwindCSS', 'React.JS', 'Leaflet.JS'],
    github: 'https://github.com/Milahn-Henri-Louis-Irwin-ITBSA/tripwiz-ui',
    slogan:
      'Alerting system for South Africans to use in emergencies, check if you route is safe to travel',
  },
  {
    title: 'Tripwiz Backend - SOA Architecture',
    techstack: ['Firebase Admin', 'Node.js', 'Typescript', 'Express.js', 'PM2'],
    github:
      'https://github.com/orgs/Milahn-Henri-Louis-Irwin-ITBSA/repositories',
    slogan:
      'Alerting system for South Africans to use in emergencies, check if you route is safe to travel',
  },
  {
    title: 'Yoco.com',
    techstack: ['GraphQL', 'Gatsby.js', 'Typescript', 'Python', 'Tailwind CSS'],
    github: '',
    link: 'https://yoco.com/',
    slogan:
      "I was able to work on the prominent startup Yoco. I've worked on the website, backend services and tools for the commercial team",
  },
];

const Projects = () => {
  return (
    <Section>
      <div
        id="projects"
        className="w-full h-fit font-bold text-3xl font-mono flex flex-col items-center justify-start"
      >
        <h1 className="text-text flex items-center justify-start self-start space-x-4">
          <span className="text-secondary text-2xl">02.</span>Projects
          <hr className="w-[6rem] text-text2" />
        </h1>
        <p
          id="here-some-proj"
          className="text-secondary text-[1.3rem] font-normal text-center my-2 tracking-tighter"
        >
          Here are some side-projects I've built
        </p>
        <div className="flex w-full h-full gap-3 flex-wrap justify-center content-center">
          {projectData.map((project: ProjectData) => (
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
    </Section>
  );
};

export default Projects;
