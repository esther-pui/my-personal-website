
import project1 from "../assets/project1.png"
import { motion } from "framer-motion"
import { AiOutlineArrowRight } from "react-icons/ai";

const projectsData = [
  {
    image: project1,
    title: "Skin & Spoon",
    year: '2025',
    status: 'ongoing',
    description: "An expiration tracker app helps users monitor food shelf life, get reminders, reduce waste, get AI recipe suggestions, manage a shared shopping list, and collaborate with others.",
    technologies:["laravel", "react", "inertia.js","mysql", "tailwind", "laravel breeze"],
    website:"https://skin-and-spoon.onrender.com/"
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
      <div className="flex w-full flex-col items-center gap-4 lg:flex-row md:gap-4 lg:gap-12">
        {/* Image Section */}
        <img 
          src={project?.image} 
          alt="" 
          // className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[500px] md:h-full object-cover"
          className="cursor-pointer rounded-lg transition-all duration-300 hover:scale-105 object-cover
          w-full sm:w-[60vh] md:w-[60vh] lg:w-[60vh] xl:w-[500px]"
        />

        {/* Content Section */}
        <div className="flex flex-col gap-5 md:h-full md:flex-1">
          <div className="flex flex-col">
          <div className="text-[2.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw] font-semibold">
            {project?.title} ({project?.year}) 
            {project?.status && (
              <span className="pl-1 text-[2vw] sm:text-[2vw] md:text-[1vw] lg:text-[1vw] xl:text-[1vw] font-light italic">
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  *
                </motion.span>
                {project?.status}
              </span>
            )}
          </div>
            <div className="text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw] text-pretty md:text-base text-justify">{project?.description}</div>
          </div>

          <div className="flex flex-wrap gap-1 md:gap-5 ">
            {
              project?.technologies?.map((tech, index) => (
                <span key={index} className="rounded-sm md:rounded-lg lg:rounded-lg xl:rounded-lg bg-black text-white justify-center py-1 px-3 flex  min-w-[60px] md:min-w-[100px] 
                text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]
                   ">
                  {tech}
                </span>
              ))
            }
          </div>

          <div className="flex gap-3">
            <div className="flex flex-wrap gap-5 w-full">
              <span className="border-2 border-black text-black p-3 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors w-full md:w-[400px]">
                <a
                  href={project?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]"
                >
                  Live View <AiOutlineArrowRight className="ml-2" />
                </a>
              </span>
            </div>

            {/* <div className="flex flex-wrap gap-5">
              <span className="border-2 border-black text-black p-3 rounded-lg flex items-center w-full md:w-[400px] justify-center hover:bg-black hover:text-white transition-colors">
                <a href={project?.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-[3vw] sm:text-[3vw] md:text-[3vw] lg:text-[1vw] xl:text-[1vw]">
                  Video Demo <AiOutlineArrowRight className="ml-2" />
                </a>
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </ScrollToReveal>
  )
}
const Projects = () => {
  return (
    <div 
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 sm:gap-6 md:gap-2 lg:gap-12
      p-4 px-6 md:px-20 md:py-24"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="font-light text-[8vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]"
      >
        Project
      </motion.h1>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }} 
        className=""
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