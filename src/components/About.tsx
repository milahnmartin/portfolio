import Section from './Section';
const About = () => {
  return (
    <Section>
      <div
        id="about"
        className="w-full h-fit font-bold text-3xl font-mono flex flex-col"
      >
        <h1 className="text-text flex items-center justify-start space-x-4">
          <span className="text-secondary text-2xl">01.</span>About Me
          <hr className="w-[6rem] text-text2" />
        </h1>
        <div className="flex w-full pt-6 flex-col md:flex-row">
          <p className="text-text2 text-2xl w-full px-4 text-left md:w-[60%]">
            Honours graduate with expertise in both front-end and back-end
            development. Recently, I had the opportunity to work with Yoco
            Technologies PTY LTD, a prominent startup in the industry, where I
            contributed to the development and enhancement of their intricate
            and dynamic website, as well as building backend services and tools
            for their commercial team. My strong background and passion for
            learning drive me to excel in delivering high-quality solutions for
            clients and continuously expanding my skill set in the ever-evolving
            tech landscape. My github can be found at{' '}
            <a
              id="github-about"
              target="_blank"
              className="text-secondary font-mono"
              href="https://github.com/milahnmartin"
            >
              github
            </a>
            . Some of my hobbies include: tennis, gym, paddle-tennis, side
            projects and traveling.
            <br />
            <h1 className="pt-10 text-text font-mono font-light text-xl">
              Here are a few technologies I've been working with:
            </h1>
            <ul className="ml-4 mt-5 text-xl flex flex-wrap justify-start w-[50%] h-fit content-start gap-3">
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Typescript
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Python
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Vue.js
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                React.js
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
                Next.js
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
                Node.js
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
                Bun.js
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
                Java
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
                Flutter
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Golang
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                TailwindCSS
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Firebase
              </li>
              <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
                Supabase
              </li>
            </ul>
          </p>

          <div className="inline h-fit w-full rounded-xl p-2 animation-all duration-700 relative z-[500] md:w-[35%]">
            <img src="/milahn-hd.jpg" className="w-[50vh] rounded-md" />
            <span className="absolute w-[100%] h-[98%] border-2 border-secondary right-[-0.6rem] -bottom-4 rounded-md z-[-1] md:w-[80%] md:right-[5rem]"></span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
