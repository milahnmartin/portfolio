const About = () => {
  return (
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
         
I'm Milahn Martin, a recent Honours graduate with a degree in Software Engineering from Eduvos in Midrand, which I completed in 2023. Currently, I'm seeking opportunities for a Junior Full Stack or Backend Engineer position to apply and further develop my skills. You can explore my public projects in my portfolio. Additionally, I have gained valuable experience during my nine-month internship, contributing to my continuous growth in the field.
          <a
            id="github-about"
            target="_blank"
            className="text-secondary font-mono"
            href="https://github.com/milahnmartin"
          >
            github
          </a>
          . Some of my hobbies include: tennis, gym, paddle tennis, side
          projects and travelling.
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
              Kotlin
            </li>
            <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
              Flutter
            </li>
            <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc">
              Vite.js
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
            <li className="mr-4 hover:text-secondary cursor-pointer animation-all duration-500 list-disc hover:scale-105">
              Boostrap
            </li>
          </ul>
        </p>

        <div className="inline h-fit w-full rounded-xl p-2 animation-all duration-700 relative z-[500] md:w-[35%]">
          <img src="/milahn-hd.jpg" className="w-[50vh] rounded-md" />
          <span className="absolute w-[100%] h-[98%] border-2 border-secondary right-[-0.6rem] -bottom-4 rounded-md z-[-1] md:w-[80%] md:right-[5rem]"></span>
        </div>
      </div>
    </div>
  );
};

export default About;
