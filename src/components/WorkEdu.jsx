import { motion } from "framer-motion";
import companyLogo from "../assets/companyLogo.png";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const latestToOldest = [
  { company: "Zuno AI", position: "Junior Web Developer", duration: "Dec 2023 - Present", category: "job", skills: ["ReactJS", "Laravel v8+", "MySQL", "MVC", "Git" ] },
  { company: "ARC Academy", position: "Japanese Language (Career Break)", duration: "Oct 2022 - Oct 2023", category: "school" },
  { company: "Fourtitude Asia", position: "Junior Application Developer", duration: "Oct 2021 - Sept 2022", category: "job", skills: ["Vue.js", "Tailwind", "Adobe Experience Manager", "Agile/Scrum", "Jira"] },
  { company: "Penang Hill Corporation", position: "IT Intern", duration: "Jul 2020 - Sept 2020", category: "job", skills: ["PHP7", "MySQL", "JavaScript", "HTML", "CSS", "Bootstrap"] },
  { company: "UOW KDU Penang", position: "BS in Information System", duration: "Jun 2018 - Jun 2021", category: "school" },
  { company: "Animamundi Sdn. Bhd.", position: "Associate 3D Animator", duration: "Nov 2016 - Jun 2017", category: "job", skills: ["Autodesk Maya", "Adobe After Effects", "Adobe Photoshop"] },
  { company: "The One Academy", position: "Diploma in 3D Animation", duration: "May 2013 - May 2017", category: "school" },
];

const JourneyCard = ({ data }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.3, delay: 0.1 }}
    className="w-full md:text-base py-2 border-b border-gray-300"
  >
    <p className="text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]">
      {data.company} - <span className="text-gray-600">{data.position}</span>
    </p>
    <p className="text-gray-500 text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]">{data.duration}</p>
    {data.skills && <p className="mt-1 text-gray-700 text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]">{data.skills.join(" • ")}</p>}
  </motion.div>
);

const WorkEdu = () => {
  return (
    <div id="experience" className="w-full min-h-[100dvh] flex flex-col items-center justify-center text-black gap-6 sm:gap-6 md:gap-8 md:px-10 px-6">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-[8vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]"
      >
        Journey
      </motion.h1>

      {/* Grid Layout: Jobs on Left, Schools on Right */}
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl grid grid-cols-2 gap-10"
      >
        {/* Left Column: Jobs */}
        <div className="flex flex-col gap-2 pb-5">
          <h2 className="font-semibold pb-1 text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]">Work</h2>
          {latestToOldest
            .filter((item) => item.category === "job")
            .map((experience, index) => (
              <JourneyCard key={index} data={experience} />
            ))}
        </div>

        {/* Right Column: Education */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold pb-1 text-[3vw] sm:text-[2vw] md:text-[2vw] lg:text-[1vw] xl:text-[1vw]">Education</h2>
          {latestToOldest
            .filter((item) => item.category === "school")
            .map((experience, index) => (
              <JourneyCard key={index} data={experience} />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkEdu;
