import { FaDev } from "react-icons/fa";
const Navbar = () => {
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='w-full h-[5rem] text-white font-mono font-black flex p-6 sticky top-0 bg-primary z-[999]'>
      <div className='h-full w-fit flex items-center justify-start '>
        {/* <img
          id='logo'
          src='/logo.jpg'
          alt='logo'
          className='rounded-full w-14 ring-2 ring-secondary cursor-pointer hover:scale-105 animation-all duration-500 hover:drop-shadow-xl'
        /> */}
        <FaDev
          id='logo'
          fill='#64ffda'
          size={50}
          onClick={() => scrollToComponent("home-top")}
          className='cursor-pointer'
        />
      </div>
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
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>03.</span>Projects
        </h1>
        <h1 className='hover:text-secondary cursor-pointer animation-all duration-300'>
          <span className='text-secondary'>04.</span>Contact
        </h1>
        <button className='px-4 py-2 outline-none animation-all duration-300 border-[1px] border-secondary rounded-md text-secondary hover:bg-secondary/10'>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
