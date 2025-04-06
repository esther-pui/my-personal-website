import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi"
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_gwk7y2u",
        "template_dxuhkao",
        formData,
        "yN1JNoC614oTyz_SP"
      )
      .then(() => {
        setFormData({ user_name: "", user_email: "", message: "" });
        toast.success("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return ( 
    <div id="contact" className="flex min-h-[100dvh] w-full flex-col items-center justify-center gap-6 sm:gap-6 md:gap-8 md:px-10 px-6">
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
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }} 
       className="flex flex-col items-center w-full max-w-[500px] gap-3">
        <a
          href="https://www.linkedin.com/in/esther-pui/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <div
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base text-center font-medium">
              Connect with me on LinkedIn
            </span>
          </div>
        </a>
      </motion.div>

      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }} 
        className="flex flex-col items-center w-full gap-5"
      >
        <p className="text-sm text-gray-500">— or —</p>
        <div className="text-base font-medium">Send me a message</div>

        <form onSubmit={sendEmail} className="flex flex-col w-full max-w-[500px] gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
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
          <motion.button
            type="submit"
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md transition ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
          >
            {isLoading ? (
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              />
            ) : (
              <>
                Send <Send size={20} />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      <p className="w-full text-center text-[2vw] sm:text-[1vw] md:text-[1vw] lg:text-[1vw] xl:text-[0.7vw]">
        Website designed and developed by yours truly in Mar, 2025.
      </p>
      
      {/* <footer className="w-full text-center text-[3vw] sm:text-[3vw] md:text-[3vw] lg:text-[3vw] xl:text-[3vw]">
        <p>
          Website designed and developed by yours truly in Mar, 2025.
        </p>
      </footer> */}
    </div>
  );
};

export default Contact;
