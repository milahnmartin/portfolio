import ProjectLabel from "./ProjectLabel";
interface ProjectData {
  image: string;
  title: string;
  techstack: string[];
  link: string;
  slogan: string;
}

const Projects = () => {
  const projectData: ProjectData[] = [
    {
      image: "/lsplanner.png",
      title: "LS Planner",
      techstack: ["Next.js", "TailwindCSS", "TypeScript", "Firebase", "Supabase"],
      link: "https://lsplanner.info",
      slogan: "Plan Your Meetings and Gaming Sessions around LoadShedding",
    },
    {
      image: "/edubooks-1.png",
      title: "EduBooks",
      techstack: ["Java", "Android Studio", "SQLITE"],
      link: "https://github.com/milahnmartin/EduBooks-ITMDA-Android",
      slogan: "A App For Students to Buy and Sell Text Books",
    },
    {
      image: "/energy-drink-warehouse.png",
      title: "Energy Drink Warehouse",
      techstack: ["MySQL", "PHP", "HTML5", "CSS3", "JavaScript"],
      link: "https://github.com/milahnmartin/milahnmartin-iteca-ecommerce",
      slogan: "E-Commerce Site To Sell and Buy Energy Drinks",
    },
    {
      image: "/phase-three-main.png",
      title: "Phase Three Admin Panel",
      techstack: ["Firebase", "React", "Javascript", "Material UI", "Redux"],
      link: "https://github.com/milahnmartin/Phase-Three-AdminPanel",
      slogan: "Admin Panel To Handle Clients Subscriptions",
    },
    {
      image: "/fingerprint-og.png",
      title: "Fingerprint ZA",
      techstack: ["Vanilla JS", "HTML5", "CSS3", "Firebase", "JQuery"],
      link: "https://github.com/milahnmartin/fingerprint",
      slogan: "Trying to find your favourite E Sports Players settings ?",
    },
    {
      image: "/python-logo.png",
      title: "Python Twitter Automation",
      techstack: ["Python", "Tweepy", "TypeScript"],

      link: "https://github.com/milahnmartin/fp-automation/",
      slogan:
        "Don't Know When game servers are offline ? This app will automatically detect change and make a tweet.",
    },
  ];
  return (
    <div
      id='projects'
      className='w-full h-fit font-bold text-3xl font-mono flex flex-col mb-10'
    >
      <h1 className='text-text flex items-center justify-start space-x-4'>
        <span className='text-secondary text-2xl'>03.</span>Projects
        <hr className='w-[10rem] text-text2' />
      </h1>
      <div className='flex w-full flex-col pt-6 justify-start items-center h-full overflow-y-scroll'>
        {projectData!.map((project: ProjectData) => (
          <ProjectLabel
            key={project.title}
            image={project?.image}
            title={project?.title}
            techstack={project.techstack}
            link={project.link}
            slogan={project.slogan}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
