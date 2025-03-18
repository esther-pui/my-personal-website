// import image from "../assets/image.jpeg"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div 
      id="home" 
      className="px-8 md:px-16 flex min-h-screen w-full items-center
        justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-black">
        {/* <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
        >
          <img 
            src={image} 
            alt="" 
            className="w-[300px] cursor-pointer rounded-full shadow-xl
            shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl 
            hover:shadow-indigo-600 md:w-[350px]" 
          />
        </motion.div> */}

        <motion.div 
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.8, delay: 0.2}}
          className="flex md:max-w-[800px] flex-col  justify-center gap-3 "
        >
          <h1 className="text-4xl font-semibold text-center md:text-6xl">
            <span className="hidden md:inline">Hey, I'm </span>0xagu
          </h1>

          <h3 className="text-xl font-semibold font-light text-center md:text-3xl">
            Full-stack Web Developer
          </h3>
          <p className="text-pretty text-xs text-center md:text-base md:text-justify">
            Specializing in ⚡ Laravel and ⚛️ React, she builds seamless front-end experiences with a well-structured backend.  
            
            She integrates APIs, optimizes databases, and enjoys blending technology with creativity. In her free time, she explores 3D coding and illustration design as a hobby.
          </p>

        </motion.div>
      </div>
    </div>
  )
}

export default Hero