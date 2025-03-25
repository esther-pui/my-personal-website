import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

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
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-4 md:px-14 md:py-24">
      <h1 className="text-4xl font-light md:text-6xl">Stay In Touch</h1>

      <form onSubmit={sendEmail} className="flex flex-col w-full max-w-[500px] gap-4">
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
      </form>

      {isSent && <p className="text-green-500">Message sent successfully!</p>}
    </div>
  );
};

export default Contact;
