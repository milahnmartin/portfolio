import Logo from "../../assets/logo.jpg";
const About = () => {
  return (
    <div className='w-full h-full font-bold text-3xl font-mono flex flex-col'>
      <h1 className='text-text flex items-center justify-start space-x-4'>
        <span className='text-secondary text-2xl'>01.</span>About Me
        <hr className='w-[10rem] text-text2' />
      </h1>
      <div className='flex w-full pt-6'>
        <p className='text-text2 text-2xl w-[60%] px-4 text-left'>
          I'm Milahn Martin, a third year Software Engineering Student at Eduvos in
          Pretoria. I'm finishing my degree this year (2022) and will pursue a Honors
          degree in 2023. I love exploring new tech stacks and collaborating with other
          developers. I built tons of projects in my free time and can be viewed on my
          github - https://github.com/ milahnmartin. When im not working on projects I
          like playing various amount of sports like tennis, cricket and rugby and also
          love hiking.
          <br />
          <h1 className='pt-10 text-text font-mono font-light text-xl'>
            Here are a few tech stacks I've been working with Recently:
          </h1>
          <ul
            style={{
              listStyleType: "circle",
            }}
            className='ml-4 mt-5 text-xl flex flex-wrap justify-start w-[70%] h-fit content-start gap-3'
          >
            <li className='mr-2'>Typescript</li>
            <li className='mr-2'>Python</li>
            <li className='mr-2'>Vue.js</li>
            <li className='mr-2'>React.js</li>
            <li className='mr-2'>Next.js</li>
            <li className='mr-2'>Golang</li>
            <li className='mr-2'>Tailwind</li>
            <li className='mr-2'>Firebase</li>
            <li className='mr-2'>Supabase</li>
          </ul>
        </p>

        <div className='inline h-fit w-[35%] rounded-xl p-2 animation-all duration-700 relative z-[500]'>
          <img
            className='rounded-md hue-rotate-180 hover:filter-none group animation-all duration-250 group'
            src={Logo}
          />
          <span className='absolute w-[100%] h-[95%] border-2 border-secondary -right-4 -bottom-4 rounded-md z-[-1] group-hover:-right-0'></span>
        </div>
      </div>
    </div>
  );
};

export default About;
