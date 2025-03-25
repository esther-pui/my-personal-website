import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import WorkEdu from './components/WorkEdu';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  return (
    <>
      <div className="min-h-screen w-full bg-[#f4f4f4] snap-y snap-mandatory overflow-y-scroll h-screen">
        <main className="flex flex-col items-center px-2 md:px-8 lg:px-16">
        <section className="snap-start w-full"><Navbar /></section>
        <section className="snap-start w-full"><Hero /></section>
        <section className="snap-start w-full"><WorkEdu /></section>
        <section className="snap-start w-full"><Tech /></section>
          
        <section className="snap-start w-full"><Projects /></section>
        <section className="snap-start w-full"><Contact /></section>
        </main>
      </div>
    </>
  )
}

export default App
