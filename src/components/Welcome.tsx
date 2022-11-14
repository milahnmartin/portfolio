const Welcome = () => {
  return (
    <div
      id='home-top'
      className='flex items-start justify-center flex-col w-full h-full space-y-4'
    >
      <span className='text-secondary text-1xl'>Hi, my name is</span>
      <h1 className='text-text text-6xl font-bold md:text-7xl'>Milahn Martin</h1>
      <h1 className='text-text2 text-5xl font-black md:text-7xl'>
        I build things for the web.
      </h1>
      <p className='text-text font-mono font-bold'>
        I’m a junior software engineer specializing in building (and occasionally
        designing) exceptional digital experiences.
        <br /> Currently, I'm focusing on building scalible web and mobile applications,
        using the latest tech stacks.
      </p>
      <button
        id='about'
        onClick={() => window.open("https://github.com/milahnmartin")}
        className='px-6 py-4 outline-none animation-all duration-300 border-[1px] border-secondary rounded-md text-secondary hover:bg-secondary/10'
      >
        Checkout my github !
      </button>
    </div>
  );
};

export default Welcome;
