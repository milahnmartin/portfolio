import ProjectLabel from "./ProjectLabel";
interface ProjectData {
  title: string;
  techstack: string[];
  link?: string;
  github?: string;
  slogan: string;
}
const projectData: ProjectData[] = [
  {
    title: "LS Planner - (In Dev)",
    techstack: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Firebase",
      "Supabase",
      "Tanstack Query",
      "React-Icons",
    ],
    github: "https://github.com/milahnmartin/eskom-time-compiler",
    link: "https://lsplanner.info",
    slogan: "Plan Your Meetings and Gaming Sessions around LoadShedding",
  },
  {
    title: "EduBooks",
    techstack: ["Java", "Android Studio", "SQLITE"],
    github: "https://github.com/milahnmartin/EduBooks-ITMDA-Android",
    slogan: "A App For Students to Buy and Sell Text Books",
  },
  {
    title: "Energy Drink Warehouse",
    techstack: ["MySQL", "PHP", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/milahnmartin/milahnmartin-iteca-ecommerce",
    slogan: "E-Commerce Site To Sell and Buy Energy Drinks",
  },
  {
    title: "Phase Three Admin Panel",
    techstack: ["Firebase", "React", "Javascript", "Material UI", "Redux"],
    github: "https://github.com/milahnmartin/Phase-Three-AdminPanel",
    slogan: "Admin Panel To Handle Clients Subscriptions",
  },
  {
    title: "Fingerprint ZA",
    techstack: ["Vanilla JS", "HTML5", "CSS3", "Firebase", "JQuery"],
    github: "https://github.com/milahnmartin/fingerprint",
    slogan: "Trying to find your favourite E Sports Players settings ?",
  },
  {
    title: "Python Twitter Automation",
    techstack: ["Python", "Tweepy"],
    github: "https://github.com/milahnmartin/fp-automation/",
    slogan:
      "Don't Know When game servers are offline ? This app will automatically detect change and make a tweet.",
  },
  {
    title: "Portfolio Website",
    techstack: ["React", "Typescript", "TaildwindCSS", "Vite"],
    link: "https://milahnmartindev.me",
    github: "https://github.com/milahnmartin/portfolio/",
    slogan:
      "Portfolio Website you are currently on. This showcases information about myself.",
  },
  {
    title: "Twitch Bot",
    techstack: ["MySQL", "Typescript", "TwitchAPI"],
    github: "https://github.com/milahnmartin/fp-twitch-bot",
    slogan:
      "Twitchbot that interacts with a faceit API (shown below), and displays stats in twitch chat.",
  },
  {
    title: "Flask API",
    techstack: ["Flask", "Pyhon", "Web Scraper"],
    github: " https://github.com/milahnmartin/fp-twitch-api",
    slogan:
      "Python API built with Flask that makes use of Faceit API and Web Scraper to get stats, end responds back to endpoints.",
  },
  {
    title: "Python PIP Package",
    techstack: ["Python", "FaceitAPI", "PIP"],
    github: "https://github.com/milahnmartin/pyfaceit",
    slogan:
      "Trying to get stats from faceit API ? This package will help you get stats from faceit API easier. Abstraction layer for faceit API.",
  },
  {
    title: "Twitter Clone - (In Dev)",
    techstack: [
      "React.js",
      "Styled-Components",
      "React Query",
      "Vite.js",
      "Typescript",
      "GraphQL",
      "Apollo",
    ],
    github: "https://github.com/milahnmartin/milahn-twitter-clone",
    link: "https://milahn-twitter-clone.vercel.app",
    slogan:
      "Popular Social Media Platform Twitter Clone, built with React, GraphQL, Apollo, and Styled Components.",
  },
];

const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full h-fit font-bold text-3xl font-mono flex flex-col items-center justify-start'
    >
      <h1 className='text-text flex items-center justify-start space-x-4'>
        <span className='text-secondary text-2xl'>02.</span>Projects
        <hr className='w-[10rem] text-text2' />
      </h1>
      <div className='flex w-full px-10 h-full p-4 gap-3 flex-wrap content-center justify-center'>
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
