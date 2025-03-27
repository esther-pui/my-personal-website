import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, GraduationCap, Code, Folder, Mail } from "lucide-react";
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import WorkEdu from './components/WorkEdu';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from "./components/Footer";

const sections = [
  { id: "hero", icon: <Home size={20} />, label: "Home" },
  { id: "projects", icon: <Folder size={20} />, label: "Projects" },
  { id: "workedu", icon: <Briefcase size={20} />, label: "Experience" },
  { id: "tech", icon: <Code size={20} />, label: "Tech Stack" },
  { id: "contact", icon: <Mail size={20} />, label: "Contact" },
];

function App() {
  return (
    <>
      <div className="relative w-full bg-[#f4f4f4] snap-y snap-mandatory overflow-y-auto h-[100dvh]">
        <main className="flex flex-col items-center">
          <section id="hero" className="snap-center snap-always w-full h-[100dvh] flex items-center justify-center">
            <Hero />
          </section>
          <section id="projects" className="snap-center snap-always w-full h-[100dvh] flex items-center justify-center">
            <Projects />
          </section>
          <section id="workedu" className="snap-center snap-always w-full h-[100dvh] flex items-center justify-center">
            <WorkEdu />
          </section>
          <section id="tech" className="snap-center snap-always w-full h-[100dvh] flex items-center justify-center">
            <Tech />
          </section>
          <section id="contact" className="snap-center snap-always w-full h-[100dvh] flex items-center justify-center">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
