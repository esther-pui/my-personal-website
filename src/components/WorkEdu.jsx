import { motion } from "framer-motion";
import companyLogo from "../assets/companyLogo.png";
import { useEffect } from "react";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const latestToOldest = [
  {
    image: companyLogo,
    company: "Zuno AI",
    position: "Full-stack Web Developer",
    duration: "Dec 2023 - Present",
    skills: ["react", "laravel", "sql"],
  },
  {
    image: companyLogo,
    company: "ARC Academy",
    position: "Japanese Language",
    duration: "Oct 2022 - Oct 2023",
  },
  {
    image: companyLogo,
    company: "Fourtitude Asia",
    position: "Java Developer",
    duration: "Oct 2021 - Sept 2022",
    skills: ["tailwinds", "vue.js", "adobe experience manager"],
  },
  {
    image: companyLogo,
    company: "Penang Hill Corporation",
    position: "IT Intern",
    duration: "Jul 2020 - Sept 2020",
    skills: ["php7", "javascript", "html", "css"],
  },
  {
    image: companyLogo,
    company: "UOW KDU Penang",
    position: "BS in Information System",
    duration: "Jun 2018 - Jun 2021",
  },
  {
    image: companyLogo,
    company: "Animamundi Sdn. Bhd.",
    position: "3D Animator",
    duration: "Nov 2016 - Jun 2017",
    skills: ["Autodesk Maya", "After Effect", "Adobe Photoshop"],
  },
]
const experienceData = [
  {
    image: companyLogo,
    company: "Zuno AI",
    position: "Full-stack Web Developer",
    duration: "Dec 2023 - Present",
    skills: ["react", "laravel", "sql"],
  },
  {
    image: companyLogo,
    company: "Fourtitude Asia",
    position: "Java Developer",
    duration: "Oct 2021 - Sept 2022",
    skills: ["html", "vue", "adobe experience manager"],
  },
  {
    image: companyLogo,
    company: "Penang Hill Corporation",
    position: "IT Intern",
    duration: "Jul 2020 - Sept 2020",
    skills: ["html", "vue", "adobe experience manager"],
  },
  {
    image: companyLogo,
    company: "Animamundi Sdn. Bhd.",
    position: "3D Animator",
    duration: "Nov 2016 - Jun 2017",
    skills: ["Autodesk Maya", "After Effect", "Adobe Photoshop"],
  },
  {
    image: companyLogo,
    company: "The One Academy",
    position: "Digital Animation",
    duration: "May 2013 - May 2016",
  },
];

const educationData = [
  {
    image: companyLogo,
    company: "UOW KDU Penang",
    position: "BS in Information System",
    duration: "Jun 2018 - Jun 2021",
  },
  {
    image: companyLogo,
    company: "The One Academy",
    position: "Digital Animation",
    duration: "May 2013 - May 2016",
  },
];

const ExperienceCard = ({ data }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      className="flex flex-col p-4 w-[320px] md:w-[400px] shrink-0 bg-white shadow-md rounded-lg"
    >
      <div className="flex items-center gap-x-4">
        <img
          src={data?.image}
          alt=""
          className="w-[55px] h-[55px] object-cover rounded-full duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
        <div className="text-left text-xs md:text-sm">
          <p className="font-semibold">{data?.company}</p>
          <p>{data?.position}</p>
        </div>
      </div>
      <p className="text-right text-xs md:text-sm mt-2">{data?.duration}</p>
    </motion.div>
  );
};

const WorkEdu = () => {

  useEffect(() => {
    const handleScroll = (e) => {
      const container = document.getElementById("scrollContainer");
      
      if (container && container.matches(":hover")) {
        document.body.style.overflowY = "hidden"; // Disable body scroll
      } else {
        document.body.style.overflowY = "auto"; // Enable body scroll
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.body.style.overflowY = "auto"; // Reset when component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="experience" className="min-h-screen w-full text-black flex flex-col items-center
      justify-center gap-12">
       <h1 className="text-4xl font-light md:text-6xl">Experience</h1>

      <div className="relative w-full overflow-hidden ">
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-6">
          <div className="snap-start flex flex-col">
            <div className="flex space-x-6 overflow-x-auto scroll-smooth p-4 overflow-y-hidden">
              {latestToOldest.map((experience, index) => (
                <ExperienceCard key={index} data={experience} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkEdu;
