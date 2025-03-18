import { motion } from "framer-motion"
import companyLogo from "../assets/companyLogo.png"

  const variants = {
      hidden:{opacity:0, y:50},
      visible:{opacity:1, y:0}
  }

  const experienceData = [
    {
      image: companyLogo,
      company: "Zuno AI",
      position: "Full-stack Web Developer",
      duration:"Dec 2023 - Present",
      skills:['react','laravel','sql']
    },
    {
      image: companyLogo,
      company: "Fourtitude Asia",
      position: "Java Developer",
      duration:"Oct 2021 - Sept 2022",
      skills:['html','vue','adobe experience manager']
    },
    {
      image: companyLogo,
      company: "Penang Hill Corporation",
      position: "IT Intern",
      duration:"Jul 2020 - Sept 2020",
      skills:['html','vue','adobe experience manager']
    },
    {
      image: companyLogo,
      company: "Animamundi Sdn. Bhd.",
      position: "3D Animator",
      duration:"Nov 2016 - Jun 2017",
      skills:['Autodesk Maya','After Effect','Adobe Photoshop']
    }
  ]

  const educationData = [
    {
      image: companyLogo,
      company: "UOW KDU Penang",
      position: "BS in Information System",
      duration:"Jun 2018 - Jun 2021"
    },
    {
      image: companyLogo,
      company: "The One Academy",
      position: "Digital Animation",
      duration:"May 2013 - May 2016",
    },
  ]

  const ExperienceCard = ({data}) => {
    return (
      <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        className="flex py-2 md:py-0 w-full max-w-[800px] justify-between items-center">
        <div className="flex items-center gap-x-4">
          <img 
            src={data?.image} 
            alt="" 
            className="
            md:w-[55px] md:h-[55px] 
            w-[45px] h-[45px] 
            object-cover rounded-full
            duration-300 
            hover:-translate-y-1
            hover:scale-100
            hover:shadow-grey-600 
            " 
          />
          <div className="text-left text-xs md:text-sm">
            <p className="font-semibold">
              {data?.company}
            </p>
            <p >
              {data?.position}
            </p>
          </div>
        </div>
        <div>
          <p className="text-right text-xs md:text-sm">
            {data?.duration}
          </p>
        </div>
      </motion.div>
    )
  }

  const SectionDiv = ({categoryName}) => {
    return (
      <motion.h1 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration: 0.5}}
        className="text-2xl md:text-4xl font-light py-18 md:text-6xl">
        {categoryName}
      </motion.h1>
    )
  };

const WorkEdu = () => {
    return (
      <div id="experience" className="px-8 w-full text-black">
        {/* Work Experience Section */}
        <div className="flex flex-col items-center md:justify-center md:min-h-screen md:gap-4">
          <SectionDiv categoryName="Work Experience" />
          {experienceData?.map((experience, index) => (
            <ExperienceCard key={index} data={experience} />
          ))}
        </div>
  
        {/* Education Section */}
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <SectionDiv categoryName="Education" />
          {educationData?.map((education, index) => (
            <ExperienceCard key={index} data={education} />
          ))}
        </div>
      </div>
    );
  };
  

export default WorkEdu