import { BiLogoJavascript, BiLogoPhp, BiLogoReact } from "react-icons/bi"
import { SiMysql } from "react-icons/si"
import { SiLaravel } from "react-icons/si"
import { motion } from "framer-motion"

const Tech = () => {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <div 
      id="tech"
      className="flex min-h-screen w-full flex-col items-center
      justify-center gap-16 md:gap-32"
    >
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration: 0.5}}
      className="text-4xl font-light md:text-6xl">
        Technologies
      </motion.h1>

      <div
      className="flex flex-wrap items-center justify-center gap-10 p-5"
      >
        <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration: 0.5}}
         >
          <BiLogoReact 
          className="cursor-pointer text-[80px] text-sky-500 
          transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration: 0.5}}
         >
          <BiLogoJavascript 
           className="cursor-pointer text-[80px] text-orange-500 
           transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
           />
        </motion.div>

        <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration: 0.5}}
         >
          <BiLogoPhp 
           className="cursor-pointer text-[80px] text-blue-600 
           transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
           />
        </motion.div>

        <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration: 0.5}}
         >
          <SiMysql 
            className="cursor-pointer text-[80px] text-[#4479A1] 
            transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>

        <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         transition={{duration: 0.5}}
         >
          <SiLaravel 
            className="cursor-pointer text-[80px] text-red-500 
            transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
          />
        </motion.div>
      </div>
    </div>
  ) 
}

export default Tech