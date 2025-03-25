
import project1 from "../assets/project1.png"
import { motion } from "framer-motion"

const projectsData = [
  {
    image: project1,
    title: "Expiration Tracker",
    description: "loremipsum",
    technologies:["html","css","javascript","mysql"],
    website:"www.google.com"
  }
]

const ScrollToReveal = ({children}) => {
  return (
    <motion.div
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollToReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project?.image} alt="" 
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105
        md:w-[300px]"/>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project?.title}</div>
            <div className="text-gray-400">{project?.description}</div>
          </div>

          <div className="flex flex-wrap gap-5">
            {
              project?.technologies?.map((tech, index) => (
                <span key={index} className="rounded-lg bg-gray-500 p-3">
                  {tech}
                </span>
              ))
            }
          </div>

          <div className="flex flex-wrap gap-5">
          <span className="rounded-lg bg-black text-white p-3">
            <a href={project?.website} target="_blank" rel="noopener noreferrer">
              Website
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
    <div id="projects" 
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12
      p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light md:text-6xl">
        My Projects
      </h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {
          projectsData?.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects