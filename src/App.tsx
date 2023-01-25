import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import './App.css';
import lottieJson from './assets/98093-pool-chart-loading.json';
import About from './components/About';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Projects from './components/Projects';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import Welcome from './components/Welcome';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const myLoadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(myLoadingTimeout);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-primary flex justify-center items-center">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>
    );
  }
  return (
    <div className="h-screen w-screen bg-primary overflow-x-hidden font-mono flex flex-col">
      <Navbar />
      <div className="w-full h-full flex">
        <div className="h-[90vh] w-[5%] flex-col items-center justify-center text-text-2 hidden md:flex">
          <SidebarLeft />
        </div>
        <div
          id="data-container"
          className="h-[90vh] w-full px-4 md:w-[90%] md:overflow-y-scroll space-y-56"
        >
          <Welcome />
          <About />
          <Projects />
          <Education />
          <Contacts />
          <Footer />
        </div>
        <div className="h-[90vh] w-[5%] flex-col items-center justify-center text-text-2 hidden md:flex">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default App;
