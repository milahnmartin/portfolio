import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Welcome from "./components/Welcome";
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className='h-screen w-screen bg-primary overflow-x-hidden overflow-y-scroll md:overflow-y-hidden font-mono flex flex-col'>
      <Navbar />
      <div className='w-full h-full flex'>
        <div className='h-full w-[5%] flex-col items-center justify-center py-4 text-text-2 hidden md:flex'>
          <SidebarLeft />
        </div>
        <div
          id='data-container'
          className='h-full w-full px-4 md:w-[90%] md:overflow-y-scroll'
        >
          <Welcome />
          <About />
          <Projects />
          <Contacts />
        </div>
        <div className='h-full w-[5%] flex-col items-center justify-center py-4 text-text-2 hidden md:flex'>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
