import Card from './Card';

const experience = [
  {
    company: 'TeamGeek PTY LTD',
    role: 'Junior FullStack Engineer',
    duration: 'Feb 2024 - Present',
    description:
      "Developed and enhanced Yoco Technologies PTY LTD's website, backend services, and task queue management. Monitored performance using Sentry and logs. Developed a visual birdseye view editor for Yoco's Product Finder Component.",
    stack_uses: [
      'Python',
      'Django',
      'FastAPI',
      'Sentry',
      'Celery',
      'Flow',
      'GatsbyJS',
      'Next.js',
      'TailwindCSS',
      'Redis',
    ],
    company_url: 'https://www.teamgeek.co.za',
  },
  {
    company: 'FREI PTY LTD',
    role: 'Junior FullStack Engineer',
    duration: 'Feb 2023 - Feb 2024',
    description:
      'Developed and maintained web applications with a focus on front-end and back-end development. Utilized technologies such as Vue3, Pinia, Firebase, Tailwind CSS, Bootstrap, Node.js, and TypeScript. Integrated unit testing with Chai and Mocha. Deployed applications using PM2.',
    stack_uses: [
      'Vue3',
      'Pinia',
      'Firebase',
      'Tailwind CSS',
      'Bootstrap',
      'Express.js',
      'Elysis.js',
      'Jenkins',
      'Node.js',
    ],
    company_url: 'https://www.frei.one',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full h-fit font-bold text-3xl font-mono flex flex-col"
    >
      <h1 className="text-text flex items-center justify-start space-x-4">
        <span className="text-secondary text-2xl">04.</span>Experience
        <hr className="w-[5rem] text-text2" />
      </h1>
      <div className="flex flex-wrap gap-8 pt-6 justify-center">
        {experience.map((exp, index) => (
          <Card
            key={index}
            company={exp.company}
            stack_uses={exp.stack_uses}
            company_url={exp.company_url}
            descripion={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
