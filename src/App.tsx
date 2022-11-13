import "./App.css";
import About from "./components/First/About";
import Experience from "./components/First/Experience";
import Welcome from "./components/First/Welcome";
import Navbar from "./components/navbar/Navbar";
import SidebarLeft from "./components/SidebarLeft";
function App() {
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
        </div>
        <div className='h-full w-[5%] flex flex-col items-center justify-center py-4 text-text-2'>
          <pre className='rotate-90 text-text2'>milahnmartin.develop@gmail.com</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
