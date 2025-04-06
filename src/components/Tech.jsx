import { BiLogoJavascript, BiLogoPhp, BiLogoReact } from "react-icons/bi"
import { SiGit, SiMysql, SiPostman, SiLaravel, SiTailwindcss, SiBootstrap,
  SiRedis, SiFigma, SiHtml5, SiCss3, SiSass, SiJquery
 } from "react-icons/si"
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
    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[color] font-semibold text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
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
        <TechIcon Icon={BiLogoReact} color="text-[#61DAFB]" text="React" />
        <TechIcon Icon={BiLogoJavascript} color="text-orange-500" text="JavaScript" />
        <TechIcon Icon={BiLogoPhp} color="text-[#777BB4]" text="PHP" />
        <TechIcon Icon={SiMysql} color="text-[#4479A1]" text="MySQL" />
        <TechIcon Icon={SiLaravel} color="text-[#FF2D20]" text="Laravel" />
        <TechIcon Icon={SiPostman} color="text-[#FF6C37]" text="Postman" />
        <TechIcon Icon={SiGit} color="text-[#F05032]" text="Git" />
        <TechIcon Icon={SiTailwindcss} color="text-[#38BDF8]" text="Tailwind CSS" />
        <TechIcon Icon={SiBootstrap} color="text-[#7952B3]" text="Bootstrap" />
        <TechIcon Icon={SiRedis} color="text-[#DC382D]" text="Redis" />
        <TechIcon Icon={SiFigma} color="text-[#F24E1E]" text="Figma" />
        <TechIcon Icon={SiHtml5} color="text-[#E34F26]" text="HTML5" />
        <TechIcon Icon={SiCss3} color="text-[#1572B6]" text="CSS3" />
        <TechIcon Icon={SiSass} color="text-[#CC6699]" text="Sass" />
        <TechIcon Icon={SiJquery} color="text-[#0769AD]" text="jQuery" />
      </div>
    </div>
  )
}

export default Tech