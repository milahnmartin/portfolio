import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className='h-screen w-screen bg-primary overflow-x-hidden font-mono flex flex-col'>
      <Navbar />
      <div className='w-full h-full flex'>
        <div className='h-[90vh] w-[5%] flex-col items-center justify-center text-text-2 hidden md:flex'>
          <SidebarLeft />
        </div>
        <div
          id='data-container'
          className='h-[90vh] w-full px-4 md:w-[90%] md:overflow-y-scroll space-y-56'
        >
          <Welcome />
          <About />
          <Projects />
          <Contacts />
          <Footer />
        </div>
        <div className='h-[90vh] w-[5%] flex-col items-center justify-center text-text-2 hidden md:flex'>
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
