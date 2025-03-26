
import project1 from "../assets/project1.png"
import { motion } from "framer-motion"
import { AiOutlineArrowRight } from "react-icons/ai";

const projectsData = [
  {
    image: project1,
    title: "Skin & Spoon",
    description: "An expiration management app helps users track expiry dates for food, medications, products, and warranties, set reminders, avoid waste, get AI-driven suggestions for leftovers, manage a shared shopping list, and collaborate with others by adding members to the list. ",
    technologies:["laravel","react","mysql", "vercel"],
    website:"www.google.com"
  }
]

const ScrollToReveal = ({children}) => {
  return (
    <div
     
    >
      {children}
    </div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollToReveal>
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:gap-24">
        {/* Image Section */}
        <img 
          src={project?.image} 
          alt="" 
          // className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px] md:h-full object-cover"
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px] md:h-full object-cover"
        />

        {/* Content Section */}
        <div className="flex flex-col gap-5 md:h-full md:flex-1">
          <div className="flex flex-col">
            <div className="text-xl font-semibold">{project?.title}</div>
            <div className="text-pretty text-xs md:text-base text-justify">{project?.description}</div>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project?.technologies?.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black text-white p-3 flex items-center w-[100px] justify-center text-pretty text-xs md:text-base">
                  {tech}
                </span>
              ))
            }
          </div>

          <div className="flex flex-wrap gap-5">
            <span className="border-2 border-black text-black p-3 rounded-lg flex items-center w-[200px] justify-center hover:bg-black hover:text-white transition-colors">
              <a href={project?.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Live View <AiOutlineArrowRight className="ml-2" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </ScrollToReveal>
  )
}
const Projects = () => {
  return (
    <div 
      className="flex min-h-screen w-full flex-col items-center justify-center gap-6 md:gap-12
      p-4 px-16 md:px-20 md:py-24"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light md:text-6xl"
      >
        My Projects
      </motion.h1>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }} 
        className="text-lg mt-4"
      >
        {
          projectsData?.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </motion.div>
    </div>
  )
}

export default Projects