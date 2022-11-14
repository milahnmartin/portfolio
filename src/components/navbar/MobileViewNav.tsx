import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileViewNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='h-screen w-screen flex items-start justify-end'>
      {open ? (
        <AiOutlineClose
          id='close-hamburger'
          onClick={() => setOpen((prev: boolean) => !prev)}
          className='cursor-pointer z-50'
          size={30}
          fill='#64ffda'
        />
      ) : (
        <GiHamburgerMenu
          id='hamburger-menu'
          onClick={() => setOpen((prev: boolean) => !prev)}
          className='cursor-pointer z-50  text-secondary'
          size={30}
          fill='#64ffda'
        />
      )}
      {open && (
        <div className='h-screen w-screen flex flex-col items-center p-4 justify-center text-center text-text bg-text2 m-auto absolute top-0 right-0 space-y-6'>
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
      )}
    </div>
  );
};

export default MobileViewNav;
