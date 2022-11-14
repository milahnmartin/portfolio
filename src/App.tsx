import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
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
    <div className='h-screen w-screen bg-primary overflow-hidden font-mono flex flex-col'>
      <Navbar />
      <div className='w-full h-full flex'>
        <div className='h-full w-[5%] flex flex-col items-center justify-center py-4 text-text-2'>
          <SidebarLeft />
        </div>
        <div className='h-full w-[90%] overflow-x-hidden overflow-y-scroll  px-4'>
          <Welcome />
          <About />
          <Experience />
          <Projects />
          <Contacts />
        </div>
        <div className='h-full w-[5%] flex flex-col items-center justify-center py-4 text-text-2'>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
