import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import CurrentWorks from './components/CurrentWorks.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="relative"> */}
       <div className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD]">

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentWorks />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
// bg-gradient-to-b from-slate-800 to-gray-900