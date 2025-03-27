import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gwk7y2u",
        "template_dxuhkao",
        formData,
        "yN1JNoC614oTyz_SP"
      )
      .then(() => {
        setIsSent(true);
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  return ( 
    <div id="contact" className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-12 px-6 md:px-14">
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-[8vw] sm:text-[8vw] md:text-[5vw] lg:text-[4vw] xl:text-[3vw]">
          Stay In Touch
      </motion.h1>

      <motion.div 
        className="flex gap-6 justify-center"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
      >
        <a href="https://github.com/0xagu" target="_blank" rel="noopener noreferrer">
          <BiLogoGithub className="text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] xl:text-[2vw] hover:text-gray-600 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/esther-pui/" target="_blank" rel="noopener noreferrer">
          <BiLogoLinkedin className="text-[5vw] sm:text-[5vw] md:text-[4vw] lg:text-[4vw] xl:text-[2vw] hover:text-gray-600 transition-colors" />
        </a>
        {/* <a href="/publicResume.pdf" download="esther_pui_resume.pdf" target="_blank" rel="noopener noreferrer">
          <FiDownload className="text-xl md:text-2xl hover:text-gray-600 transition-colors"/>
        </a> */}
      </motion.div>
      
      <motion.form
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }} 
        onSubmit={sendEmail} 
        className="flex flex-col w-full max-w-[500px] gap-4"
        >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-md h-32"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send <Send size={20} />
        </button>
      </motion.form>

      {isSent && <p className="text-green-500">Message sent successfully!</p>}
    </div>
  );
};

export default Contact;
