const NormalViewNav = () => {
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='h-full w-full flex space-x-6 items-center justify-end text-text'>
      <h1
        onClick={() => scrollToComponent("about")}
        className='hover:text-secondary cursor-pointer animation-all duration-300'
      >
        <span className='text-secondary'>01.</span>About
      </h1>
      <h1
        onClick={() => scrollToComponent("experience")}
        className='hover:text-secondary cursor-pointer animation-all duration-300'
      >
        <span className='text-secondary'>02.</span>Experience
      </h1>
      <h1
        onClick={() => scrollToComponent("projects")}
        className='hover:text-secondary cursor-pointer animation-all duration-300'
      >
        <span className='text-secondary'>03.</span>Projects
      </h1>
      <h1
        onClick={() => scrollToComponent("contacts")}
        className='hover:text-secondary cursor-pointer animation-all duration-300'
      >
        <span className='text-secondary'>04.</span>Contact
      </h1>
      <button className='px-4 py-2 outline-none animation-all duration-300 border-[1px] border-secondary rounded-md text-secondary hover:bg-secondary/10'>
        Resume
      </button>
    </div>
  );
};

export default NormalViewNav;
