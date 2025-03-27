import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, GraduationCap, Code, Folder, Mail } from "lucide-react";
// import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import WorkEdu from './components/WorkEdu';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";

const sections = [
  { id: "hero", icon: <Home size={20} />, label: "Home" },
  { id: "projects", icon: <Folder size={20} />, label: "Projects" },
  { id: "workedu", icon: <Briefcase size={20} />, label: "Experience" },
  { id: "tech", icon: <Code size={20} />, label: "Tech Stack" },
  { id: "contact", icon: <Mail size={20} />, label: "Contact" },
];

function App() {
  const [active, setActive] = useState("");

  const scrollToSection = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative min-h-[100dvh] w-full bg-[#f4f4f4] snap-y snap-mandatory overflow-y-scroll h-screen">
        {/* Navigation Bar */}
        {/* <motion.nav
          className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-4 p-2 rounded-lg"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.2 }}
              className={`p-2 rounded-lg ${
                active === section.id ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {section.icon}
            </motion.button>
          ))}
        </motion.nav> */}

        <main className="flex flex-col items-center px-2 md:px-8 lg:px-16">
          {/* <section className="snap-start w-full"><Navbar /></section> */}
          <section id="hero" className="snap-start w-full"><Hero /></section>
          <section id="projects" className="snap-start w-full"><Projects /></section>
          <section id="workedu" className="snap-start w-full"><WorkEdu /></section>
          <section id="tech" className="snap-start w-full"><Tech /></section>
          <section id="contact" className="snap-start w-full"><Contact /></section>
        </main>
        <section id="footer" className="snap-start w-full"><Footer /> </section>
      </div>
    </>
  );
}

export default App;
