import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import WorkEdu from './components/WorkEdu';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  return (
    <>
      <div className="min-h-screen w-full bg-[#f4f4f4]">
        <main className="flex flex-col items-center px-2 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <WorkEdu />
          <Tech />
          
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
