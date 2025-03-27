// import image from "../assets/image.jpeg"
import { motion } from "framer-motion"
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import { FiDownload } from "react-icons/fi"

const Hero = () => {
  return (
    <div 
      id="home" 
      className="px-6 flex min-h-[100dvh] w-full items-center
        justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-black">
        <div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
          className="flex md:max-w-[800px] flex-col  justify-center gap-1 sm:gap-3 md:gap-3 "
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
             className="font-light text-center text-[8vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]"
          >
            <span className="hidden md:inline">Hey, I'm </span>Esther Pui
          </motion.h1>

          <motion.h3 
            className="font-semibold text-center text-[4vw] sm:text-[4vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            Full-stack Web Developer
          </motion.h3>

          <motion.div 
            className="flex gap-6 justify-center py-2 sm:py-4 md:py-8"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/0xagu" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub className="text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.5vw] hover:text-gray-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/esther-pui/" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin className="text-[3vw] sm:text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.5vw] hover:text-gray-600 transition-colors" />
            </a>
            {/* <a href="/publicResume.pdf" download="esther_pui_resume.pdf" target="_blank" rel="noopener noreferrer">
              <FiDownload className="text-xl md:text-2xl hover:text-gray-600 transition-colors"/>
            </a> */}
          </motion.div>
         
          <motion.p 
            className="text-pretty text-justify text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.2vw] xl:text-[1vw]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }} 
          >
            Based in Kuala Lumpur, specializing in ⚡ Laravel and ⚛️ React.

            Her expertise ensures the platform follows best practices for both frontend and backend, with a robust backend that meets security, performance, and scalability standards, delivering a seamless user experience.  


            <br></br><br></br>
            Currently working at Zuno AI on a business management platform that simplifies and manage business operations. Contributing to backend development and system integration, she writes backend logic, integrates frontend components, connects APIs, and designs database tables to ensure secure, scalable systems.  

           
            <br></br><br></br>
            In her spare time, she enjoys watching movies, hanging out with her cat, drawing illustrations, and exploring 3D design and technology trends.
          </motion.p>

        </div>
      </div>
    </div>
  )
}

export default Hero