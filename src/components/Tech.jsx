import { BiLogoJavascript, BiLogoPhp, BiLogoReact } from "react-icons/bi"
import { SiGit, SiMysql, SiPostman, SiLaravel, SiTailwindcss } from "react-icons/si"
import { motion } from "framer-motion"

const TechIcon = ({ Icon, color, text }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5 }}
    className="relative group flex flex-col items-center"
  >
    <Icon 
      className={`cursor-pointer text-[80px] ${color} transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]`} 
    />
    <span className="absolute -top-14 left-1/2 -translate-x-1/2 text-[color] font-semibold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
      {text}
    </span>
  </motion.div>
)

const Tech = () => {
  return (
    <div
      id="tech"
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 sm:gap-6 md:gap-8 md:px-10 px-6"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-[8vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10">
        <TechIcon Icon={BiLogoReact} color="text-sky-500" text="React" />
        <TechIcon Icon={BiLogoJavascript} color="text-orange-500" text="Javascript" />
        <TechIcon Icon={BiLogoPhp} color="text-[#4F5B93]" text="Php" />
        <TechIcon Icon={SiMysql} color="text-[#4479A1]" text="MySQL" />
        <TechIcon Icon={SiLaravel} color="text-red-500" text="Laravel" />
        <TechIcon Icon={SiPostman} color="text-[#FF6C37]" text="Postman" />
        <TechIcon Icon={SiGit} color="text-[#F05033]" text="Git" />
        <TechIcon Icon={SiTailwindcss} color="text-[#38BDF8]" text="Tailwind" />
      </div>
    </div>
  )
}

export default Tech