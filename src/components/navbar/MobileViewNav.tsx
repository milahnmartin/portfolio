import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const MobileViewNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };
  return (
    <div className="h-screen w-screen flex items-start justify-end">
      {open ? (
        <AiOutlineClose
          id="close-hamburger"
          onClick={() => setOpen((prev: boolean) => !prev)}
          className="cursor-pointer z-50"
          size={30}
          fill="#64ffda"
        />
      ) : (
        <GiHamburgerMenu
          id="hamburger-menu"
          onClick={() => setOpen((prev: boolean) => !prev)}
          className="cursor-pointer z-50  text-secondary"
          size={30}
          fill="#64ffda"
        />
      )}
      {open && (
        <div className="h-screen w-screen flex flex-col items-center p-2 justify-center text-center text-text bg-primary m-auto absolute top-0 right-0 space-y-16">
          <h1
            onClick={() => scrollToComponent('about')}
            className="hover:text-secondary cursor-pointer animation-all duration-300 w-[35%] flex items-center justify-start tracking-widest"
          >
            <span className="text-secondary w-[20%] flex justify-start tracking-normal">
              01.
            </span>
            <span className="w-full">About</span>
          </h1>
          <h1
            onClick={() => scrollToComponent('projects')}
            className="hover:text-secondary cursor-pointer animation-all duration-300 w-[35%] flex items-center justify-center"
          >
            <span className="text-secondary w-[20%] flex justify-start tracking-normal">
              02.
            </span>
            <span className="w-full">Projects</span>
          </h1>
          <h1
            onClick={() => scrollToComponent('education')}
            className="hover:text-secondary cursor-pointer animation-all duration-300 w-[35%] flex items-center justify-center tracking-widest"
          >
            <span className="text-secondary w-[20%] flex justify-start tracking-normal">
              03.
            </span>
            <span className="w-full">Education</span>
          </h1>
          <h1
            onClick={() => scrollToComponent('contacts')}
            className="hover:text-secondary cursor-pointer animation-all duration-300 w-[35%] flex items-center justify-center tracking-widest"
          >
            <span className="text-secondary w-[20%] flex justify-start tracking-normal">
              04.
            </span>
            <span className="w-full">Contact</span>
          </h1>
          <button
            onClick={() => window.open('/mmartin_resume.pdf')}
            className="px-4 py-2 outline-none animation-all duration-300 border-[1px] w-[50%] border-secondary rounded-md text-secondary hover:bg-secondary/10"
          >
            Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileViewNav;
