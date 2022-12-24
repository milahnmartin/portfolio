import { useEffect, useState } from "react";
import { FaDev } from "react-icons/fa";
import MobileViewNav from "./MobileViewNav";
import NormalViewNav from "./NormalViewNav";
const Navbar = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  const scrollToComponent = (component: string) => {
    const element = document.getElementById(component);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='w-full h-[10vh] text-white font-mono font-black flex p-6 sticky top-0 bg-primary z-[999]'>
      <div className='h-full w-fit flex items-center justify-start '>
        <FaDev
          id='logo'
          fill='#64ffda'
          size={50}
          onClick={() => scrollToComponent("home-top")}
          className='cursor-pointer'
        />
      </div>
      {mobile ? <MobileViewNav /> : <NormalViewNav />}
    </div>
  );
};

export default Navbar;
